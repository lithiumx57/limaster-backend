<?php

namespace App\Panel\Controllers;

use App\Panel\Dynamic\XBaseController;
use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XFileHelper;
use App\Panel\helpers\XStringHelper;
use App\Panel\Kernal\XConfigurator;
use App\Panel\Language\Language;
use App\Panel\Menu\XCacheMenus;
use App\Panel\Models\Role;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\View;

abstract class  XController extends XBaseController
{


  public function __construct()
  {
    $this->middleware(function ($request, $next) {

      View::share(['route' => self::$route, 'model' => self::$model]);
      XCacheMenus::build();
      if (getConfigurator()->isDebugMode()) return $next($request);
      if (!XConfigurator::auth()) abort(404);
      if ($request->getRequestUri() != "/table-sort") abort_if(!auth()->check(), 404);
      return $next($request);
    });
  }

  public function mtm():array
  {
    $rows = getXRequest("rows");
    $relation = getXRequest("relation");
    $result = ModelHelper::getRecord(getXRequest("t_id"));
    $result->$relation()->sync($rows);

    return [
      'status' => true,
      'message' => getConfigurator()->getSuccessMessage(),
    ];
  }


  public function deleteUploadedImage():void
  {
    $path = getXRequest("path");
    XFileHelper::deleteFile($path);
  }

  public function deleteFile():array
  {
    $path = getXRequest("path");
    if (XStringHelper::startWith($path, "/"))
      $path = substr($path, 1, xStrlen($path));
    try {
      unlink($path);
      return [
        'status' => true,
        'message' => getConfigurator()->getSuccessMessage()
      ];
    } catch (Exception) {
    }
    return [
      'status' => false,
      'message' => getConfigurator()->getErrorMessage()
    ];
  }

  public function adminSetting(): \Illuminate\Contracts\View\View|Application|Factory|\Illuminate\View\View|\Illuminate\Contracts\Foundation\Application
  {
    $roles = Role::all();
    return view('default.admin-setting', compact('roles'));
  }


  protected function successResponse():RedirectResponse
  {
    $redirectUrl = $this->getRedirectUrl();
    showSuccessMessage();
    return redirect($redirectUrl);
  }

  protected function getRedirectUrl():string
  {
    $additionalUrl = getAdditionalUrl();
    return buildRoute(self::$route . $additionalUrl);
  }


  public function languageStore():RedirectResponse
  {
    Language::storeData();
    showSuccessMessage();
    return back();
  }


}
