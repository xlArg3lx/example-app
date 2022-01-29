<?php

namespace App\Http\Controllers;
use App\Models\DailyTask;
use Illuminate\Http\Request;

class DailyTaksController extends Controller
{
    //Traemos la data almacenada en DB
    public function index()
    {
        $dailyTaks = $DailyTask::all();
        return response()->json($dailyTaks);
    }

    //Guardamos la información ingresada desde el form a la DB
    public function store(Request $request)
    {

        if (!$request->ajax()) return redirect('/'); //Si la petición no viene por ajax, redirecciona al basepath
    
            $dailyTaks = new DailyTask();
            $dailyTaks->consecutivo = $request->task;
            $dailyTaks->nit = $request->descriptcion;

            if (empty($request)) {
                return response()->json([
                    'msg' => "Server Error"
                ], 401);
            } else {
                $dailyTaks->save();
                return response()->json([
                    'dailytask' => $dailyTaks
                ]);
            }
    }

    //Actualizamos el registro solicitado desde el front
    public function update(Request $request, Requerimientos $dailyTaks)
    {
        if (!$request->ajax()) return redirect('/'); //Si la petición no viene por ajax, redirecciona al basepath

        $dailyTaks->fill($request->post())->save();
        return response()->json([
            'dailytaks' => $dailyTaks
        ]);
    }

    //Eliminamos usuarios seleccionados en la tabla de registro desde el front
    public function destroy($id)
    {
        //
    }
}
