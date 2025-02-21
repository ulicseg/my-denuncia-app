const nodemailer = require('nodemailer');

// Crea el transportador usando Outlook
const transporter = nodemailer.createTransport({
  service: 'hotmail',  // Usamos el servicio de Outlook
  auth: {
    user: 'sistemagestorlegislativo@outlook.com',  // Tu correo Outlook
    pass: 'sistemitaparatato11'  // Tu contraseña de Outlook
  }
});

// Manejar el envío de correo
const enviarCorreo = (asunto, problema) => {
  const mailOptions = {
    from: 'sistemagestorlegislativo@outlook.com',  // Correo de origen
    to: 'sistemagestorlegislativo@outlook.com',    // Correo de destino (puede ser el mismo)
    subject: `Denuncia Anónima: ${asunto}`,
    text: `Problema reportado:\n\n${problema}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

module.exports = enviarCorreo;
