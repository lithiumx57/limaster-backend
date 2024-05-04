<?php

namespace App\Http\Controllers\Api\V1;

use App\Helpers\Cast\HeadCast;
use App\Http\Controllers\Controller;
use App\Infrastructure\Articles\AddArticle;
use App\Infrastructure\Articles\ArticleCast;
use App\Infrastructure\ModelCast\CategoriesCast;
use App\Models\Article;
use App\Panel\Models\Tag;
use Exception;

class BlogController extends Controller
{
  public function index($method)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }


  public function all()
  {
    $page = request()->input("page");
    if ($page == null) {
      $page = 1;
    }

    setPage($page);
    return [
      "articles" => ArticleCast::castWithPaginate(Article::getQuery()->latest()->paginate(Article::perPage())),
      "categories" => CategoriesCast::castAll(Article::class),
      "tags" => Tag::castPopular(Article::class, 40),
      "head" => HeadCast::castPage("blog")
    ];
  }

  public function single()
  {
    return ArticleCast::pageCast();
  }

  /**
   * @throws Exception
   */
  public function add()
  {
    AddArticle::add();
    return [
      "success"=>true
    ];
  }


}
