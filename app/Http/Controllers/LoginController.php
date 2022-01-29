<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    //
    public function adminLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'bail|required|email',
            'password' => 'bail|required|min:6',
        ]);

        if (Auth()->attempt($credentials)) {
            return response()->json([
                'msg' => 'You are logged in'
            ], 200);
        } else {
            return response()->json([
                'msg' => 'Incorrect login details',
            ], 401);
        }
    }

    public function logout()
    {
        Auth::logout();
    }
}