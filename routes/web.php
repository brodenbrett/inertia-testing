<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home')->name('home');

Route::get('/users', function () {
    return Inertia::render('Users', [
        'time' => now()->format('l, F jS Y, g:i A')
    ]);
})->name('users');

Route::inertia('/settings', 'Settings')->name('settings');

Route::post('/logout', function () {
    dd('logout', request()->all());
})->name('logout');
