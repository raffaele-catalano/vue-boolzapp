import contacts from './db.js'

//inizializzazione di Luxon
const dt = luxon.DateTime;

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts,
            counter: 0,
            
            dateTime: null
        }
    },

    methods: {
        chatSwap(index){
            this.counter = index;
                console.log('ho cliccato la chat con indice -->', this.counter);
        },
    },

    mounted () {

    }
}).mount('#app');