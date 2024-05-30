<?php

namespace App\Models\ProjectManagement;

use App\Infrastructure\ProjectManagement\ProjectAccessHelper;
use App\Infrastructure\ProjectManagement\ProjectDatabaseGenerator;
use App\Models\Comment;
use App\Models\User;
use App\Panel\helpers\XModelHelper;

use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;
use function Pest\Laravel\withoutMockingConsoleOutput;

/**
 * @property $id
 * @property $name
 * @property $project_id
 * @property $user_id
 * @property Project $project
 * @property User $user
 * @property $created_at
 * @property $updated_at
 */
class Board extends Model
{
  use XModelHelper;


  protected $guarded = ["id"];


  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function project(): BelongsTo
  {
    return $this->belongsTo(Project::class);
  }


  public function users(): BelongsToMany
  {
    return $this->belongsToMany(Board::class, "pm_boards_users", "pm_board_id", "user_id");
  }


  public function hasAccess(): bool
  {
    return true;
  }

  public static function createComment($model, $modelId, $parent, $description, $name, $contact)
  {
    $modelId = explode("_", $modelId);
    if (count($modelId) != 4) throw new Exception("خطای نامشخص رخ داده است");


    $boardId = $modelId[0];
    $projectId = $modelId[1];
    $taskId = $modelId[2];
    $token = $modelId[3];

    if (!ProjectDatabaseGenerator::hasConnection($projectId)) throw new Exception("خطایی رخ داده است");

    $connection = ProjectDatabaseGenerator::getConnection($projectId);

    $project = Project::where("id", $projectId)->first();
    if (!ProjectAccessHelper::hasAccess($project)) throw new Exception("خطایی رخ داده است");
    $board = $connection->table("boards")->where("id", $boardId)->where("project_id", $projectId)->first();
    if (!ProjectAccessHelper::hasAccessToBoard($board, $connection)) throw new Exception("خطایی رخ داده است");
    $task = $connection->table("board_box_lines")->where("board_id", $boardId)->where("token", $taskId)->first();

    if (!$task) throw  new Exception("خطایی رخ داده است");

    if ($parent > 0) {
      $comment = $connection->table("comments")->find($parent);
      if (!$comment) throw new Exception("خطای نامشخص رخ داده است");
    }


    $connection->table("comments")->insert([
      "body" => $description,
      "model" => $model,
      "model_id" => $task->id,
      "parent" => $parent,
      "user_id" => auth()->user()->id,
      "created_at" => Carbon::now(),
      "updated_at" => Carbon::now()
    ]);

    return true;
  }

  public function isCommentDefaultApproved(): bool
  {
    return true;
  }


}
