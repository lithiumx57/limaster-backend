<?php

namespace App\Panel\UiHandler\Elements;

use App\Models\FullElement;
use App\Panel\UiHandler\Elements\Attributes\UploadAttributes;

class XAttachment extends Element
{
  use UploadAttributes;

  protected string $viewPath = "attachment";
}
