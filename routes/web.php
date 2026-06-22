<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home')->name('home');
Route::inertia('/users', 'Users')->name('users');
Route::inertia('/settings', 'Settings')->name('settings');

Route::post('/logout', function () {
    dd('logout', request()->all());
})->name('logout');
