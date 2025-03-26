// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configura la API Key de SendGrid desde las variables de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request): Promise<Response> {
  try {
    // Extrae los datos del formulario
    const { nombre, correo, asunto, mensaje } = await request.json();

    // Construye el contenido del correo usando los datos del formulario
    const emailSubject = `Mensaje de contacto: ${asunto}`;
    const emailText = `Nuevo mensaje de contacto de ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`;
    const emailHtml = `
      <div style="text-align: center;">
        <h3>Nuevo mensaje de contacto de ${nombre}</h3>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      </div>
    `;

    const msg = {
      to: 'georgessemaan576@gmail.com',  // Destinatario
      from: 'email-service@amoxtli.tech',        // Remitente (debe estar verificado en SendGrid)
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    await sgMail.send(msg);
    console.log('Email sent');
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}
