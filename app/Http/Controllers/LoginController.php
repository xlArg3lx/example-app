<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
     // Función para validar login
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
 
    // Función para registrar usuarios
     public function registerUser(Request $request)
     {
         // validate request
         $this->validate($request, [
             'name' => 'required',
             'email' => 'bail|required|email|unique:users',
             'password' => 'bail|required|min:6',
         ]);
         $password = bcrypt($request->password);
         $user = User::create([
             'name' => $request->name,
             'email' => $request->email,
             'password' => $password,
         ]);
         return $user;
     }
     
     // Función para hacer Logout
     public function logout()
     {
         Auth::logout();
         return redirect('/login');
     }
}
