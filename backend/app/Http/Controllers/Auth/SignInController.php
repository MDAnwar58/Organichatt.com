<?php

namespace App\Http\Controllers\Auth;

use App\Helper\JWTToken;
use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SignInController extends Controller
{
    function signIn(Request $request)
    {
        if ($request->email != null) {
            $request->validate([
                'email' => 'required|exists:users,email',
                'password' => 'required|min:5',
            ]);

            $user = User::where('email', $request->email)->first();
            if (password_verify($request->password, $user->password)) {
                $token = JWTToken::createToken($user->email, $user->id);
                $data = [
                    'token' => $token,
                ];
                return Response::Out("sign in", "", $data, 200);
            }
            return Response::Out("password_fail", "Passwords do not match!", "", 200);
        } else {
            $request->validate([
                'phone_number' => 'required|min:11|max:11|exists:users,phone_number',
                'password' => 'required|min:5',
            ]);

            $user = User::where('phone_number', $request->phone_number)->first();
            if (password_verify($request->password, $user->password)) {
                $token = JWTToken::createToken($user->phone_number, $user->id);
                $data = [
                    'token' => $token,
                ];
                return Response::Out("sign in", "", $data, 200);
            }
            return Response::Out("password_fail", "Passwords do not match!", "", 200);
        }
    }
}
