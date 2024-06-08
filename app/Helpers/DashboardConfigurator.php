<?php

namespace App\Helpers;

use App\Panel\Kernal\DefaultConfigurator;

class DashboardConfigurator extends DefaultConfigurator
{

  public function isDebugMode(): bool
  {
    return true;
  }

  public function prefix(): string
  {
    return "";
  }

  public function isDashboardProject(): bool
  {
    return true;
  }

  public function getPages(): array
  {
    return [
      "home" => 'صفحه اصلی',
      "blog" => 'وبلاگ',
      "project-management" => 'مدیریت پروژه',
      "quotations" => 'کنایه ها',
      "forum" => 'انجمن',
      "login" => 'صفحه ورود',
      "register" => 'صفحه ثبت نام',
      "forum-add" => 'افزودن سوال در انجمن',
      "blog-add" => 'افزودن مقاله جدید',
      "ai" => 'هوش مصنوعی',
      "ai-chat" => 'گفت و گو با هوش مصنوعی',
      "ai-text-shorthand" => 'خلاصه نویسی با هوش مصنوعی',
      "meet" => 'چت و گفت و گو آنلاین',
      "group-meet" => 'ملاقات آنلاین',
      "calendar" => 'برنامه ریزی',
      "develope" => 'برنامه نویسان',
      "forgot-password" => 'فراموشی رمز عبور',
      "password-reset" => 'بازیابی رمز عبور',
      "change-info-service" => 'اطلاعات آی پی و دامنه',
    ];
  }


  public function getUpdateServer(): string
  {
    return "http://panel.local";
  }


}
