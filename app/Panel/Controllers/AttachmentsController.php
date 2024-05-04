<?php

namespace App\Panel\Controllers;

use App\Panel\helpers\XFileHelper;
use App\Panel\Models\Attachment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;


class AttachmentsController extends XController
{


  public function deleteItem(): array
  {

    $page=request()->input("page");

    Paginator::currentPageResolver(function () use ($page) {
      return $page;
    });

    $id = request()->input("id");
    $attachment = Attachment::find($id);
    if ($attachment instanceof Attachment) $attachment->delete();
    return $this->getList();
  }

  public function getList(): array
  {
    $count = request()->input('count', 12);
    $attachments = Attachment::latest()->paginate($count);
    $records = [];

    foreach ($attachments as $attachment) {
      $records[] = [
        "id" => $attachment->id,
        "title" => $attachment->title,
        "link" => $attachment->getLink(),
        "type" => $attachment->getType(),
        "extension" => $attachment->extension,
      ];
    }

    return [
      "records" => $records,
      "total" => $attachments->total(),
      "lastPage" => $attachments->lastPage(),
      "currentPage" => $attachments->currentPage(),
    ];
  }

  public function upload(Request $request): JsonResponse
  {
    $prefix = 'files/attachments';
    $uploadPath = $request->header("upload-path");

    if ($uploadPath) $prefix .= "/{$uploadPath}";

    $defaultPath = public_path($prefix);


    if (!file_exists($defaultPath)) XFileHelper::mkdirs(public_path($defaultPath));;
    $file = $request->file('file');
    $name = uniqid() . '_' . trim($file->getClientOriginalName());

    $result = $file->move($defaultPath, $name);

    Attachment::create([
      "title" => $file->getClientOriginalName(),
      "path" => $name,
      "extension" => strtolower($file->getClientOriginalExtension()),
      "file_size" => $result->getSize() / 1024,
      "prefix" => $prefix,
    ]);

    return response()->json([
      'name' => $name,
      'original_name' => $file->getClientOriginalName(),
    ]);
  }
}
