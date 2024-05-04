<?php

namespace App\Infrastructure\Comments;

interface CommentableInterface
{

  public function canPostComment():bool;

  public function updateCommentsCount():void;

  public function defaultApproved():bool;


}
