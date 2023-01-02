<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model {
    use HasFactory;

    protected $fillable = ['sender_id', 'receiver_id', 'message'];

    public function sender() {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function receiver() {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function messages($id) {
        return $this->where(function ($q) use ($id) {
            $q->where('sender_id', auth()->user()->id);
            $q->where('receiver_id', $id);
        })
            ->orWhere(function ($q) use ($id) {
                $q->where('sender_id', $id);
                $q->where('receiver_id', auth()->user()->id);
            })
            ->with('sender', 'receiver')
            ->get();
    }
}
