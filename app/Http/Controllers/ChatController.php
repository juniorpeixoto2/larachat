<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller {


    public function index() {

        return view('chat/index');

        // return Inertia::render('chat');
        // return Inertia::render('Chat/ChatComponent', [
        //     //
        // ]);
    }
}
