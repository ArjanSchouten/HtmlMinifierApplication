<?php

class MinificationTest extends TestCase
{
    public function testMinification()
    {
        Session::start();

        $response = $this->post('minify',['html' => '<p><!--This is a comment--></p>', '_token' => csrf_token()])
            ->withoutMiddleware()
            ->response;

        $this->assertResponseOk();
        $this->assertEquals('<p>'.PHP_EOL.'</p>', $response->getOriginalContent());
    }

    public function testMinificationPage()
    {
        $this->visit('/')
            ->see('like to hear your');
    }
}