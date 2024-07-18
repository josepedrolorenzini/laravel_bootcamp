<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paypal;

class Paypal2 extends Controller
{
    //
    public $paypal2;

    public function __construct(Paypal $paypal){
        $this->paypal2 = $paypal;
    }

    public function index(){
        return view('paypal2');
    }

    public function example(){
        $paypal = new PayPal("whatever"); // crear nueva PayPal clase
        return $paypal->example();
    }

    public function log(){
        $paypal = new PayPal("whatever"); // crear nueva PayPal clase
        //log(Paypal $paypal){ Paypal modelo $paypal variable
       return  $paypal->logger('paypal');
    }
    public function hello(){
        $paypal = new PayPal("whatever"); // crear nueva PayPal clase

        // Create a new instance of Paypal class
        // $paypal = new Paypal();
      
        // Call the pay() method to make the payment
        // It will return the result of the payment process
        // You can process the result further according to your needs
        // For example, you can redirect to a success page or display a success message to the user.

        var_dump(Paypal2::class);
        var_dump(Paypal::class);
        return 'Hello PayPal' . $paypal->consoleLog();
    }
}
