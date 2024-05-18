<?php

namespace App\Models;

use App\Helpers\RegexExtract;
use App\Infrastructure\Comments\CommentableInterface;
use App\Infrastructure\Likes\LikableInterface;
use App\Infrastructure\Search\SearchableInterface;
use App\Panel\Dynamic\LiModel;
use App\Panel\Dynamic\XDisable;
use App\Panel\helpers\XStringHelper;
use App\Panel\helpers\XTagTrait;
use App\Panel\Models\Tag;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * @property $id
 * @property $title
 * @property $slug
 * @property $category_id
 * @property Category $category
 * @property $user_id
 * @property User $user
 * @property $username
 * @property $time_to_read
 * @property $description
 * @property $images
 * @property $approved
 * @property $search
 * @property $comments_count
 * @property $views_count
 * @property $likes_count
 * @property $meta
 * @property $comment_active
 * @property $publish_at
 * @property $created_at
 * @property $updated_at
 * @property $deleted_at
 */
class Article extends LiModel implements LikableInterface, CommentableInterface, SearchableInterface
{
  use  SoftDeletes, XTagTrait;


  protected ?string $title = "مقاله";
  protected ?string $pluralTitle = "مقالات";


  protected $casts = [
    "images" => "array",
    "search" => "array"
  ];

  protected array $slugFields = [
    "slug" => "title"
  ];

  public static function getUploadPath(): string
  {
    return "/files/uploads/" . self::getUploadDirectory() . "/";
  }

  public static function getUploadDirectory(): string
  {
    return "articles";
  }


  public function xObjectCreating(callable $next)
  {
    $user = User::first();
    $this->user_id = $user->id;
    $this->username = $user->name;
    return $next();
  }


  public function xObjectUpdating(callable $next)
  {
    $this->saveHashtags();
    return $next();
  }


  public function xObjectCreated(callable $next)
  {
    $this->saveHashtags();
    return $next();
  }


  public function saveHashtags(): void
  {
    $tags = Tag::extractFromText($this->description);
    $tags = array_merge($tags, Tag::extractFromField($this->tags));
    $this->updateModelTags($tags, "tags");
  }


  public function fields(): array
  {


    return [
      xField()->string("title")->showInTable(),
      xField()->foreign("category_id", Category::class, "category", ["title"])->conditions(["model" => Article::class])->showInTable()->label("دسته بندی"),
      xField()->string("time_to_read")->label("زمان مطالعه"),
      xField()->text("description")->smart()->label("توضیحات"),
      xField()->image("images")->sizes([1200, 1600])->label("تصویر")->showInTable()->uploadPath("articles"),
      xField()->bool("approved")->showInTable()->switchable()->default(true),
      xField()->text("meta")->label("توضیحات کوتاه حد اکثر 320 کلمه"),
      xField()->bool("comment_active")->label("این مقاله دارای کامنت است")->default(true),
      xField()->tag("tags")->nullable(),
      xField()->date("publish_at")->nullable()->label("زمان انتشار")
    ];
  }


  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function category(): BelongsTo
  {
    return $this->belongsTo(Category::class);
  }


  public function updateLikesCount(): void
  {
    $likes = Like::where("model", static::class)->where("model_id", $this->id)->count();
    $this->update([
      "likes_count" => $likes
    ]);
  }

  public function getLikesCount(): int
  {
    return $this->likes_count;
  }

  public function canPostComment(): bool
  {
    return $this->approved == true && $this->comment_active == true;
  }

  public function updateCommentsCount(): void
  {
    $this->update([
      "comments_count" => Comment::where("model", Article::class)->where("model_id", $this->id)->count()
    ]);
  }

  public function defaultApproved(): bool
  {
    return true;
  }

  public static function getQuery()
  {
    return static::where("approved", true);
  }

  public static function perPage(): int
  {
    return 8;
  }


  private static function getImageOrThumbnail($article, $index = 1200): string
  {
    $imageName = @$article->images[$index];
    $imagePath = Article::getUploadPath() . $imageName;
    if (file_exists(XStringHelper::deleteStartIndex($imagePath))) return $imagePath;
    if ($index == 300) return "/files/uploads/default/article/article-thumbnail-400.jpg";
    return "/files/uploads/default/article/article-thumbnail-1200.jpg";
  }


  public function getImage($size = 1200): string
  {
    return self::getImageOrThumbnail($this, $size);
  }

  public function generateCache(): array
  {
    return [
      "id" => $this->getAttribute("id"),
      "title" => $this->getAttribute("title"),
      "image" => $this->images,
      "type" => "article",
      "description" => $this->meta,
      "likesCount" => $this->likes_count,
      "commentsCount" => $this->comments_count,
      "sharesCount" => $this->shares_count,
      "link" => "/article/" . $this->slug,
      "createdAt" => getAgoJalali($this->created_at),
      "images" => $this->getTextImages()
    ];
  }


  public function getTextImages(): array
  {
    return [
      $this->getImage(),
      ...RegexExtract::extractImages($this->description)
    ];
  }


  public static function disable(): XDisable
  {
    return xDisable()->copy();
  }


  public function saveSearch(array $data): void
  {
    $this->update(["search" => $data]);
  }

}
