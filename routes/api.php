<?php

use App\Http\Controllers\Api\ChatApiController;
use App\Http\Controllers\Api\UserApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['message' => 'ok'];
});


Route::prefix('v1')
    // ->middleware(['web'])
    ->middleware(['auth:web'])
    ->group(function () {
        Route::get('/users', [UserApiController::class, 'index']);

        Route::get('/messages/create', [ChatApiController::class, 'store']);
        Route::get('/messages/{id}', [ChatApiController::class, 'show']);
    });



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
