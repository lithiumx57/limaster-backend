<?php

namespace App\Infrastructure\Articles;

use App\Helpers\AddHashtagToModel;
use App\Models\Article;
use App\Panel\helpers\Image\XImageUploader;
use Exception;
use Illuminate\Support\Carbon;

class AddArticle
{
  /**
   * @throws Exception
   */
  public static function add(): void
  {

    if (!auth()->check()) {
      throw new Exception("برای ثبت مقاله باید ابتدا وارد حساب کاربری خود شوید");
    }


    $title = request()->input("title");
    $description = request()->input("description");
    $tags = request()->input("tags");
    $image = request()->input("image");
    $imageUploader = new XImageUploader();
    $image = $imageUploader->uploadFromBase64(Article::getUploadDirectory(), $image, [1200, 1600]);

    validate()->validateString($title, "عنوان مقاله", min: 12, max: 120);
    validate()->validateString($description, "توضیحات مقاله", min: 60, max: 20000);
    if (!is_array($tags)) $tags = [];
    if (count($tags) > 5) throw new Exception("تعداد تگ ها نباید بیشتر از 5 مورد باشد");


    $article = Article::create([
      "user_id" => auth()->id(),
      "username" => auth()->user()->name,
      "title" => $title,
      "description" => $description,
      "images" => $image,
      "approved" => auth()->user()->isAdmin(),
      "category_id" => 19,
      "meta" => "-",
      "published_at" => Carbon::now()->format('Y-m-d H:i:s'),
      "slug" => $title,
    ]);

    $tagRecords = [];


    foreach ($tags as $tag) {
      $tagRecords[] = str_replace(" ", "_", $tag["text"]);
    }

    AddHashtagToModel::add($article, $tagRecords);
  }

}
