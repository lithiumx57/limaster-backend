<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\ProjectManagement\AddBoard;
use App\Infrastructure\ProjectManagement\ProjectCast;
use App\Infrastructure\ProjectManagement\ProjectCreate;
use App\Models\ProjectManagement\Project;
use Exception;
use Illuminate\Http\Request;

class ProjectsController extends Controller
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
    ProjectCreate::create();

    return [
      "success" => true
    ];
  }


  public function all()
  {
    return ProjectCast::castAll();
  }


  public function show()
  {
    return ProjectCast::fullCast();
  }

  public function getUser()
  {
    $project = Project::where("uuid", request()->input("id"))->first();
    if (!($project instanceof Project)) abort(404);
    return ProjectCast::castUsers($project);
  }

  public function addBoard()
  {
    AddBoard::add();
    return [
      "success" => true
    ];
  }


}
