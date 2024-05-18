<?php

namespace App\Http\Controllers\Api\V1;

use App\Helpers\Cast\HeadCast;
use App\Http\Controllers\Controller;
use App\Infrastructure\Articles\AddQuotation;
use App\Infrastructure\ModelCast\QuotationCast;
use App\Infrastructure\ModelCast\UserCast;
use App\Models\Quotation;
use App\Models\User;
use App\Panel\Models\Tag;
use Exception;

class QuotationsController extends Controller
{
  public function index($method)
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
    AddQuotation::add();
    return [
      "success" => true
    ];
  }


  public function all()
  {
    $users = Quotation::limit("20")->pluck("user_id")->toArray();
    $users = array_unique($users);
    $authors = UserCast::castCollection(User::whereIn("id", $users)->get());

    return [
      "authors" => $authors,
      "tags" => Tag::castPopular(Quotation::class, 40),
      "quotations" => QuotationCast::castAll(),
      "head" => HeadCast::castPage("quotation")
    ];
  }


  public function search()
  {
    return QuotationCast::searchAndCast();
  }


  /**
   * @throws Exception
   */
  public function delete()
  {
    $user = auth()->user();
    if (!$user) throw new Exception();
    if (!$user->isAdmin()) throw new Exception();
    $id = request()->input("id");

    $quotation = Quotation::findOrFail($id);
    $quotation->deleteTags();
    $quotation->delete();
    return [];
  }

}
