<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Offer\StoreRequest;
use App\Http\Requests\Backend\Offer\UpdateRequest;
use App\Models\Offer;
use Illuminate\Http\JsonResponse;

class OfferController extends Controller
{
    // make some functions as like get, store, edit, update and delete
    // when go to this store and update functions then same process store column number
    public function get(): JsonResponse
    {
        $data = [
            'offers' => Offer::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    public function store(StoreRequest $request): JsonResponse
    {
        $offer = new Offer();
        $offer->brand_id = $request->brand_id;
        $offer->category_id = $request->category_id;
        $offer->sub_category_id = $request->sub_category_id;
        $offer->product_id = $request->product_id;
        $offer->name = $request->name;
        $offer->percents = $request->percents;
        $offer->save();

        return Response::Out("success", "Offer Created!", "", 200);
    }
    public function edit($id): JsonResponse
    {
        $offer = Offer::find($id);
        return Response::Out("", "", $offer, 200);
    }
    public function update(UpdateRequest $request): JsonResponse
    {
        $offer = Offer::find($request->id);
        $offer->brand_id = $request->brand_id;
        $offer->category_id = $request->category_id;
        $offer->sub_category_id = $request->sub_category_id;
        $offer->product_id = $request->product_id;
        $offer->name = $request->name;
        $offer->percents = $request->percents;
        $offer->update();

        return Response::Out("success", "Offer Updated!", "", 200);
    }
    public function destroy($id): JsonResponse
    {
        $offer = Offer::find($id);
        $offer->delete();

        return Response::Out("success", "Offer Deleted!", "", 200);
    }
}
