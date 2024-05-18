<?php

namespace App\Helpers;

class RegexExtract
{
  public static function extractImages($text):array
  {
    if (!is_string($text)) return [];

    $extensions = ["png", "jpg", "bmp", "jpeg", "gif", "webp"];
    $_extensions = implode("|", $extensions);
    preg_match_all("/(\/.*?\.($_extensions))/", $text, $records);
    $result = [];
    foreach ($records as $row) {
      if (is_string($row)) $result[] = $row;
      else if (is_array($row)) foreach ($row as $row2) $result[] = $row2;
    }
    $result = array_unique($result);
    $finalResult = [];
    foreach ($result as $row) {
      if (hasIndex($extensions, $row)) continue;
      $finalResult[] = $row;
    }
    return $finalResult;
  }


  public static function extractHastags($text): array
  {
    $text = escapeHtml($text);

    $hashtags = false;
    preg_match_all("/(#\w+)/u", $text, $matches);
    if ($matches) {
      $hashtagsArray = array_count_values($matches[0]);
      $hashtags = array_keys($hashtagsArray);
    }
    return $hashtags;
  }



  public static function deleteHastags($text): string
  {
    return preg_replace('/#(\w+)/u', '', $text);
  }







}
