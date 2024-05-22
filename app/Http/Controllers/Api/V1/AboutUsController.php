<?php

namespace App\Http\Controllers\Api\V1;

use App\Helpers\Cast\CastPublicData;
use App\Helpers\Cast\HeadBuilder;
use App\Http\Controllers\Controller;
use App\Infrastructure\ModelCast\SlideCast;
use App\Models\Page;
use Exception;
use Illuminate\Http\Request;

class AboutUsController extends Controller
{

  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }

  public function get()
  {
    $page = Page::where('key', "about")->first();

    return CastPublicData::castWith([
      "extra" => [
        "fa" => $page->value["description"]
      ]
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL")
    ));
  }


}
