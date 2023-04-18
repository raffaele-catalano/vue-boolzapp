import contacts from './db.js'

//inizializzazione di Luxon
const dt = luxon.DateTime;

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts,
            counter: 0,
            newMessage: '',
        }
    },

    methods: {
        chatSwap(index){
            this.counter = index;
                console.log('ho cliccato la chat con indice -->', this.counter);
        },

        sendNewMessage(){
            const message = {
                time: dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE),
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.counter].messages.push(message);
            this.newMessage = ''
        }
    },

    mounted () {
        console.log(this.sendNewMessage);
    }
}).mount('#app');