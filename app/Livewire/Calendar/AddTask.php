<?php

namespace App\Livewire\Calendar;

use App\Infrastructure\Calendar\TaskGetter;
use App\Infrastructure\Calendar\TaskLineCreator;
use App\Models\User;
use Exception;
use Illuminate\Support\Carbon;
use Livewire\Component;

class AddTask extends Component
{
  public User $user;

  public bool $show = false;

  public array $records = [];

  public Carbon|null $start = null;
  public Carbon|null $end = null;

  public string $title = "";
  public string $mode = "once";


  protected $listeners = [
    "add-task" => "show"
  ];


  public function dismiss()
  {
    $this->show = false;
  }


  public function show($start, $end)
  {

    $this->start = Carbon::parse($start);
    $this->end = Carbon::parse($end);

    $this->show = true;
  }


  private function getRecords():array
  {
    $records = [];
    $task = \App\Infrastructure\Calendar\TaskGetter::getOrCreate($this->user);
    $tasks = \App\Models\Calendar\TaskLine::where("task_id", $task->id)->get();

    foreach ($tasks as $row) {

      $text = str_replace("\n","",$row->text);
      $text = str_replace("\t","",$text);
      $text = str_replace("\r","",$text);
      $records[] = [
        "title" => $text,
        "start" => $row->start_at,
        "end" => $row->end_at,
      ];
    }

    return $records;
  }

  public function done()
  {
    $task = TaskGetter::getOrCreate($this->user);
    try {
      TaskLineCreator::create($task, $this->start, $this->end, $this->title, $this->mode);
      $this->dispatch("show-toast-message", [
        "message" => "تسک با موفقیت ثبت شد",
        "type" => "success"
      ]);
      $this->show = false;

      $records=$this->getRecords();

      $this->dispatch("refresh-calendar",$records);
    } catch (Exception $exception) {
      $this->dispatch("show-toast-message", [
        "message" => $exception->getMessage(),
        "type" => "error"
      ]);
    }
  }

  public function render()
  {
    return view('livewire.calendar.add-task');
  }
}
