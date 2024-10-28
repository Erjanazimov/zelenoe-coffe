import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { fio, phone, description } = req.body;

  if (!fio || !phone || !description) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Настройка транспортера для отправки почты
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "erjan.azimov@gmail.com",
      pass: "12345678"
    },
  });

  try {
    // Отправка письма
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // ваш email
      to: 'your-email@example.com', // email, на который отправляется сообщение
      subject: 'Новая заявка', // тема письма
      text: `ФИО: ${fio}\nТелефон: ${phone}\nОписание: ${description}`, // текст письма
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send email', error });
  }
}
