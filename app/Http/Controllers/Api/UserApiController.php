<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserApiController extends Controller {

    protected $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function index(Request $request) {
        $users = $this->user
            ->where('id', '!=', $request->user()->id)
            ->get();

        return response()->json($users);
    }
}