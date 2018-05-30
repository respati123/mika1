<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.customer.customer_index');
});

Route::resource('loyalty', 'LoyaltyController');
Route::resource('location', 'LocationController');
Route::resource('category', 'CategoriesController');
Route::resource('class', 'ClassController');
Route::resource('building', 'BuildingController');
Route::resource('vehicletypes', 'VehicleTypeController');
Route::resource('vehiclebrands', 'VehicleBrandController');
