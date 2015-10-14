<?php

namespace App\Http\Controllers;

use ArjanSchouten\HtmlMinifier\Minify;
use ArjanSchouten\HtmlMinifier\MinifyContext;
use ArjanSchouten\HtmlMinifier\Options;
use ArjanSchouten\HtmlMinifier\PlaceholderContainer;
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
        $options = [];
        collect(Input::get('options'))->each(function ($option) use (&$options) {
            $options[$option['name']] = strtolower($option['enabled']) === 'true';
        });

        $context = new MinifyContext(new PlaceholderContainer());
        $context->setContents(Input::get('html'));

        $minify = new Minify();
        $response = [
            'html' => $minify->run($context, $options)->getContents()
        ];

        return Response::json($response);
    }
}
