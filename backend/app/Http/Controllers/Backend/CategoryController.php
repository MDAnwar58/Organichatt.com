<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Category\StoreRequest;
use App\Http\Requests\Backend\Category\UpdateRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function get(): JsonResponse
    {
        $data = [
            'categories' => Category::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $category = new Category();
        $category->name = $request->name;
        $category->slug = Category::generateSlug($request->name);
        $category->image_url = $request->image_url;
        $category->save();

        return Response::Out("success", "Category Created!", "", 200);
    }
    // category status change active and inactive status functiona
    public function status($id): JsonResponse
    {
        $category = Category::find($id);
        $category->status = $category->status == 'active' ? 'inactive' : 'active';
        $category->update();

        $status = $category->status == 'active' ? 'Active' : 'Inactive';
        return Response::Out("success", "Category Status $status!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $category = Category::find($id);
        return Response::Out("", "", $category, 200);
    }
    public function update(UpdateRequest $request, $id): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'image_url' => 'required',
        ]);

        $category = Category::find($id);
        $category->name = $request->name;
        $category->slug = Category::generateSlugForUpdate($category->name, $category->slug, $request->name);
        $category->image_url = $request->image_url;
        $category->save();

        return Response::Out("success", "Category Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $category = Category::find($id);
        $category->delete();

        return Response::Out("success", "Category Deleted!", "", 200);
    }
}
