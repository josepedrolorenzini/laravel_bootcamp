<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Steps extends Model
{
    use HasFactory;
    public $name ;
    public $steps ;
    public $display ;

    public function __construct( $name ,  $steps , $display){
           $this->name    = $name;
           $this->steps   = $steps;
           $this->display = $display;
    }

    public function getStepsToKm($steps){
            return $steps * 0.74;
    }
}
