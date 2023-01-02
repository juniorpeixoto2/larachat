<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithBroadcasting;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;

class OrderShipmentStatusUpdated implements ShouldBroadcast {
    // use InteractsWithBroadcasting;
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct() {
        // $this->broadcastVia('pusher');
    }

    public function broadcastOn() {
        return [
            new Channel('chatroom'),
            // new PrivateChannel('chat.' . $this->message->receiver_id)
        ];
    }
}