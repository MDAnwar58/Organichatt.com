<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand_id',
        'category_id',
        'sub_category_id',
        'name',
        'slug',
        'sku',
        'title',
        'price',
        'discount_price',
        'perchese_quantity',
        'available_quantity',
        'color_id',
        'size_id',
        'size_num_id',
        'weight_id',
        'remark',
        'refundable',
        'status',
        'description',
        'specification',
        'image_url',
        // seo
        'meta_tag',
        'meta_title',
        'meta_description',
    ];

    public static function generateSlug($name): string
    {
        $product = Product::where('name', $name)->get();
        if ($product->count() > 0) {
            $count = $product->count();
            $slug = Str::slug($name) . '-' . $count;
        } else {
            $slug = Str::slug($name);
        }
        return $slug;
    }
    public static function generateSlugForUpdate($productName, $productSlug, $requestName): mixed
    {
        if ($productName != $requestName) {
            $slug = Product::generateSlug($requestName);
        } else {
            $slug = $productSlug;
        }
        return $slug;
    }
}
