<?php
namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class High extends Authenticatable{
    use HasFactory, Notifiable;

    public $id;
    public $amount ; 
    public $name ;

    public function __construct($id,$name = "High" ,$amount){
        $this->id       = $id;
        $this->name     = $name;  // 
        $this->amount  = $amount;
        
    }

    public function __toString(){   
        return "High: $this->name, $this->amount";
        
    }

    public function bankDeposit(){
        return $this->amount ;
    }

}