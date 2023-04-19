import contacts from './db.js'

// suoni di invio/ricezione messaggi
const soundMsgSent = new Audio('assets/sound/message_sent.mp3');
const soundMsgReceived = new Audio('assets/sound/message_received.mp3');

//inizializzazione di Luxon
const dt = luxon.DateTime;

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts,
            counter: 0,
            newMessage: '',
            userFilter: '',
        }
    },

    methods: {
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
            soundMsgSent.play();
            // viene richiamata la funzione sottostante affinchè agisca dopo il push
            this.autoReply();
            // si resetta newMessage in modo che il campo di input venga svuotato
            this.newMessage = '';
        },
        // questa funzione è relativa alla risposta automatica dopo l'invio di un messaggio
        // 
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
                soundMsgReceived.play();
                // la risposta automatica avviene dopo 3 secondi
            }, 1500);
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

            return this.contacts.visible
        }
    }

}).mount('#app');