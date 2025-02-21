// /api/send-email.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { asunto, problema } = req.body;

    if (!asunto || !problema) {
      return res.status(400).json({ error: 'Asunto y problema son obligatorios' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sistemagestionlegislativo@gmail.com',    // Reemplaza con tu correo de Gmail
        pass: 'sistemitaparatato11'           // Usa tu contraseña de aplicación o la normal
      }
    });

    const mailOptions = {
      from: 'sistemagestionlegislativo@gmail.com',
      to: 'sistemagestionlegislativo@gmail.com',        // Enviar el correo a ti mismo
      subject: `Denuncia Anónima: ${asunto}`,
      text: `Problema reportado:\n\n${problema}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Denuncia enviada con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo enviar el correo: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
