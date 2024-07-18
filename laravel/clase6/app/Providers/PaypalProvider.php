<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Paypal;

class PaypalProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        $this->app->bind(Paypal::class, function(){
             return new Paypal("Config"); // return new instance of PayPal class when asked for Paypal interface.  // The PayPal class is assumed to exist in your project.  // Replace PayPal with your actual PayPal class name.  // This will ensure that your app is decoupled from the PayPal implementation details.  // Now, if you want to switch to another payment gateway (e.g., Stripe), you can easily do so without modifying the existing codebase.  // This is a common practice in Laravel to provide decoupled interfaces for different payment gateways.  // This way, you can easily swap out the implementation without affecting the rest of your application.  // The PayPal class is assumed to have a constructor that accepts the necessary configuration options.  // Replace 'YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET', and 'YOUR_SANDBOX_URL' with your actual PayPal client ID, client secret, and sandbox URL.
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
