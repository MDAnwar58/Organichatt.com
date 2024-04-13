<?php

namespace App\Http\Controllers\Auth;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
    function signUp(Request $request): JsonResponse
    {
        if ($request->email !== null) {
            $request->validate([
                'name' => 'required',
                'email' => 'required|unique:users,email|ends_with:gmail.com',
                'password' => 'required|min:5',
                'password_confirmation' => 'required|min:5|same:password',
            ]);

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();

            return Response::Out('success', 'Your Account Created With Email', "", 200);
        } else {
            $request->validate([
                'name' => 'required',
                'phone_number' => 'required|unique:users,phone_number|min:11|max:11',
                'password' => 'required|min:5',
                'password_confirmation' => 'required|min:5|same:password',
            ]);

            $user = new User();
            $user->name = $request->name;
            $user->phone_number = $request->phone_number;
            $user->password = bcrypt($request->password);
            $user->save();

            return Response::Out('success', 'Your Account Created With Phone Number', "", 200);
        }
    }
}
