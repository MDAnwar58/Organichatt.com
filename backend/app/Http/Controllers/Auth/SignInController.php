<?php

namespace App\Http\Controllers\Auth;

use App\Helper\JWTToken;
use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SignInController extends Controller
{
    public function signInPage(): View
    {
        return view('auth.sign-in');
    }
    function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required|min:5',
        ]);
        // if ($request->email != null) {
        $user = User::where('email', $request->email)->first();
        if (password_verify($request->password, $user->password)) {
            $token = JWTToken::createToken($user->email, $user->id, 7);
            $data = [
                'token' => $token,
                'user_role' => $user->role
            ];
            return Response::Out("sign in", "", $data, 200)->cookie('token', $token, 60 * 60 * 24 * 7);
        }
        return Response::Out("password_fail", "Passwords don't match!", "", 200);
        // } else {
        //     $request->validate([
        //         'phone_number' => 'required|min:11|max:11|exists:users,phone_number',
        //         'password' => 'required|min:5',
        //     ]);

        //     $user = User::where('phone_number', $request->phone_number)->first();
        //     if (password_verify($request->password, $user->password)) {
        //         $token = JWTToken::createToken($user->phone_number, $user->id);
        //         $data = [
        //             'token' => $token,
        //         ];
        //         return Response::Out("sign in", "", $data, 200);
        //     }
        //     return Response::Out("password_fail", "Passwords do not match!", "", 200);
        // }
    }
    function adminSignIn(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required|min:5'
        ]);

        $user = User::where('email', $request->email)->first();
        if (password_verify($request->password, $user->password)) {
            $token = JWTToken::createToken($user->email, $user->id, 7);
            return Response::Out("success", "", $token, 200);
        }

        return Response::Out("fail", "Password Don't Mass", "", 200);
    }
}
