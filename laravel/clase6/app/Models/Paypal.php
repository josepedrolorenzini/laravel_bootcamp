<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Paypal extends Model
{
    use HasFactory;

        public function __construct($config)
        {
            echo "Paypal PAYMENT Model Class . </br> ";
        }
        public function pay(){
            return "paypal pay" ;
        }
        public function example(){
            return ['logger' , 'payment' , 'sql' , 'php' , 'json' , 'javascript' ];
        }
        public function logger($message = "Paypal test message"){
            $logger = [
                Log::emergency($message),
                Log::alert($message),
                Log::critical($message),
                Log::error($message),
                Log::warning($message),
                Log::notice($message),
                Log::info($message),
                Log::debug($message),

            ];
            dd($logger);
           return  logger("hello") ;
        }

        public function consoleLog(){
            echo "<script>console.log(this)</script>";
        }
}
