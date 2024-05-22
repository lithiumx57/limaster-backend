<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Exception;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $user_id
 * @property $model
 * @property $model_id
 */
class Favorite extends Model
{
  use XModelHelper;

  protected $guarded = ["id"];


  public const MODELS = [
    "article" => Article::class,
    "quotation" => Quotation::class,
    "question" => Quotation::class,
    "forum" => Forum::class,
  ];


  public static function switch($model = null, $modelId = null):array
  {
    $model = $model ?? request()->input("model");
    $modelId = $modelId ?? request()->input("modelId");
    $user = auth()->user();
    if (!$user) throw new  Exception("برای افزودن رکورد به علاقه مندی ها ابتدا وارد حساب کاربری خود شوید");
    if (!$model) throw new  Exception("خطایی رخ داده است");
    if (!@self::MODELS[$model]) throw new  Exception("خطایی رخ داده است");
    $model = self::MODELS[$model];
    $record = $model::find($modelId);
    if (!($record instanceof $model)) throw new  Exception("رکورد یافت نشد");
    if (!$record->approved) throw new  Exception("رکورد تایید نشده است");


    $favorite = static::where(["user_id" => $user->id, "model_id" => $modelId, "model" => $model])->first();
    if ($favorite) {
      $favorite->delete();
    } else {
      static::create(["user_id" => $user->id, "model_id" => $modelId, "model" => $model]);
    }

    return self::getAll();
  }

  public static function isInFavorite($model, $modelId): bool
  {
    return !!static::where(["user_id" => auth()->user()->id, "model_id" => $modelId, "model" => $model])->count();
  }


  public static function getModelKey($model): string|null
  {
    foreach (self::MODELS as $key => $value) {
      if ($model == $value) return $key;
    }
    return null;
  }

  public static function getAll(): array
  {
    if (!auth()->check()) return [];
    $result = static::where("user_id", auth()->user()->id)->get();

    $records = [];
    foreach ($result as $row) {
      $model = self::getModelKey($row->model);
      if ($model == null) continue;

      $key = @$records[$model];
      if (!$key) $records[$model] = [];
      $records[$model][] = $row->model_id;
    }

    return $records;
  }


}
