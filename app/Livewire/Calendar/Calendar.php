<?php

namespace App\Livewire\Calendar;

use App\Infrastructure\Calendar\TaskGetter;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Livewire\Component;

class Calendar extends Component
{
  public bool $show = false;

  public User $user;

  public array $records = [];

  public Carbon|null $start = null;
  public Carbon|null $end = null;

  public string $title = "";


  protected $listeners = [
    'showCalendarSelect',
    'refresh-calendar' => '$refresh'
  ];

  public function showCalendarSelect()
  {
    $_start = request()->input("components")[0]["calls"][0]["params"][1]["start"];
    $_end = request()->input("components")[0]["calls"][0]["params"][1]["end"];


    $start = convertToEnglishDigit($_start);
    $end = convertToEnglishDigit($_end);


    if ($start === $end) {
      $this->title = convertToJalali($start, "Y/m/d");
    } else {
      $this->title = convertToJalali($start, "Y/m/d") . " تا " . convertToJalali($end, "Y/m/d");
    }


    $this->start = Carbon::parse($start);
    $this->end = Carbon::parse($end);
    $this->show = true;

  }

  public function dismiss()
  {
    $this->show = false;
  }

  public function render()
  {
    if ($this->start) {
      $task = TaskGetter::getOrCreate($this->user);
      $lines = $task->lines()
        ->where(function (Builder $builder) {
          $builder
            ->where("start_at", "<=", $this->start->toDateTimeString())
            ->where("end_at", ">=", $this->end->toDateTimeString());
        })->get();


      $this->records = [];

      foreach ($lines as $line) {
        $this->records[] = [
          "id" => $line->id,
          "text" => $line->text,
          "start_at" => $line->start_at,
          "end_at" => $line->end_at,
        ];
      }

    }
    return view('livewire.calendar.calendar');
  }


  public function add()
  {
    $this->dispatch("add-task", $this->start->toDateTimeString(), $this->end->toDateTimeString());
  }
}
