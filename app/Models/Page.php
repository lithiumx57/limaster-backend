<?php

namespace App\Models;

use App\Panel\Dynamic\LiModel;
use App\Panel\Dynamic\XDisable;
use App\Panel\Menu\XMenu;

/**
 * @property $id
 * @property $key
 * @property $value
 */
class Page extends LiModel
{
  protected ?string $title = "صفحه";
  protected ?string $pluralTitle = "صفحه ها";
  protected bool $cancelButton = false;
  protected bool $saveButton = false;


  const PAGES = [
    "about" => "about",
  ];

  protected $casts = [
    "value" => "array"
  ];

  public $timestamps = false;

  public function about(): array
  {

    $result = static::where("key", "about")->first();




    if ($result == null) {
      $description = "";
    } else {
      $description = @$result->value["description"];
    }
    return [
      xField()->text("description")->smart()->default($description),
    ];
  }


  public function menu(): ?XMenu
  {
    return xMenu("صفحه ها", [
      xSubmenu("درباره ما", "pages/create?type=about"),
    ]);
  }

  public function xObjectCreating(callable $next)
  {
    $type = request()->input("type");
    abort_if(!array_key_exists($type, self::PAGES), 404);
    $key = self::PAGES[$type];
    $result = request()->all();
    unset($result["_token"]);
    unset($result["type"]);
    unset($result["with-back-url"]);
    $object = static::where("key", $key)->first();
    if (request()->input("mode") && request()->input("mode") == "file") {
      $result = $this->uploadFiles();
    }
    if ($object) $object->update(["key" => $key, "value" => $result]);
    else static::create(["key" => $key, "value" => $result]);
    xAlert("به روز رسانی با موفقیت انجام شد");
    return back();
  }

  public function fields(): array
  {
    $type = request()->input("type");

    abort_if(!array_key_exists($type, self::PAGES), 404);



    $method = self::PAGES[$type];
    return [
      ...$this->$method(),
      xField()->hidden("type")->default($type)
    ];
  }


  public static function disable(): XDisable
  {
    return xDisable()->edit()->index()->delete();
  }


}
