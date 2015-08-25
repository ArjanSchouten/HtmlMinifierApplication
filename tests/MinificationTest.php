<?php

class MinificationTest extends TestCase
{
    public function testMinification()
    {
        Session::start();

        $response = $this->post('process', ['html' => '<p><!--This is a comment--></p>', '_token' => csrf_token()])
            ->withoutMiddleware();

        $this->assertResponseOk();
        $this->assertJson('{"html": "<p></p>"}');
    }

    public function testMinificationPage()
    {
        $this->visit('/')
            ->see('You can create an issue or a pull request when bugs occur!');
    }
}