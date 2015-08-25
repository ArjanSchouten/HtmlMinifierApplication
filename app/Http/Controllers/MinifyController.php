<?php

namespace App\Http\Controllers;

use ArjanSchouten\HTMLMin\Minify;
use ArjanSchouten\HTMLMin\MinifyContext;
use ArjanSchouten\HTMLMin\Options;
use ArjanSchouten\HTMLMin\PlaceholderContainer;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;

class MinifyController extends Controller
{
    public function index()
    {
        $options = Options::options();

        return view('minify.index', compact('options'));
    }

    public function process()
    {
        $options = Input::get('options');
        $context = new MinifyContext(new PlaceholderContainer());
        $context->setContents(Input::get('html'));

        $minify = new Minify();
        $response = [
            'html' => $minify->run($context, $options)->getContents()
        ];

        return Response::json($response);
    }
}
