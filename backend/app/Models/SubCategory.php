<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class SubCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'image_url',
        'category_id',
        'status'
    ];
    public static function generateSlug($name): string
    {
        $sub_category = SubCategory::where('name', $name)->get();
        if ($sub_category->count() > 0) {
            $count = $sub_category->count();
            $slug = Str::slug($name) . '-' . $count;
        } else {
            $slug = Str::slug($name);
        }
        return $slug;
    }
    public static function generateSlugForUpdate($subCategoryName, $subCategorySlug, $requestName): mixed
    {
        if ($subCategoryName != $requestName) {
            $slug = SubCategory::generateSlug($requestName);
        } else {
            $slug = $subCategorySlug;
        }
        return $slug;
    }
}
