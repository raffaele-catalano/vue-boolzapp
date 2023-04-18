import contacts from './db.js'

const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts,
            clickedChat: 0,
        }
    },

    methods: {
        chatSwap(i){
            this.clickedChat = i;
        }
    }
}).mount('#app');