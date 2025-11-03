<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:80',
            'lastname' => 'nullable|string|max:80',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:100',
            'message' => 'required|string|max:1000',
            'terms' => 'accepted'
        ]);


        try {
            // Envía el correo
            Mail::to(config('mail.from.address'))
                ->send(new ContactMail($validated));

            return back()->with('success', 'Mensaje enviado correctamente.');
        } catch (\Exception $e) {
            return back()->withErrors(['email' => 'No se pudo enviar el mensaje.']);
        }
    }
}
