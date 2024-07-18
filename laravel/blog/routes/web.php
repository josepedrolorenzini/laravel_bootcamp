<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\BankController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Collection ;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



Route::prefix('web')->group(function () {

    Route::get('/', function() {
        return 'TEST web';
    });

    Route::get('users', function() {
        return 'TEST USER';
    });

    //inertia routes
    Route::get('bank', function() {
        $name = "Stoner ROOT Rock bank";
         return inertia::render('Bank' , [
            "name" => $name,
        ]); // Ensure "Bank" component exists in your React app
    })->name('bank');

    ///TRYING TO FIX TOMORROW
    Route::get('usuario', function() {
        return  view('usuario' , [BankController::class, 'MyCollection']);
    });

});

Route::get("/welcome" , [WelcomeController::class, 'welcome']);

///inertia middleware
Route::get('/welcome', function () {
    /// bring react components
    return Inertia::render('welcome');
})->middleware(['auth', 'verified'])->name('welcome');




Route::get('sleep/{id?}', function ($id = null) {
    return($id);
})->name('specific-blog');



Route::prefix('/stoner')->group( function () {
   
    
    $langs = [ 'php', "json" , "xml" , "javascript"] ;
    Route::get('/' , function() use ($langs) {
        $output = "" ;

        foreach ($langs as $band) {
          echo  $output .= "Hello, STONER ". $band. " World!<br>";
        }
        return $output;
    });

    Route::get('rock' , function(){
        return Inertia::render('Stoner');
        return 'Hello, STONER ROCK World!';
    });

    Route::get('test' , function(Request $request){
        dd($request);
        $request = null;
        return 'Hello, STONER ROOT World!';
    });

    Route::get('usario/{id?}', function ($id = null) {
        global $langs;
        return($langs[$id]);
    })->name('tabnine');



   

})->name('stonerBlog');




Route::get('tabnine/{id?}', function ($id = null) {
    $langs = [ 'php', "json" , "xml" , "javascript"] ;
    $result = $langs[$id] ;
    return($result);
})->name('tabnine');