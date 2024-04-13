<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Product\StoreRequest;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    // make some functions as like get, store, status, edit, update, delete and multipleDestroy functions
    public function get(): JsonResponse
    {
        $data = [
            'products' => Product::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request)
    {
        // store as like columns 'brand_id','category_id','sub_category_id','name','slug','sku','title','price','discount_price','perchese_quantity','available_quantity','color_id','size_id','size_num_id','weight_id','remark','refundable','status','description','specification','image_url','meta_tag','meta_title','meta_description',
        $product = new Product();
        $product->brand_id = $request->brand_id;
        $product->category_id = $request->category_id;
        $product->sub_category_id = $request->sub_category_id;
        $product->name = $request->name;
        $product->slug = Product::generateSlug($request->name);
        $product->sku = Str::random(15);
        $product->title = $request->title;
        $product->price = $request->price;
        $product->discount_price = $request->discount_price;
        $product->perchese_quantity = $request->perchese_quantity;
        $product->available_quantity = $request->available_quantity;
        $product->color_id = $request->color_id;
        $product->size_id = $request->size_id;
        $product->size_num_id = $request->size_num_id;
        $product->weight_id = $request->weight_id;
        $product->remark = $request->remark;
        $product->refundable = $request->refundable;
        $product->status = $request->status;
        $product->description = $request->description;
        $product->specification = $request->specification;
        $product->image_url = $request->image_url;
        // seo product
        $product->meta_tag = $request->meta_tag;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description;
        $product->save();

        return Response::Out("success", "Product Created!", "", 200);
    }
    // then create a status function
    public function status($id): JsonResponse
    {
        $product = Product::find($id);
        $product->status = $product->status === "publish" ? "unpublish" : "publish";
        $product->save();

        $status = $product->status === "publish" ? "Publish" : "Unpublish";
        return Response::Out("success", "Product Status $status!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $product = Product::find($id);
        return Response::Out("", "", $product, 200);
    }
    public function update(StoreRequest $request, $id): JsonResponse
    {
        $product = Product::find($id);
        $product->brand_id = $request->brand_id;
        $product->category_id = $request->category_id;
        $product->sub_category_id = $request->sub_category_id;
        $product->name = $request->name;
        $product->slug = Product::generateSlugForUpdate($product->name, $product->slug, $request->name);
        $product->sku = $product->sku !== null ? $product->sku : Str::random(15);
        $product->title = $request->title;
        $product->price = $request->price;
        $product->discount_price = $request->discount_price;
        $product->perchese_quantity = $request->perchese_quantity;
        $product->available_quantity = $request->available_quantity;
        $product->color_id = $request->color_id;
        $product->size_id = $request->size_id;
        $product->size_num_id = $request->size_num_id;
        $product->weight_id = $request->weight_id;
        $product->remark = $request->remark;
        $product->refundable = $request->refundable;
        $product->status = $request->status;
        $product->description = $request->description;
        $product->specification = $request->specification;
        $product->image_url = $request->image_url;
        // seo product
        $product->meta_tag = $request->meta_tag;
        $product->meta_title = $request->meta_title;
        $product->meta_description = $request->meta_description;
        $product->save();

        return Response::Out("success", "Product Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $product = Product::find($id);
        $product->delete();

        return Response::Out("success", "Product Deleted!", "", 200);
    }
    public function multipleDestroy(Request $request): JsonResponse
    {
        $ids = [2, 3];
        // $ids = $request->ids;
        foreach ($ids as $id) {
            $product = Product::find($id);
            $product->delete();
        }

        return Response::Out("success", "Product Deleted!", "", 200);
    }
}
