<?php

namespace App\Infrastructure\Articles;

use App\Helpers\AddHashtagToModel;
use App\Models\Article;
use App\Models\Quotation;
use App\Panel\helpers\Image\XImageUploader;
use Exception;
use Illuminate\Support\Carbon;

class AddQuotation
{
  /**
   * @throws Exception
   */
  public static function add(): void
  {

    if (!auth()->check()) {
      throw new Exception("برای ثبت کنایه باید ابتدا وارد حساب کاربری خود شوید");
    }


    $description = request()->input("description");
    $tags = request()->input("tags");

    validate()->validateString($description, "توضیحات کنایه", min: 20, max: 5000);
    if (!is_array($tags)) $tags = [];
    if (count($tags) > 5) throw new Exception("تعداد تگ ها نباید بیشتر از 5 مورد باشد");


    $quotation = Quotation::create([
      "user_id" => auth()->id(),
      "description" => $description,
      "approved" => auth()->user()->isAdmin(),
      "published_at" => Carbon::now()->format('Y-m-d H:i:s'),
    ]);

    $tagRecords = [];


    foreach ($tags as $tag) {
      $tagRecords[] = str_replace(" ", "_", $tag["text"]);
    }

    AddHashtagToModel::add($quotation, $tagRecords);
  }

}