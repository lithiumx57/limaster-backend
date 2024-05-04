<?php

namespace App\Infrastructure\Likes;

class LikeHandlerResponse
{
  private int $count = 0;
  private string $type = "add";

  /**
   * @return int
   */
  public function getCount(): int
  {
    return $this->count;
  }

  /**
   * @param int $count
   */
  public function setCount(int $count): void
  {
    $this->count = $count;
  }

  /**
   * @return string
   */
  public function getType(): string
  {
    return $this->type;
  }

  /**
   * @param string $type
   */
  public function setType(string $type): void
  {
    $this->type = $type;
  }




}
