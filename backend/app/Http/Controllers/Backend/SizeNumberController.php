<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\SizeNumber\StoreRequest;
use App\Http\Requests\Backend\SizeNumber\UpdateRequest;
use App\Models\SizeNumber;
use Illuminate\Http\JsonResponse;

class SizeNumberController extends Controller
{
    public function get(): JsonResponse
    {
        $data = [
            'sizes' => SizeNumber::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $size_number = new SizeNumber();
        $size_number->name = $request->name;
        $size_number->save();

        return Response::Out("success", "Size Number Created!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $size_number = SizeNumber::find($id);
        return Response::Out("", "", $size_number, 200);
    }
    public function update(UpdateRequest $request, $id): JsonResponse
    {
        $size_number = SizeNumber::find($id);
        $size_number->name = $request->name;
        $size_number->save();

        return Response::Out("success", "Size Number Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $size_number = SizeNumber::find($id);
        $size_number->delete();

        return Response::Out("success", "Size Number Deleted!", "", 200);
    }
}
