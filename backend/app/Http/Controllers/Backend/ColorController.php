<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Color\StoreRequest;
use App\Http\Requests\Backend\Color\UpdateRequest;
use App\Models\Color;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    // make some functions as like get, store, edit, update and delete
    // store color as like name and color_code and update same process
    public function get(): JsonResponse
    {
        $data = [
            'colors' => Color::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $color = new Color();
        $color->name = $request->name;
        $color->color_code = $request->color_code;
        $color->save();

        return Response::Out("success", "Color Created!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $color = Color::find($id);
        return Response::Out("", "", $color, 200);
    }
    public function update(UpdateRequest $request): JsonResponse
    {
        $color = Color::find($request->id);
        $color->name = $request->name;
        $color->color_code = $request->color_code;
        $color->update();

        return Response::Out("success", "Color Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $color = Color::find($id);
        $color->delete();

        return Response::Out("success", "Color Deleted!", "", 200);
    }
}
