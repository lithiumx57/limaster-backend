<?php

namespace App\Infrastructure\Hashtag;

use Illuminate\Support\Collection;

interface Hashtagable
{
  public function getHashtags():Collection;

  public function saveHashtags():void;
}