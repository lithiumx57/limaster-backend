<?php

namespace App\Infrastructure\ProjectManagement;

use App\Infrastructure\ModelCast\UserCast;
use App\Models\User;

class BoardCast
{

  public static function castAll($projectId): array
  {
    $connection = ProjectDatabaseGenerator::getConnection($projectId);
    $boards = $connection->table('boards')->latest()->paginate(12);

    return [
      "records" => self::castCollection($boards),
      "lastPage" => $boards->lastPage(),
      "currentPage" => $boards->currentPage(),
      "total" => $boards->total()
    ];

  }

  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $board) $records[] = self::cast($board);
    return $records;
  }

  public static function cast($board): array
  {
    return [
      "id" => $board->id,
      "name" => $board->name,
      "user" => UserCast::cast(User::find($board->user_id)),
      "createdAt" => convertToJalali($board->created_at,"Y/m/d :: H:i:s"),
    ];
  }


}