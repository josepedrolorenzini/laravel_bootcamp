<?php

use App\Models\Paypal;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Paypal2;
use App\Http\Controllers\StepCalculator;

Route::get('/', function () {
    return view('welcome');
});




Route::get('/paypal', function(Paypal $paypal) {
        
          // dd($paypal->pay());
         //   dd($paypal);

            $result = $paypal->example();
            
            return view('paypal' , [
                'result' => $result,
                'consolelog' => $paypal->consoleLog()
            ]);
});


Route::get('/paypal2', function(Paypal2 $paypal2){
    dd($paypal2->log());
});


Route::get("/steps" , [StepCalculator::class , "displayContact"] ) ;
Route::post('/steps' , [StepCalculator::class, 'submitForm'])->name('contact2-submit');
