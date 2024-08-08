   // Access code verification
   const accessCodeOverlay = document.getElementById('accessCodeOverlay');
   const accessCodeForm = document.getElementById('accessCodeForm');
   const accessCodeInput = document.getElementById('accessCodeInput');
   const accessCodeSubmit = document.getElementById('accessCodeSubmit');
   const accessCodeError = document.getElementById('accessCodeError');

   const correctAccessCode = '010101';

   accessCodeSubmit.addEventListener('click', function(e) {
     e.preventDefault();
     if (accessCodeInput.value === correctAccessCode) {
       accessCodeOverlay.style.display = 'none';
     } else {
       accessCodeError.style.display = 'block';
       accessCodeInput.value = '';
     }
   });

   const translations = {
     'fr': {
       'accueil': 'Accueil',
       'services': 'Services',
       'virement': 'Virement',
       'contact': 'Contact',
       'bienvenue': 'Bienvenue sur SecureFinance',
       'subtitle': 'Votre plateforme de virement sécurisée et efficace',
       'cta': 'Effectuer un virement',
       'virements': 'Virements instantanés',
       'virements_desc': 'Transférez des fonds en temps réel, 24/7',
       'securite': 'Sécurité avancée',
       'securite_desc': 'Vos transactions sont protégées par un cryptage de pointe',
       'change': 'Change multi-devises',
       'change_desc': 'Échangez facilement entre différentes devises',
       'suivi': 'Suivi des transactions',
       'suivi_desc': 'Consultez l\'historique et le statut de vos virements',
       'form_title': 'Effectuer un virement',
       'from_account': 'Compte émetteur',
       'to_account': 'Compte bénéficiaire',
       'iban': 'IBAN du bénéficiaire',
       'bic': 'BIC / SWIFT',
       'amount': 'Montant',
       'currency': 'Devise',
       'transfer_type': 'Type de virement',
       'description': 'Description (optionnel)',
       'email': 'Adresse e-mail',
       'confirm_email': 'Confirmer l\'adresse e-mail',
       'phone': 'Numéro de téléphone',
       'submit': 'Effectuer le virement',
       'footer': '© 2023 SecureFinance. Tous droits réservés.',
       'transfer_success': 'Transfert réussi',
       'amount_sent': 'Montant envoyé',
       'recipient': 'Bénéficiaire',
       'transaction_id': 'ID de transaction',
       'processing': 'Traitement en cours...'
     },
     'en': {
       'accueil': 'Home',
       'services': 'Services',
       'virement': 'Transfer',
       'contact': 'Contact',
       'bienvenue': 'Welcome to SecureFinance',
       'subtitle': 'Your secure and efficient transfer platform',
       'cta': 'Make a transfer',
       'virements': 'Instant transfers',
       'virements_desc': 'Transfer funds in real-time, 24/7',
       'securite': 'Advanced security',
       'securite_desc': 'Your transactions are protected by state-of-the-art encryption',
       'change': 'Multi-currency exchange',
       'change_desc': 'Easily exchange between different currencies',
       'suivi': 'Transaction tracking',
       'suivi_desc': 'View the history and status of your transfers',
       'form_title': 'Make a transfer',
       'from_account': 'From account',
       'to_account': 'To account',
       'iban': 'Beneficiary IBAN',
       'bic': 'BIC / SWIFT',
       'amount': 'Amount',
       'currency': 'Currency',
       'transfer_type': 'Transfer type',
       'description': 'Description (optional)',
       'email': 'Email address',
       'confirm_email': 'Confirm email address',
       'phone': 'Phone number',
       'submit': 'Make transfer',
       'footer': '© 2023 SecureFinance. All rights reserved.',
       'transfer_success': 'Transfer Successful',
       'amount_sent': 'Amount sent',
       'recipient': 'Recipient',
       'transaction_id': 'Transaction ID',
       'processing': 'Processing...'
     },
     'es': {
       'accueil': 'Inicio',
       'services': 'Servicios',
       'virement': 'Transferencia',
       'contact': 'Contacto',
       'bienvenue': 'Bienvenido a SecureFinance',
       'subtitle': 'Su plataforma de transferencia segura y eficiente',
       'cta': 'Realizar una transferencia',
       'virements': 'Transferencias instantáneas',
       'virements_desc': 'Transfiera fondos en tiempo real, 24/7',
       'securite': 'Seguridad avanzada',
       'securite_desc': 'Sus transacciones están protegidas por encriptación de vanguardia',
       'change': 'Cambio multi-divisas',
       'change_desc': 'Intercambie fácilmente entre diferentes divisas',
       'suivi': 'Seguimiento de transacciones',
       'suivi_desc': 'Consulte el historial y el estado de sus transferencias',
       'form_title': 'Realizar una transferencia',
       'from_account': 'Cuenta de origen',
       'to_account': 'Cuenta de destino',
       'iban': 'IBAN del beneficiario',
       'bic': 'BIC / SWIFT',
       'amount': 'Cantidad',
       'currency': 'Divisa',
       'transfer_type': 'Tipo de transferencia',
       'description': 'Descripción (opcional)',
       'email': 'Dirección de correo electrónico',
       'confirm_email': 'Confirmar dirección de correo electrónico',
       'phone': 'Número de teléfono',
       'submit': 'Realizar transferencia',
       'footer': '© 2023 SecureFinance. Todos los derechos reservados.',
       'transfer_success': 'Transferencia exitosa',
       'amount_sent': 'Cantidad enviada',
       'recipient': 'Beneficiario',
       'transaction_id': 'ID de transacción',
       'processing': 'Procesando...'
     },
     'de': {
       'accueil': 'Startseite',
       'services': 'Dienstleistungen',
       'virement': 'Überweisung',
       'contact': 'Kontakt',
       'bienvenue': 'Willkommen bei SecureFinance',
       'subtitle': 'Ihre sichere und effiziente Überweisungsplattform',
       'cta': 'Eine Überweisung tätigen',
       'virements': 'Sofortüberweisungen',
       'virements_desc': 'Überweisen Sie Geld in Echtzeit, rund um die Uhr',
       'securite': 'Fortschrittliche Sicherheit',
       'securite_desc': 'Ihre Transaktionen sind durch modernste Verschlüsselung geschützt',
       'change': 'Multi-Währungs-Umtausch',
       'change_desc': 'Tauschen Sie einfach zwischen verschiedenen Währungen',
       'suivi': 'Transaktionsverfolgung',
       'suivi_desc': 'Sehen Sie den Verlauf und Status Ihrer Überweisungen ein',
       'form_title': 'Eine Überweisung tätigen',
       'from_account': 'Von Konto',
       'to_account': 'Zu Konto',
       'iban': 'IBAN des Empfängers',
       'bic': 'BIC / SWIFT',
       'amount': 'Betrag',
       'currency': 'Währung',
       'transfer_type': 'Überweisungsart',
       'description': 'Beschreibung (optional)',
       'email': 'E-Mail-Adresse',
       'confirm_email': 'E-Mail-Adresse bestätigen',
       'phone': 'Telefonnummer',
       'submit': 'Überweisung durchführen',
       'footer': '© 2023 SecureFinance. Alle Rechte vorbehalten.',
       'transfer_success': 'Überweisung erfolgreich',
       'amount_sent': 'Überwiesener Betrag',
       'recipient': 'Empfänger',
       'transaction_id': 'Transaktions-ID',
       'processing': 'Verarbeitung...'
     },
     'it': {
       'accueil': 'Home',
       'services': 'Servizi',
       'virement': 'Bonifico',
       'contact': 'Contatto',
       'bienvenue': 'Benvenuto su SecureFinance',
       'subtitle': 'La tua piattaforma di bonifici sicura ed efficiente',
       'cta': 'Effettua un bonifico',
       'virements': 'Bonifici istantanei',
       'virements_desc': 'Trasferisci fondi in tempo reale, 24/7',
       'securite': 'Sicurezza avanzata',
       'securite_desc': 'Le tue transazioni sono protette da crittografia all\'avanguardia',
       'change': 'Cambio multi-valuta',
       'change_desc': 'Scambia facilmente tra diverse valute',
       'suivi': 'Monitoraggio delle transazioni',
       'suivi_desc': 'Visualizza la cronologia e lo stato dei tuoi bonifici',
       'form_title': 'Effettua un bonifico',
       'from_account': 'Dal conto',
       'to_account': 'Al conto',
       'iban': 'IBAN del beneficiario',
       'bic': 'BIC / SWIFT',
       'amount': 'Importo',
       'currency': 'Valuta',
       'transfer_type': 'Tipo di bonifico',
       'description': 'Descrizione (opzionale)',
       'email': 'Indirizzo email',
       'confirm_email': 'Conferma indirizzo email',
       'phone': 'Numero di telefono',
       'submit': 'Effettua bonifico',
       'footer': '© 2023 SecureFinance. Tutti i diritti riservati.',
       'transfer_success': 'Bonifico riuscito',
       'amount_sent': 'Importo inviato',
       'recipient': 'Beneficiario',
       'transaction_id': 'ID transazione',
       'processing': 'Elaborazione in corso...'
     }
   };

   function translatePage(lang) {
     document.querySelectorAll('[data-translate]').forEach(element => {
       const key = element.getAttribute('data-translate');
       if (translations[lang] && translations[lang][key]) {
         element.textContent = translations[lang][key];
       }
     });
     document.documentElement.lang = lang;
   }

   document.getElementById('languageSelect').addEventListener('change', function() {
     translatePage(this.value);
   });

   // Initialize with French
   translatePage('fr');

   // Dark mode toggle
   const darkModeToggle = document.getElementById('darkModeToggle');
   const body = document.body;

   darkModeToggle.addEventListener('click', () => {
     body.classList.toggle('dark-mode');
     darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌓';
   });

   // Form validation and submission
   const transferForm = document.getElementById('transferForm');
   const progressOverlay = document.getElementById('progressOverlay');
   const progressBar = document.getElementById('progressBar');
   const popup = document.getElementById('transferPopup');
   const popupClose = document.querySelector('.popup-close');

   transferForm.addEventListener('submit', function(e) {
     e.preventDefault();
     
     const email = document.getElementById('email').value;
     const confirmEmail = document.getElementById('confirmEmail').value;

     if (email !== confirmEmail) {
       alert('Les adresses e-mail ne correspondent pas.');
       return;
     }

     // Show progress overlay
     progressOverlay.style.display = 'flex';
     
     // Simulate progress
     let width = 0;
     const interval = setInterval(() => {
       if (width >= 100) {
         clearInterval(interval);
         setTimeout(() => {
           progressOverlay.style.display = 'none';
           showPopup();
         }, 500);
       } else {
         width += 0.5;
         progressBar.style.width = width + '%';
         progressBar.textContent = Math.round(width) + '%';
       }
     }, 50);
   });

   function showPopup() {
     const amount = document.getElementById('amount').value;
     const currency = document.getElementById('currency').value;
     const recipient = document.getElementById('toAccount').value;
     const transferType = document.getElementById('transferType').value;
     const transactionId = Math.random().toString(36).substr(2, 9).toUpperCase();

     document.getElementById('popupAmount').textContent = `${amount} ${currency}`;
     document.getElementById('popupRecipient').textContent = recipient;
     document.getElementById('popupTransferType').textContent = transferType;
     document.getElementById('popupTransactionId').textContent = transactionId;

     popup.style.display = 'block';
   }

   popupClose.addEventListener('click', () => {
     popup.style.display = 'none';
     transferForm.reset();
   });

   // Smooth scrolling for navigation links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
       });
     });
   });//