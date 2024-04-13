<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Weight\StoreRequest;
use App\Http\Requests\Backend\Weight\UpdateRequest;
use App\Models\Weight;
use Illuminate\Http\JsonResponse;

class WeightController extends Controller
{
    // make some functions as like get, store, edit, update and delete
    // when go to this store and update functions then same process store column number
    public function get(): JsonResponse
    {
        $data = [
            'weights' => Weight::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $weight = new Weight();
        $weight->number = $request->number;
        $weight->save();

        return Response::Out("success", "Weight Created!", "", 200);
    }
    // then edit function
    public function edit($id): JsonResponse
    {
        $weight = Weight::find($id);
        return Response::Out("", "", $weight, 200);
    }
    public function update(UpdateRequest $request): JsonResponse
    {
        $weight = Weight::find($request->id);
        $weight->number = $request->number;
        $weight->update();

        return Response::Out("success", "Weight Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $weight = Weight::find($id);
        $weight->delete();

        return Response::Out("success", "Weight Deleted!", "", 200);
    }
}
