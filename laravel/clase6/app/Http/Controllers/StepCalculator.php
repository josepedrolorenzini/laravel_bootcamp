<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Steps ;

class StepCalculator extends Controller
{
    //


    public function displayContact(){
    
        //checking if data is being passes
        $data = session()->get('data'); // retrieve the data from the session
        $totalSteps = session()->get('total_steps');
        $name = session()->get('name');
        $userOne = new Steps('user 1', 100 , "flex");
       // dd($data);
        try {
            if($data){
                return view('steps', [
                    'data' => $data,
                    'totalSteps' => $totalSteps,
                    'name' => $name,
                    'userOne' => $userOne,
                ]);
            }else{
               // return redirect('steps')->with('error', 'No data available.');
                return view('steps', ['no data' , 'error']);
            }

        } catch (\Throwable $th) {
            echo "An error occurred: ". $th->getMessage();
            throw $th; // re-throw the exception
        }
    
    
    }

    public function submitForm(Request $request){
        $data = $request->all();
        $userStep = new Steps("step 1", $data['steps'] , "flex");
       // dd($userStep);
               
        $totalSteps = $userStep->getStepsToKm(120);
        // dd($data);
        return redirect('/steps')
        ->with('data', $data)->with("totalSteps" , $totalSteps);
    }


    public function submitForm1(Request $request){
        $data = $request->all();
    
        Steps::create($data);
     
        
        return redirect()->route('steps')
        ->with([
            'data', $data,
          
        ]);
    }



}
