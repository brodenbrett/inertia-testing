<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validated = $request->validate(['q' => 'nullable|string']);

        $searchTerm = $validated['q'] ?? null;

        $users = User::query()
            ->when($searchTerm, function ($query, $searchTerm) {
                $query->whereLike('name', "%{$searchTerm}%");
                $query->orWhereLike('email', "%{$searchTerm}%");
            })
            ->paginate(10)
            ->withQueryString()
            ->onEachSide(1)
            ->through(fn ($user) => [
                'id' => $user->uuid,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->format('l, F jS Y, g:i A'),
            ]);

        return Inertia::render('Users/Index', [
            'users' => $users,
            'filters' => $validated,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
