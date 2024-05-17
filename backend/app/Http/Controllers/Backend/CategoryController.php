<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Category\StoreRequest;
use App\Http\Requests\Backend\Category\UpdateRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return view('admin.category.index');
    }
    public function get(Request $request): JsonResponse
    {
        $search = $request->search;
        $status = $request->status;
        if (isset($search) && isset($status)) {
            if ($status === "1") {
                $categories = Category::where('name', 'like', '%' . $search . '%')
                    ->where('status', 'active')
                    ->latest()
                    ->get();
            } else {
                $categories = Category::where('name', 'like', '%' . $search . '%')
                    ->where('status', 'inactive')
                    ->latest()
                    ->get();
            }
        } elseif (isset($search)) {
            $categories = Category::where('name', 'like', '%' . $search . '%')->latest()->get();
        } elseif (isset($status)) {
            if ($status === "1") {
                $categories = Category::where('status', 'active')->latest()->get();
            } elseif ($status === "2") {
                $categories = Category::where('status', 'inactive')->latest()->get();
            }
        } else {
            $categories = Category::latest()->get();
        }
        $data = [
            'categories' => $categories,
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
        $category->status = $category->status === 'active' ? 'inactive' : 'active';
        $category->update();

        $status = $category->status == 'active' ? 'Active' : 'InActive';
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
