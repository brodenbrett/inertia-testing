<?php

use App\Http\Controllers\UsersController;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home')->name('home');
Route::get('/users', [UsersController::class, 'index'])->name('users');
Route::inertia('/settings', 'Settings')->name('settings');

Route::post('/logout', function () {
    dd('logout', request()->all());
})->name('logout');
