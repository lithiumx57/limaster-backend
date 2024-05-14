<?php

namespace App\Panel\helpers\Image;

use App\Panel\helpers\ImageHelper;
use App\Panel\helpers\XFileHelper;
use Illuminate\Support\Str;
use Intervention\Image\Image;
use Mockery\Exception;
use PHPUnit\Framework\Constraint\Constraint;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use Intervention\Image\ImageManager;

class XImageUploader
{

  private ?string $savePath = null;
  private ?array $sizes = null;
  private ?string $name = null;
  private ?bool $saveMainImage = null;
  private ?bool $generateThumbnail = null;
  private ?bool $isWebP = false;
  private ?UploadedFile $file = null;

  public static function getInstance(): XImageUploader
  {
    return new XImageUploader();
  }

  public function setSavePath(string $path): XImageUploader
  {
    $this->savePath = $path;
    return $this;
  }

  public function setSizes(...$sizes): XImageUploader
  {
    if (is_array(@$sizes[0])) {
      $this->sizes = $sizes[0];
    } else {
      $this->sizes = $sizes;
    }
    return $this;
  }


  public function setName(string $name): XImageUploader
  {
    $this->name = $name;
    return $this;
  }

  public function saveMainImage(): XImageUploader
  {
    $this->saveMainImage = true;
    return $this;
  }

  public function generateThumbnail(): XImageUploader
  {
    $this->generateThumbnail = true;
    return $this;
  }

  public function webP()
  {
    $this->isWebP = true;
    return $this;
  }

  public function setFile(UploadedFile $uploadedFile): XImageUploader
  {
    $this->file = $uploadedFile;
    return $this;
  }

  private function getName(): string
  {
    $name = $this->name;
    if ($name == null) $name = time() . "" . rand(1, 9999999);
    else $name = Str::slug($name);
    if ($this->isWebP) {
      return $name . ".webp";
    } else {
      return $name . "." . strtolower($this->file->getClientOriginalExtension());
    }
  }

  private function getSavePath(): string
  {
    return $this->savePath;
  }

  public function upload(): array|string
  {
    $name = $this->getName();
    $path = $this->getSavePath();
    $file = $this->file;
    $uploadedFile = $file->move($path, $name);


    list($width, $height) = getimagesize($uploadedFile->getRealPath());


    if (is_array($this->sizes)) {
      $urls = [];
      foreach ($this->sizes as $size) {
        $urls[$size] = $this->generateImagePath($uploadedFile->getBasename(), $size);
        $manager = ImageManager::gd()->read($uploadedFile->getRealPath());

        if ($this->isWebP) {
          $manager = $manager->toWebp();
        }


        $h = $height * $size / $width;

        $manager->resize($size, $h)->save($path . '/' . $size . "_" . $name);
      }


      if ($this->generateThumbnail) $urls['thumbnail'] = $this->generateImagePath($name, $this->sizes[0]);
      if (!$this->saveMainImage) unlink($path . "/$name");
      else $urls["main"] = $this->generateImagePath($uploadedFile->getBasename());

      return $urls;
    }
    return $this->generateImagePath($uploadedFile->getBasename());
  }


  public function uploadFromBase64($dirPath, $base64Image, $sizes): array
  {
    $filePath = XFileHelper::uploadBase64($dirPath, $base64Image);
    $path = public_path($filePath);


    file_put_contents($path, ImageHelper::base64Decode($base64Image));
    list($width, $height) = getimagesize($path);

    $size = getimagesize($path);
    $mime = str_replace("image/", "", $size["mime"]);
    $uploadedFile = new UploadedFile($path, Str::uuid() . "." . $mime);
    $urls = [];
    if (is_array($sizes)) {
      foreach ($sizes as $size) {
        $urls[$size] = $this->generateImagePath($uploadedFile->getBasename(), $size);
        $manager = ImageManager::gd()->read($uploadedFile->getRealPath());
        $h = $height * $size / $width;
        $manager->resize($size, $h)->save($uploadedFile->getPath() . '/' . $size . "_" . $uploadedFile->getBasename());
      }
    }
    unlink($path);
    return $urls;
  }


  private function generateImagePath($uploaded, $size = null): string
  {
    $prefix = "";
    if ($size != null) $prefix = $size . "_";
    if (getConfigurator()->isAbsolutePath()) return "/" . $this->getSavePath() . "/" . $prefix . $uploaded;
    return $prefix . $uploaded;
  }


}
