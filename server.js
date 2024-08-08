const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { fromAccount, toAccount, iban, bic, amount, currency, transferType, description, email, confirmEmail, phone } = req.body;

  if (email !== confirmEmail) {
    return res.status(400).send('Les adresses e-mail ne correspondent pas.');
  }

  // Configurer le transporteur Nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  // Définir les options de l'email
  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Confirmation de réception de votre virement',
    text: `Bonjour,

Nous avons bien reçu votre demande de virement avec les détails suivants :
- Compte émetteur: ${fromAccount}
- Compte bénéficiaire: ${toAccount}
- IBAN du bénéficiaire: ${iban}
- BIC / SWIFT: ${bic}
- Montant: ${amount} ${currency}
- Type de virement: ${transferType}
- Description: ${description}
- Numéro de téléphone: ${phone}

Merci de nous avoir contactés.`,
    html: `<p>Bonjour,</p>
           <p>Nous avons bien reçu votre demande de virement avec les détails suivants :</p>
           <ul>
             <li>Compte émetteur: ${fromAccount}</li>
             <li>Compte bénéficiaire: ${toAccount}</li>
             <li>IBAN du bénéficiaire: ${iban}</li>
             <li>BIC / SWIFT: ${bic}</li>
             <li>Montant: ${amount} ${currency}</li>
             <li>Type de virement: ${transferType}</li>
             <li>Description: ${description}</li>
             <li>Numéro de téléphone: ${phone}</li>
           </ul>
           <p>Merci de nous avoir contactés.</p>`
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email envoyé: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
