<?php

namespace App\Infrastructure\Sitemap;

use App\Models\Article;
use App\Models\Forum;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapIndex;
use Spatie\Sitemap\Tags\Url;

class SitemapGenerator
{
  public static function generateIndex()
  {
    self::generateArticles();
    self::generateForum();

    SitemapIndex::create()
      ->add('https://limaster.ir/api/sitemap-articles.xml')
      ->add('https://limaster.ir/api/sitemap-forum.xml')
      ->writeToFile(public_path("sitemap.xml"));
  }


  public static function generateForum()
  {
    $sitemap = Sitemap::create();
    $questions = Forum::where("approved", true)->get();

    //https://limaster.ir/forum/12/%D8%AA%D8%BA%DB%8C%DB%8C%D8%B1-dns-%D8%AF%D8%B1-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3

    foreach ($questions as $question) {
      $sitemap->add(
        Url::create("https://limaster.ir/forum/" . $question->id . "/" . urlencode($question->slug))
          ->setLastModificationDate(Carbon::parse($question->updated_at))
          ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
          ->setPriority(0.8)
      );
    }

    $sitemap->writeToFile(public_path("sitemap-forum.xml"));
  }

  public static function generateArticles()
  {
    $sitemap = Sitemap::create();
    $articles = Article::where("approved", true)->get();

    foreach ($articles as $article) {
      $sitemap->add(
        Url::create("https://limaster.ir/article/" . urlencode($article->slug))
          ->setLastModificationDate(Carbon::parse($article->updated_at))
          ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
          ->addImage($article->getImage(), $article->getAttribute("title"), "", $article->getAttribute("title"))
          ->setPriority(0.8)
      );
    }

    $sitemap->writeToFile(public_path("sitemap-articles.xml"));
  }
}
