<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Ai\Chat\AiMessage;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AiController extends Controller
{

  public function index($method)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }


  public function chats()
  {
    $messages = AiMessage::where("user_id", Auth::id())->get();
    $records = [];

    foreach ($messages as $message) {
      $records[] = [
        "id" => $message->id,
        "message" => $message->first_message,
        "created_at" => getAgoJalali($message->created_at),
      ];
    }

    return $records;
  }


}
