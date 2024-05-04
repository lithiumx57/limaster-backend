<?php

namespace App\Panel\Models;

use App\Panel\Dynamic\LiModel;
use App\Panel\Dynamic\XDisable;
use App\Panel\Menu\XMenu;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Schema;

/**
 * @property $id
 * @property $title
 * @property $path
 * @property $extension
 * @property $file_size
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property $deleted_at
 */
class Attachment extends LiModel
{
  use SoftDeletes;

  protected ?string $title = "پیوست";


  public const IMAGE_EXTENSIONS = ["bmp", "png", "jpg", "jpeg", "gif", "webp"];
  public const VIDEO_EXTENSIONS = ["mp4", "3gp", "avi", "mpg", "ts", "mkv"];
  public const AUDIO_EXTENSIONS = ["mp3", "wav", "amr"];

  protected bool $isTableOff=true;
  public static ?string $indexView="attachment";

  public function menu(): ?XMenu
  {
    return xMenu("پیوست ها",[],"attachments");
  }


  public function __construct(array $attributes = [])
  {
    parent::__construct($attributes);
    $this->menuOff = !Schema::hasTable('attachments');
  }


  private function hasArrayIndex($array, $index): bool
  {
    return in_array($index, $array);
  }

  public function fields(): array
  {
    return [
      xField()->string("title")->showInTable(),
      xField()->string("path")->showInTable(),
      xField()->string("extension")->showInTable(),
      xField()->string("file_size")->showInTable(),
    ];
  }


  public function getType(): string
  {
    $extension = $this->extension;
    if ($this->hasArrayIndex(Attachment::IMAGE_EXTENSIONS, strtolower($extension))) return "image";
    if ($this->hasArrayIndex(Attachment::VIDEO_EXTENSIONS, strtolower($extension))) return "video";
    if ($this->hasArrayIndex(Attachment::AUDIO_EXTENSIONS, strtolower($extension))) return "audio";
    return "other";
  }

  public function getLink(): string
  {
    return "/" . $this->prefix . "/" . $this->path;
  }

  public static function disable(): XDisable
  {
    return \xDisable()->copy()->edit()->create()->trash()->delete();
  }


}
