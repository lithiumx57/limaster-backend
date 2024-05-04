<?php

namespace App\Panel\Database;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Schema;

class DbHelper
{
  public static function generateRolesTable(): RedirectResponse
  {
    $result = self::isValidTable("roles");
    if ($result) return redirect()->route('panel');
    XDbTables::createRolesTable();
    return redirect()->route('panel');
  }


  public static function generateLanguagesTable(): RedirectResponse
  {
    $result = self::isValidTable("languages");
    if ($result) return redirect()->route('panel');
    XDbTables::createLanguagesTable();
    return redirect()->route('panel');
  }

  public static function generateTagsTable(): RedirectResponse
  {
    $result = self::isValidTable("tags");
    if ($result) return redirect()->route('panel');
    XDbTables::createTags();
    return redirect()->route('panel');
  }


  public static function generatePanelMenusTable(): RedirectResponse
  {
    $result = self::isValidTable("panel_menus");
    if ($result) return redirect()->route('panel');
    XDbTables::createMenusTable();
    return redirect()->route('panel');
  }


  public static function generateNotificationsTable(): RedirectResponse
  {
    $result = self::isValidTable("notifications");
    if ($result) return redirect()->route('panel');
    XDbTables::createNotificationsTable();
    return redirect()->route('panel');
  }


  public static function generateOnlinesTable(): RedirectResponse
  {
    $result = self::isValidTable("onlines");
    if ($result) return redirect()->route('panel');
    XDbTables::createOnlinesTable();
    return redirect()->route('panel');
  }

  public static function generateAttachmentsTable(): RedirectResponse
  {
    $result = self::isValidTable("attachments");
    if ($result) return redirect()->route('panel');
    XDbTables::createAttachmentsTable();
    return redirect()->route('panel');
  }




  public static function isValidTable($table): bool
  {
    return Schema::hasTable($table);
  }


  public static function generateHeadsTables(): RedirectResponse
  {
    $result = self::isValidTable("heads");
    if ($result) return redirect()->route('panel');
    XDbTables::createHead();
    return redirect()->route('panel');
  }

  public static function generatePanelModels(): RedirectResponse
  {
    $result = self::isValidTable("panel_models");
    if ($result) return redirect()->route('panel');
    XDbTables::createPanelModels();
    return redirect()->route('panel');
  }


  public static function initOwns(): RedirectResponse
  {
    $result = self::isValidTable("owns");
    if ($result) return redirect()->route('panel');
    XDbTables::createOwnsTable();
    return redirect()->route('panel');
  }


}
