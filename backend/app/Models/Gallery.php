<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;

class Gallery extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'image_name',
        'image_extention',
        'image_size',
        'url',
        'type'
    ];
    protected $dates = ['deleted_at'];

    public static function fileExtention($hasFile, $file)
    {
        if ($hasFile) {
            return $file->getClientOriginalExtension();
        } else {
            return null;
        }
    }
    public static function fileSize($hasFile, $file)
    {
        if ($hasFile) {
            $fileSize = $file->getSize();
            $fileSizeInKB = round($fileSize / 1024, 2);
            return $fileSizeInKB;
        } else {
            return null;
        }
    }
    public static function fileStore($hasFile, $file, $requestFileName, $galleryFile)
    {
        if ($hasFile) {
            if ($galleryFile) {
                $fileName = basename($galleryFile);
                $file_path = public_path() . '/upload/images/galleries/' . $fileName;

                if (File::exists($file_path)) {
                    File::delete($file_path);
                }
            }
            $unique = rand(1000, 9999);
            $time = time();
            $name = $requestFileName;
            $fileExtension = $file->getClientOriginalExtension();
            $filename = $unique . $time . $name . "." . $fileExtension;
            $file->move('upload/images/galleries/', $filename);
            // $file->move(storage_path('/app/public/galleries'), $filename);
            // Storage::put('avatars/' . $filename, file_get_contents($file));
            $path = url('/') . '/upload/images/galleries/' . $filename;
            return $path;
        } else {
            return null;
        }
    }

}
