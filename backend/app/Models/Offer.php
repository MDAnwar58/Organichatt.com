<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;
    protected $table = 'offers';
    protected $fillable = [
        'brand_id',
        'category_id',
        'sub_category_id',
        'product_id',
        'name',
        'percents',
    ];
}
