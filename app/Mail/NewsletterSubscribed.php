<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewsletterSubscribed extends Mailable
{
    use Queueable, SerializesModels;

    public string $email;

    /**
     * Create a new message instance.
     */
    public function __construct(string $email)
    {
        $this->email = $email;
    }

    /**
     * Define el asunto del correo.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '¡Gracias por suscribirte a Orinoco!',
        );
    }

    /**
     * Define la vista del correo y los datos que se pasan.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.newsletter_subscribed',
            with: [
                'email' => $this->email,
            ],
        );
    }

    /**
     * No adjuntamos archivos, pero puedes hacerlo aquí si lo deseas.
     */
    public function attachments(): array
    {
        return [];
    }
}
