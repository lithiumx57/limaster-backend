<?php

namespace App\Infrastructure\Likes;

interface LikableInterface
{
  public function updateLikesCount():void;

  public function getLikesCount():int;

}
