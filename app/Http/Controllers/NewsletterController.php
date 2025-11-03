<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterSubscribed;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NewsletterController extends Controller
{
    // Guardar suscripción y enviar correo
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:subscribers,email',
        ]);

        $subscriber = Subscriber::create([
            'email' => $validated['email'],
        ]);

        // Enviar correo
        Mail::to($subscriber->email)->send(new NewsletterSubscribed($subscriber->email));

        return response()->json([
            'message' => '¡Suscripción exitosa! Te hemos enviado un correo de confirmación.',
        ]);
    }

    // Mostrar suscriptores
    public function index()
    {
        $subscribers = Subscriber::latest()->get();

        return inertia('Admin/Subscribers', [
            'subscribers' => $subscribers,
        ]);
    }

    // Eliminar suscriptor
    public function destroy(Subscriber $subscriber)
    {
        $subscriber->delete();

        return response()->json([
            'message' => 'Suscriptor eliminado correctamente.',
        ]);
    }
}
