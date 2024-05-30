<?php

namespace App\Providers;


//use App\Helpers\DashboardConfigurator;
use App\Helpers\DashboardConfigurator;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    \App\Panel\XDashboard::initialize(new DashboardConfigurator());


  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
      return config('app.frontend_url') . "/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
    });

    VerifyCsrfToken::except([
      "/ckUploader",
      'livewire/*',
    ]);

    Paginator::useBootstrap();
  }
}
