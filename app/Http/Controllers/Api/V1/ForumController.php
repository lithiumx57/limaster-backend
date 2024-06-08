<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Forum\CreateAnswer;
use App\Infrastructure\Forum\CreateForumQuestion;
use App\Infrastructure\Forum\QuestionCast;
use App\Models\Forum;
use App\Models\ForumLine;
use Exception;

class ForumController extends Controller
{
  public function index($type)
  {
    try {
      return apiResponse()->success($this->$type());
    } catch (Exception $e) {
      return apiResponse()->validationError($e->getMessage());
    }
  }


  /**
   * @throws Exception
   */
  public function add()
  {
    CreateForumQuestion::create();
    return apiResponse()->success(["message" => "پرسش با موفقیت ثبت گردید"]);
  }


  public function questions()
  {
    return QuestionCast::castAll();
  }


  public function single()
  {
    return QuestionCast::fullPageCast();
  }

  /**
   * @throws Exception
   */
  public function answer()
  {
    $result = CreateAnswer::init();
    $id = request()->input("id");
    $forum = Forum::find($id);

    return [
      "question" => QuestionCast::fullPageCast($forum->id, $forum->slug),
      "id" => $result->id,
    ];
  }


  public function done()
  {
    $user = auth()->user();

    if (!$user->isAdmin()) return null;

    $id = request()->input("id");
    $forumLine = ForumLine::find($id);
    if ($forumLine->done) {


      $forumLine->update(["done" => false]);
      $forumLine->forum->update(["done" => false]);
    } else {
      $forumLine->forum->lines()->update([
        "done" => false
      ]);
      $forumLine->update(["done" => true]);
      $forumLine->forum->update(["done" => true]);
    }
    return apiResponse()->success([
      "success" => true
    ]);

  }


  public function delete()
  {
    $id = request()->input("id");
    $user = auth()->user();
    if (!$user->isAdmin()) return null;

    $forum = Forum::find($id);
    $forum->delete();
    return apiResponse()->success([
      "success" => true
    ]);

  }

}
