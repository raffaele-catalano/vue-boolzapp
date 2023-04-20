import contacts from './db.js'

// suoni di invio/ricezione messaggi
const soundMsgSent      = new Audio('assets/sound/message_sent.mp3');
const soundMsgReceived  = new Audio('assets/sound/message_received.mp3');

//inizializzazione di Luxon
const dt = luxon.DateTime;


const {createApp} = Vue;

createApp ({
    data() {
        return {
            // array principale importato dal db.js
            contacts,
            // contatore
            counter         : 0,
            // proprietà relativa ad un nuovo messaggio (inviato) con stringa vuota 
            newMessage      : '',
            // proprietà con stringa vuota utilizzata per la funzione di ricerca chat nella barra laterale
            userFilter      : '',
            // proprietà relativa alla riproduzione del suono invio/ricezione messaggi
            notification    : true,
            // proprietà relativa al dropdown menu 
            dropdownChevron : false,
            // indice dei messaggi inizializzata e utilizzata per consentire l'eliminazione di tutti i messaggi
            // presenti in una conversazione (e nell'array di oggetti *messages* dell'array di oggetti *contacts*)
            messageIndex    : 0,
            // due proprietà utilizzate per animare le icone del dropdown menu
            isHoverDelete   : false,
            isHoverInfo     : false,
        }
    },

    methods: {
        // funzione che serve a richiamare al @click la conversazione sulla barra laterale 
        chatSwap(index){
            this.counter = index;
                console.log('ho cliccato la chat con indice -->', this.counter);
        },
        // questa funzione è relativa all'invio di un nuovo messaggio nella casella
        // di input. si destrutturano alcune keys dell'array originale e riassegnandole
        // alla variabile 'message'.
        // per 'date' e 'time' si recuperano i dati dalla libreria LUXON
        // message viene rimpiazzato dal testo inserito nel campo di input
        // lo status è assegnato di default come 'sent'
        sendNewMessage(){
            const message = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy'),
                time: dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE),
                message: this.newMessage,
                status: 'sent'
            }
            // message viene pushato nell'array originale
            this.contacts[this.counter].messages.push(message);
            // riproduce suono di invio messaggio
            this.notification ? soundMsgSent.play() : null;
            // viene richiamata la funzione sottostante affinchè agisca dopo il push
            this.autoReply();
            // si resetta newMessage in modo che il campo di input venga svuotato
            this.newMessage = '';
            // viene richiamata la funzione di scroll della conversazione
            this.autoScrollChat();
        },
        // questa funzione è relativa alla risposta automatica dopo l'invio di un messaggio
        autoReply() {
            setTimeout(() => {
                const message = {
                    date: dt.now().setLocale('it').toFormat('dd/MM/yyyy'),
                    time: dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE),
                    message: 'Ok',
                    status: 'received'
                }
                this.contacts[this.counter].messages.push(message);
            // riproduce suono di ricezione messaggio
                this.notification ? soundMsgReceived.play() : null;
                // viene richiamata la funzione di scroll della conversazione
                this.autoScrollChat();
                // la risposta automatica avviene dopo 1.5 secondi
            }, 1500);
        },
        // questa funzione fa in modo che quando il riquadro della conversazione attiva risulta
        // "pieno" *scrolli* automaticamente verso il basso
        // è una funzione di setTimeout con un delay di 1 millisecondo dato per evitare un ritardo
        // dato dal .push dei messaggi inviati e ricevuti
        autoScrollChat () {
            setTimeout(() => {
                const chatShowed = document.querySelector('.conversation-showed');
                chatShowed.scrollTop = chatShowed.scrollHeight;
            }, 1);
        },
        //questa funzione si occupa dell'eliminazione di un determinato messaggio
        deleteMessage(i){
            this.contacts[this.counter].messages.splice(i,1)
        },
    },
    // a differenza di methods, computed non accetta parametri perchè lavora solo al variare
    // dei *data*
    computed: {
        // questa funzione, sfruttando il parametro visible (true di default) fa si che se 
        // contact.name .includes caratteri digitati nella variabile userFilter (vuota di default)
        // allora visible è true, altrimenti è false e quindi la chat non viene mostrata
        chatSearch() {
            this.contacts.forEach(contact => {
                contact.visible = contact.name.toLowerCase().includes(this.userFilter.toLowerCase())
            });
            
            return this.contacts.visible;
        }
    }

}).mount('#app');