<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Comments\CommentCreate;
use App\Infrastructure\ModelCast\CommentCast;
use Exception;

class CommentsController extends Controller
{

  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }

  /**
   * @throws Exception
   */
  public function add()
  {
    $canApproved = CommentCreate::create();
    $message = $canApproved ? "دیدگاه شما با موفقیت ثبت گردید" : "دیدگاه شما با موفقیت ثبت شد و پس از تایید در سایت نمایش داده خواهد شد";
    $records = [];
    if ($canApproved) $records = CommentCast::castFromRequest();
    return ["message" => $message, "records" => $records];
  }

}
