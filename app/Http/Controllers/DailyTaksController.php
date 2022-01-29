<?php

namespace App\Http\Controllers;
use App\Models\DailyTask;
use Illuminate\Http\Request;

class DailyTaksController extends Controller
{
    //Traemos la data almacenada en DB
    public function index(Request $request)
    {
        $dailyTaks = $request->task;

        //Verificación variables null 
        $dailyTaks = ($dailyTaks == NULL) ? ($dailyTaks = '') : $dailyTaks;

        if ($dailyTaks != NULL) {
            $result = DailyTask::where([['task', 'like', '%' . $dailyTaks . '%']])->get();
            return $result;
        }

        $dailyTaks = DailyTask::OrderBy('id', 'desc')->get();
        return response()->json($dailyTaks);
    }

    //Guardamos la información ingresada desde el form a la DB
    public function store(Request $request)
    {

        if (!$request->ajax()) return redirect('/'); //Si la petición no viene por ajax, redirecciona al basepath
    
            $dailyTaks = new DailyTask();
            $dailyTaks->task = $request->task;
            $dailyTaks->description = $request->description;

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

    
    public function show(DailyTask $dailyTaks)
    {
        //
        return response()->json($dailyTaks);
    }

    //Actualizamos el registro solicitado desde el front
    public function update(Request $request, DailyTask $dailyTaks)
    {
        if (!$request->ajax()) return redirect('/'); //Si la petición no viene por ajax, redirecciona al basepath

        $dailyTaks->fill($request->post())->save();
        return response()->json([
            'dailytaks' => $dailyTaks
        ]);
    }

    //Eliminamos usuarios seleccionados en la tabla de registro desde el front
    public function destroy(DailyTask $dailyTaks)
    {
        //
        $dailyTaks->delete();
        return response()->json([
            'message' => 'Eliminado correctamente'
        ]);
    }
}
