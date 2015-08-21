<?php

Route::get('/', ['as' => 'minify.index', 'uses' => 'MinifyController@index']);
Route::post('process', ['as' => 'minify.process', 'uses' => 'MinifyController@process']);