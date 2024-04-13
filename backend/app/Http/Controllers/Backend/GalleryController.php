<?php

namespace App\Http\Controllers\Backend;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Gallery\StoreRequest;
use App\Http\Requests\Backend\Gallery\UpdateRequest;
use App\Models\Gallery;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    function get(): JsonResponse
    {
        $data = [
            'galleries' => Gallery::latest()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }

    function getRestore()
    {
        $data = [
            'galleries' => Gallery::onlyTrashed()->get(),
        ];
        return Response::Out("", "", $data, 200);
    }
    function store(StoreRequest $request): JsonResponse
    {
        $extention = Gallery::fileExtention($request->hasFile('url'), $request->file('url'));
        $size = Gallery::fileSize($request->hasFile('url'), $request->file('url'));
        $file = Gallery::fileStore($request->hasFile('url'), $request->file('url'), $request->name, "");

        $gallery = new Gallery();
        $gallery->image_name = $request->name;
        $gallery->image_extention = $extention != null ? $extention : null;
        $gallery->image_size = $size != null ? $size : null;
        $gallery->url = $file != null ? $file : null;
        $gallery->type = $request->type;
        $gallery->save();

        return Response::Out("success", "Gallery's File Created!", "", 200);
    }
    function edit($id): JsonResponse
    {
        $gallery = Gallery::find($id);
        return Response::Out("", "", $gallery, 200);
    }
    function update(UpdateRequest $request, $id): JsonResponse
    {
        $gallery = Gallery::find($id);

        $extention = Gallery::fileExtention($request->hasFile('url'), $request->file('url'));
        $size = Gallery::fileSize($request->hasFile('url'), $request->file('url'));
        $file = Gallery::fileStore($request->hasFile('url'), $request->file('url'), $request->name, $gallery->url);

        $gallery->image_name = $request->name;
        $gallery->image_extention = $extention != null ? $extention : null;
        $gallery->image_size = $size != null ? $size : null;
        $gallery->url = $file != null ? $file : null;
        $gallery->type = $request->type;
        $gallery->save();

        return Response::Out("success", "Gallery's File Updated!", "", 200);
    }
    function destroy($id): JsonResponse
    {
        $gallery = Gallery::find($id);
        $gallery->delete();

        return Response::Out("success", "Gallery's File Deleted!", "", 200);
    }
    function restore($id): JsonResponse
    {
        $gallery = Gallery::withTrashed()->find($id);
        $gallery->restore();

        return Response::Out("success", "Gallery's File Restored!", "", 200);
    }
    function forseDestroy($id): JsonResponse
    {
        $gallery = Gallery::findOrFail(intval($id));
        $fileName = basename($gallery->url);
        $file_path = public_path() . '/upload/images/galleries/' . $fileName;

        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $gallery->forceDelete();

        return Response::Out("success", "Gallery's File Permanently Deleted!", "", 200);
    }
    function multipleDestroy(Request $request)
    {
        // multiple destroy press
        $ids = $request->ids;
        Gallery::destroy($ids);

        return Response::Out("success", "Multiple Gallery's File Deleted!", "", 200);
    }
    function multipleRestore(Request $request)
    {
        $ids = $request->ids;
        // multiple restore process
        Gallery::withTrashed()->restore($ids);

        return Response::Out("success", "Multiple Gallery's File Restored!", "", 200);
    }
    function multipleForseDestroy(Request $request): JsonResponse
    {
        $ids = $request->ids;
        // multiple gallery forse destroy with image remove in public path process
        $galleries = Gallery::whereIn('id', $ids)->get();
        foreach ($galleries as $gallery) {
            $fileName = basename($gallery->url);
            $file_path = public_path() . '/upload/images/galleries/' . $fileName;

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $gallery->forceDelete();
        }
        // Gallery::withTrashed()->forceDelete($ids);

        return Response::Out("success", "Multiple Gallery's File Permanently Deleted!", "", 200);
    }
    // function multipleForseDestroyInRestore(Request $request)
    // {
    //     $ids = $request->ids;
    //     // multiple gallery forse destroy with image remove in public path process
    //     $galleries = Gallery::withTrashed()->whereIn('id', $ids)->get();
    //     foreach ($galleries as $gallery) {
    //         $fileName = basename($gallery->url);
    //         $file_path = public_path() . '/upload/images/galleries/' . $fileName;

    //         if (File::exists($file_path)) {
    //             File::delete($file_path);
    //         }
    //         $gallery->forceDelete();
    //     }
    //     // Gallery::withTrashed()->forceDelete($ids);

    //     return Response::Out("success", "Multiple Gallery's File Permanently Deleted!", "", 200);
    // }
}
