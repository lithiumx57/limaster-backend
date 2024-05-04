<?php

namespace App\Infrastructure\Articles;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use App\Panel\helpers\ImageHelper;
use App\Panel\helpers\XFileHelper;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Str;

class ArticleCreator
{
  /**
   * @throws Exception
   */
  public static function create($user, $title, $time, $category, $description, $image): Article
  {
    if (!($user instanceof User)) throw new Exception("برای ثبت مقاله وارد حساب کاربری خود شوید");

    validate()->validateString($title, "عنوان مقاله ", min: 12, max: 72);
    validate()->validateString(xEscapeHtml($description), "عنوان مقاله ", min: 12, max: 10000);
    validate()->validateString($time, "زمان مطالعه", min: 6, max: 12);
    validate()->validateArray($category, "دسته بندی");
    validate()->validateBase64Image($image, "تصویر مقاله");


    $images = ImageHelper::uploadFromBase64(Article::getUploadDirectory(), $image, [1200, 1600]);

    $meta = Str::substr(xEscapeHtml($description), 0, 220);
    $slug = createSlug(Article::class, $title);


    $categoryId = getApiSelectValue($category);
    $category = Category::where("id", $categoryId)->where("approved", true)->where("model", Article::class)->first();

    if (!($category instanceof Category)) {
      throw new Exception("دسته بندی انتخاب شده نامعتبر است");
    }

    $article = Article::create([
      "title" => $title,
      "description" => $description,
      "likes_count" => 0,
      "user_id" => $user->id,
      "category_id" => $categoryId,
      "images" => $images,
      "meta" => $meta,
      "comments_count" => 0,
      "slug" => $slug,
      "approved" => true,
      "time_to_read" => $time,
      "publish_at" => Carbon::now(),
      "comment_active" => true,
      "username" => $user->getName(),
      "views_count" => 0,
    ]);


    $category->updateModelCount();
    return $article;
  }

  /**
   * @throws Exception
   */
  public static function createByRequest(): Article
  {
    $title = request()->input("title");
    $category = request()->input("category");
    $time = request()->input("time");
    $image = request()->input("image");
    $description = request()->input("description");

    $user = getUser();
    return self::create($user, $title, $time, $category, $description, $image);
  }


}
