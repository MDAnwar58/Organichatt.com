<?php

namespace App\Http\Controllers\Auth;

use App\Helper\Response;
use App\Http\Controllers\Controller;
use App\Mail\OTPMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ForgetPasswordController extends Controller
{
    function forgotPassword(Request $request)
    {
        if ($request->email != null) {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                $otp = rand(10000, 99999);

                Mail::to($user->email)->send(new OTPMail($user, $otp));

                return Response::Out("success", "OTP Send Your Email", "", 200);
            }
        } else {
            return false;
        }
    }
    function emailOTPVerifyForgotPassword(Request $request)
    {
        return $request->all();
    }
}
