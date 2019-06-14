<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;

class ArticlesController extends Controller
{
    /**
     * Show all articles
     */
    public function index()
    {
        return ArticleResource::collection(Article::all());
    }

    /**
     * Show individual article.
     *
     * @param \App\Models\Article
     */
    public function show(Article $article)
    {
        return new ArticleResource($article);
    }
}
