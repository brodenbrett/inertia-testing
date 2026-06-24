<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('home');
Route::get('/users', [UsersController::class, 'index'])->name('users.index');
Route::get('/users/create', [UsersController::class, 'create'])->name('users.create');
Route::inertia('/settings', 'Settings')->name('settings');

Route::post('/logout', function () {
    dd('logout', request()->all());
})->name('logout');
