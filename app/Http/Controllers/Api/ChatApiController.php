<?php

namespace App\Http\Controllers\Api;

use App\Events\NewMessageCreated;
use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class ChatApiController extends Controller {

    protected $message;

    public function __construct(Message $message) {
        $this->message = $message;
    }

    public function store(Request $request) {
        $message = $request->user()
            ->messages()
            ->create($request->all());

        event(new NewMessageCreated($message));

        return response()->json($message);
    }

    public function my_messages(Request $request, Message $message, $other_id) {
        $messages = $message->messages($other_id);
        return response()->json($messages);
    }
}
