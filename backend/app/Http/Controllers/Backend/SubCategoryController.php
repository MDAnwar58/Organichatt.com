<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Subcategory\StoreRequest;
use App\Http\Requests\Backend\Subcategory\UpdateRequest;
use App\Models\SubCategory;
use Illuminate\Http\JsonResponse;

class SubCategoryController extends Controller
{
    public function get(): JsonResponse
    {
        $data = [
            'sub_categories' => SubCategory::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $subCategory = new SubCategory();
        $subCategory->name = $request->name;
        $subCategory->slug = SubCategory::generateSlug($request->name);
        $subCategory->image_url = $request->image_url;
        $subCategory->category_id = $request->category_id;
        $subCategory->save();

        return Response::Out("success", "Sub Category Added!", "", 200);
    }
    public function status($id): JsonResponse
    {
        $subCategory = SubCategory::find($id);
        $subCategory->status = $subCategory->status == 'active' ? 'inactive' : 'active';
        $subCategory->save();

        $status = $subCategory->status == 'active' ? 'Active' : 'Inactive';
        return Response::Out("success", "Sub Category Status $status!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $subCategory = SubCategory::find($id);
        return Response::Out("", "", $subCategory, 200);
    }
    public function update(UpdateRequest $request, $id): JsonResponse
    {
        $subCategory = SubCategory::find($id);
        $slug = SubCategory::generateSlugForUpdate($subCategory->name, $subCategory->slug, $request->name);

        $subCategory->name = $request->name;
        $subCategory->slug = $slug;
        $subCategory->image_url = $request->image_url;
        $subCategory->update();

        return Response::Out("success", "Sub Category Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $subCategory = SubCategory::find($id);
        $subCategory->delete();

        return Response::Out("success", "Sub Category Deleted!", "", 200);
    }
}
