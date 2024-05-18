<?php

namespace App\Infrastructure\Profile;

use App\Panel\helpers\XStringHelper;
use Carbon\Carbon;
use Exception;

class UpdatePersonalInfo
{
  /**
   * @throws Exception
   */
  public static function updateInfo(): void
  {
    if (!auth()->check()) return;

    $name = request()->input("name");
    $nickname = request()->input("nickname");
    $bio = request()->input("bio");
    $job = request()->input("job");

    $year = request()->input("year");
    $month = request()->input("month");
    $day = request()->input("day");

    $website = request()->input("website");
    $github = request()->input("github");
    $linkedin = request()->input("linkedin");
    $telegram = request()->input("telegram");
    $instagram = request()->input("instagram");
    $twitter = request()->input("twitter");

    $description = request()->input("description");

    validate()->validateString($name, "نام و نام خانوادگی", min: 3, max: 50);
    validate()->validateString($nickname, "نام نمایشی", min: 3, max: 50, required: false);
    validate()->validateString($bio, "بیوگرافی کوتاه", min: 3, max: 200, required: false);
    validate()->validateString($job, "عنوان شغلی", min: 3, max: 30, required: false);


    self::validateAndSaveBirthday($year, $month, $day);

    auth()->user()->update(["name" => $name]);

    auth()->user()->attachData("profile,nickname", $nickname);
    auth()->user()->attachData("profile,bio", $bio);
    auth()->user()->attachData("profile,job", $job);


    if (is_string($website) && !XStringHelper::hasString($website, "http"))  $website = "https://" . $website;
    if (is_string($linkedin) && !XStringHelper::hasString($linkedin, "http"))  $linkedin = "https://" . $linkedin;
    if (is_string($instagram) && !XStringHelper::hasString($instagram, "http"))  $instagram = "https://" . $instagram;
    if (is_string($github) && !XStringHelper::hasString($github, "http"))  $github = "https://" . $github;
    if (is_string($twitter) && !XStringHelper::hasString($twitter, "http"))  $twitter = "https://" . $twitter;
    if (is_string($telegram) && !XStringHelper::hasString($telegram, "http"))  $telegram = "https://" . $telegram;



    validate()->validateLink($website, "آدرس وبسایت", required: false);
    validate()->validateLink($linkedin, "آدرس لینکدین", required: false);
    validate()->validateLink($instagram, "آدرس اینستاگرام", required: false);
    validate()->validateLink($twitter, "آدرس تویتر", required: false);
    validate()->validateLink($telegram, "آدرس تلگرام", required: false);
    validate()->validateLink($github, "آدرس گیتهاب", required: false);


    $socials = [
      "website" => $website,
      "github" => $github,
      "linkedin" => $linkedin,
      "telegram" => $telegram,
      "instagram" => $instagram,
      "twitter" => $twitter,
    ];

    auth()->user()->attachData("profile,socials", $socials);
    auth()->user()->attachData("profile,description", $description);


  }

  /**
   * @throws Exception
   */
  private static function validateAndSaveBirthday($year, $month, $day): void
  {
    $hasBirthday = (is_numeric($year) || is_numeric($month) || is_numeric($day)) && ($year > 0 || $month > 0 || $day > 0);
    if (!$hasBirthday) return;


    $nowYear = convertToJalali(Carbon::now(), "Y");
    validate()->validateNumber($year, "سال تولد", min: 1320, max: $nowYear);
    validate()->validateNumber($month, "ماه تولد", min: 1, max: 12);


    if ($month >= 1 && $month <= 6) {
      validate()->validateNumber($day, "روز تولد", min: 1, max: 31);
    } else if ($month >= 7 && $month <= 11) {
      validate()->validateNumber($day, "روز تولد", min: 1, max: 30);
    } else if ($month == 12) {
      validate()->validateNumber($day, "روز تولد", min: 1, max: 29);
    } else if ($month < 1 || $month > 12) {
      throw new Exception("ماه تولد باید عددی بین یک تا دوازده باشد");
    }


    try {
      $date = "$year" . "/" . $month . "/" . $day;
      $date = convertToGregory($date, "Y-m-d");
      $date = Carbon::parse($date)->format('Y-m-d');

      auth()->user()->attachData("profile,birthday", [
        "main" => $date,
        "jalali" => convertToJalali($date, "Y/m/d"),
      ]);

    } catch (Exception) {
      throw new Exception("تاریخ تولد اشتباه هست");
    }

  }

}














