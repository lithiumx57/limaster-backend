<?php
$root = str_replace(DIRECTORY_SEPARATOR . "cdn", "", __DIR__) ;

$configs = [
  "rootPath" => $root,
  "replacements" => [
    "/cdn/" => "/",
  ],
  "reserveSizes" => [

    //
    500,
    0,
    54,
    100,
    48,
    400
  ],
  "cacheDir" => "cache"
];


error_reporting(E_ALL);
ini_set('display_errors', 1);

function dd($data): void
{
  if (is_object($data)) $result = var_export($data, true);
  else if (is_bool($data)) $result = $data ? 'true' : 'false';
  else if (is_array($data)) $result = print_r($data, true);
  else $result = $data;
  echo '<style>body{padding: 0;margin: 0}</style><pre style="background: #111;color: #fff;padding: 8px">' . $result . '</pre>';
  exit;
}

function hasIndex($array, $index): bool
{
  foreach ($array as $item) if ($item == $index) return true;
  return false;
}


$width = @$_GET['size'];
$quality = @$_GET['q'] ?? 95;
$format = @$_GET['f'] ?? 'jpg';
$uri = $_SERVER["REQUEST_URI"];
$uri = parse_url($uri);
$path = $uri['path'];

//$width = 800;
//$quality = 20;
//$format = "webp";

if ($quality < 20) $quality = 20;
if ($quality > 100) $quality = 100;


foreach ($configs["replacements"] as $key => $value) {
  $path = str_replace($key, $value, $path);
}


$sourceImage = $configs["rootPath"] . $path;


$sourceImage = str_replace("/", DIRECTORY_SEPARATOR, $sourceImage);
$sourceImage = str_replace("\\", DIRECTORY_SEPARATOR, $sourceImage);


$imageInfo = getimagesize($sourceImage);
$mime = $imageInfo['mime'];


$cacheFile = null;
if (hasIndex($configs["reserveSizes"], $width)) {
  $cacheFile = __DIR__ . DIRECTORY_SEPARATOR . $configs["cacheDir"] . DIRECTORY_SEPARATOR . $width . "_" . md5($path) . "." . $format;
}

$cacheFilePath = $cacheFile;


if (!$cacheFile || !file_exists($cacheFile)) {

  switch ($mime) {
    case 'image/jpeg':
      $image = imagecreatefromjpeg($sourceImage);
      break;
    case 'image/webp':
      $image = imagecreatefromwebp($sourceImage);
      break;
    case 'image/png':
      $image = imagecreatefrompng($sourceImage);
      break;
    case 'image/gif':
      $image = imagecreatefromgif($sourceImage);
      break;
    default:
      die('Unsupported image type');
  }

// محاسبه ارتفاع با توجه به ارتباط اندازه ها
  $oldWidth = imagesx($image);
  $oldHeight = imagesy($image);
  if (!$width) $width = $oldWidth;
  $newHeight = intval(($width / $oldWidth) * $oldHeight);


// ایجاد تصویر جدید با اندازه و کیفیت مورد نظر
  $newImage = imagescale($image, $width, $newHeight);

// ارسال تصویر جدید به عنوان ریسپانس


  if ($format == 'jpg') $format = 'jpeg';

  header('Content-Type: ' . "image/" . $format);
//  header('Content-Disposition: inline; filename="' . $file . '.' . $realExtension . '"');


// نمایش تصویر جدید با فرمت مورد نظر
  switch ($format) {
    case 'jpeg':
      imagejpeg($newImage, $cacheFile, $quality);
      imagejpeg($newImage, $cacheFile, $quality);
      break;
    case 'webp':
      imagewebp($newImage, $cacheFile, $quality);
      break;
    case 'png':
      imagepng($newImage, $cacheFile);
      break;
    case 'gif':
      imagegif($newImage, $cacheFile);
      break;
    default:
      die('Unsupported image format');
  }

  imagedestroy($image);
  imagedestroy($newImage);

}

header('Content-Length: ' . filesize($cacheFile));
readfile($cacheFile);
