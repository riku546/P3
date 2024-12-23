<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class problems extends Model
{
    use HasFactory;

    protected $fillable = [
        "problem",
        "hint",
        "answer",
        "level",
        "programmingLang",
        "stars",
        "review_count",
    ];
}
