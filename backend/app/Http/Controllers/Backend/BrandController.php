<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Brand\StoreRequest;
use App\Http\Requests\Backend\Brand\UpdateRequest;
use App\Models\Brand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function get(): JsonResponse
    {
        $data = [
            'brands' => Brand::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->slug = Brand::generateSlug($request->name);
        $brand->image_url = $request->image_url;
        $brand->save();
        return Response::Out("success", "Brand Created!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $brand = Brand::find($id);
        return Response::Out("", "", $brand, 200);
    }
    public function update(UpdateRequest $request): JsonResponse
    {
        $brand = Brand::find($request->id);
        $slug = Brand::generateSlugForUpdate($brand->name, $brand->slug, $request->name);

        $brand->name = $request->name;
        $brand->slug = $slug;
        $brand->image_url = $request->image_url;
        $brand->update();

        return Response::Out("success", "Brand Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $brand = Brand::find($id);
        $brand->delete();

        return Response::Out("success", "Brand Deleted!", "", 200);
    }
}
