<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\High ;
use Illuminate\Support\Collection;

class BankController extends Controller
{
    //
    public $newUser ;
    public function __construct(){
            $this->newUser = new High(1, "Super high" , 1981);
    }

    public function displayBank(Request $request){
        dd($request);
        return view('bank',[

            'user'=>$this->newUser ,
            "request"=>$request->all(),

            ]);
    }


    public function MyCollection(){
        $data = [
            ['name' => 'John', 'age' => 30],
            ['name' => 'Jane', 'age' => 25],
            ['name' => 'Doe', 'age' => 40],
        ];
        $collection = collect($data);

        // return $collection->filter(function ($value, $key) {
        //     return $value === 'b';
        // });
        
        $output = "";
    $collection->each(function ($value, $key) {
        global $output;
        $output .= "{$value['name']} is {$value['age']} years old.<br>";
    });

    return $output;






    }




}
