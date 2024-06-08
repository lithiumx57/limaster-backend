<?php

namespace App\Http\Controllers\Api\V1;

use App\Helpers\Cast\HeadCast;
use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Forum;
use Exception;

class HeadsController extends Controller
{

  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }


  public function default()
  {
    $type = request()->input("type");
//    $type = "project-management";
    return HeadCast::castPage($type);
  }

  public function article()
  {
    $slug = request()->input("slug");
    $article = Article::where("slug", $slug)->where("approved", true)->first();
    if (!$article) {
      return ["title" => "404 page not found", "description" => ""];
    }
    return [
      "title" => $article->title,
      "description" => $article->meta
    ];
  }

  public function forum()
  {
    $slug = request()->input("slug");
    $article = Forum::where("slug", $slug)->where("approved", true)->first();
    if (!$article) {
      return ["title" => "404 page not found", "description" => ""];
    }
    return [
      "title" => $article->title,
      "description" => mb_substr($article->description, 0, 200)
    ];
  }


}
