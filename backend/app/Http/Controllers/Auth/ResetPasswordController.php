<?php

namespace App\Http\Controllers\Auth;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    function resetPassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:5',
            'password_confirmation' => 'required|same:password|min:5',
        ]);

        $user = User::where('email', $request->email)->first();
        $user->password = bcrypt($request->password);
        $user->save();

        return Response::Out("success", "Your has been password reset!", "", 200);
    }
}
