<?php

namespace App\Panel\Models;

use App\Panel\Dynamic\LiModel;
use App\Panel\Menu\XMenu;
use Artesaos\SEOTools\Facades\SEOTools;
use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;


/**
 * @property $id
 * @property $key
 * @property $value
 */
class Head extends LiModel
{
  protected ?string $title = "عنوان صفحات";
  public bool $menuOff = false;

  protected bool $saveButton = false;
  protected bool $cancelButton = false;
  public $timestamps = false;


  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);
    $this->menuOff = !Schema::hasTable("heads");
  }


  public function options(): array
  {
    return [
      xOptionOff(),
    ];
  }

  public function menu(): ?XMenu
  {
    return xMenu("عناوین صفحات", null, "heads/create");
  }


  public static function xObjectPreCreate(callable $next)
  {
    foreach (request()->all() as $key => $value) {
      if ($key == "_token" || $key == "xFilters" || $key == "xModel") continue;
      self::createOrUpdate($key, $value);
    }
    try {
      cache()->forget("seotools");
    } catch (\Exception $e) {
    }
    showSuccessMessage();
    return back();
  }


  public static function getHeads()
  {
    $records = [];
    foreach (getConfigurator()->getPages() as $key => $page) {
      foreach (getConfigurator()->getLanguages() as $lKey => $language) {
        $records[$page][] = ['title' => "عنوان $language", 'type' => 'input', 'name' => 'title_' . $lKey, 'prefix' => $key];
        $records[$page][] = ['title' => "توضیحات $language", 'type' => 'textarea', 'name' => 'description_' . $lKey, 'prefix' => $key];
      }
    }
    return $records;
  }


  public function fields(): array
  {
    return [
      xField()->custom("heads")->viewPath("head")->nullable()->parentClasses("col-xl-12")
//      xFieldCustom("heads", "head", xNullable(), xParentClasses("col-xl-12"))
    ];
  }

  public static function createOrUpdate($key, $value)
  {

    $row = static::where("key", $key)->first();
    if ($row instanceof Head) {
      $row->update(['value' => $value]);
    } else {
      static::create([
        'key' => $key,
        'value' => $value,
      ]);
    }

    self::forgetCaches();
  }


  public static function getRow($key)
  {
    $row = static::where("key", $key)->first();
    if (!($row instanceof Head)) {
      $row = static::create([
        'key' => $key,
        'value' => "وارد نشده",
      ]);
    }
    return $row;
  }

  private static function forgetCaches()
  {
    foreach (getConfigurator()->getPages() as $key => $page) {
      try {
        cache()->forget("seotools.$key");
      } catch (\Exception $e) {
      }
    }
  }


  public static function release($page, $type = "article", $twitter = "@lithium_xlvii")
  {
    $lang = "fa";
    $titleKey = $page . "_title_" . $lang;
    $descriptionKey = $page . "_description_" . $lang;


    try {
      $result = cache()->get("seotools.$page");
      if ($result) {
        $title = $result['title'];
        $description = $result['description'];
      } else {
        $title = self::getRow($titleKey)->value;
        $description = self::getRow($descriptionKey)->value;
        cache()->put("seotools.$page", [
          'title' => $title,
          'description' => $description
        ], Carbon::now()->addMonths(6));
      }
    } catch (\Exception $e) {
    }


    $url = request()->url();
    SEOTools::setTitle($title);
    SEOTools::setDescription($description);
    SEOTools::opengraph()->setUrl(urldecode($url));
    SEOTools::setCanonical(urldecode($url));
    SEOTools::opengraph()->addProperty('type', $type);
    SEOTools::twitter()->setSite($twitter);
  }

  public static function releaseCustom($title, $description = null, $type = "article", $twitter = "@lithium_xlvii")
  {
    if ($description == null) $description = $title;
    $url = request()->url();
    SEOTools::setTitle($title);
    SEOTools::setDescription($description);
    SEOTools::opengraph()->setUrl(urldecode($url));
    SEOTools::setCanonical(urldecode($url));
    SEOTools::opengraph()->addProperty('type', $type);
    SEOTools::twitter()->setSite($twitter);
  }

}
