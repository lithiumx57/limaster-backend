<?php

namespace App\Models;

use App\Panel\Dynamic\LiModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;


/**
 * @property $id
 * @property $title
 * @property $position
 * @property $slug
 * @property $model_count
 * @property $description
 * @property $image
 * @property $model
 * @property Collection $children
 * @property $approved
 * @property $created_at
 * @property $updated_at
 * @property $deleted_at
 */
class Category extends LiModel
{
  use SoftDeletes;

  protected ?string $title = "دسته بندی";


  public const MODELS = [
//    Project::class => "پروژه ها",
    Article::class => "مقاله ها",
//    Job::class => "فرصت های شغلی",
  ];


  public const TYPES = [
//    "project" => Project::class,
    "article" => Article::class,
//    "job" => Job::class
  ];


  public static function getQuery()
  {
    return Category::where("approved", true);
  }


  public function getType(): string|null
  {
    foreach (self::TYPES as $key => $value) {
      if ($this->model == $value) {
        return $key;
      }
    }
    return null;
  }


  protected $casts = [
    "image" => "array"
  ];


  public static ?string $sortField = "position";


  public function getImage($size = 64): string|null
  {
    return  "/files/uploads/categories/" . @$this->image[$size];
  }


  public function fields(): array
  {
    return [
      xField()->group([
        xField()->string("title")->showInTable()->label("عنوان فارسی"),
        xField()->string("slug")->showInTable()->label("عنوان انگلیسی"),
      ]),

      xField()->image("image")->uploadPath("categories")->label("عکس دسته بندی")->sizes(64, 300)->showInTable()->nullable(),
      xField()->br(),
      xField()->select("model")->options(self::MODELS)->label("مدل")->showInTable(),
      xField()->br(),
      xField()->foreign("parent", Category::class, "parentCategory", ["title", "slug"])->parentable("parentCategory")->defaultOptions(["0" => "دسته اصلی"])->label("دسته پدر")->showInTable(),

      xField()->text("description")->smart()->showInTable()->dialogMode()->nullable(),
      xField()->bool("approved")->showInTable()->switchable(),
    ];
  }

  public function parentCategory(): BelongsTo
  {
    return $this->belongsTo(Category::class, "parent", "id");
  }

  public function updateModelCount(): void
  {
    $model = $this->model;
    $count = $model::where("category_id", $this->id)->count();
    $this->update([
      "model_count" => $count
    ]);

  }


  public function getApiLink(): string
  {
    if ($this->model == Article::class) {
      return "/category/" . $this->slug . "/1";
    }
    return "";
  }

  public function children(): HasMany
  {
    return $this->hasMany(Category::class, "parent");
  }

}
