const {createApp} = Vue;

createApp ({
    data() {
        return {
            contacts: [
                {
                    name: 'Pierdomenico',
                    avatar: 'assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Ciao Pier',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Hai controllato se Bari è un ottimo polo?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '16:15',
                            message: 'Si, ho controllato',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '16:16',
                            message: 'Tutto ok, lo è ancora!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Andrea',
                    avatar: 'assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020',
                            time: '16:30',
                            message: 'Ciao Andrè come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:31',
                            message: 'Bene grazie! Ho appena parcheggiato il calesse',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:35',
                            message: 'Grande, come stanno i cavalli?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:36',
                            message: 'Cosa è un cavallo?',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Emilio',
                    avatar: 'assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020',
                            time: '10:10',
                            message: 'La Sara va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '10:20',
                            message: 'Scusami mi sono perso, dove va la Sara?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            time: '16:09',
                            message: 'In campagna',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Marco M.',
                    avatar: 'assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Ti aspetto a Trani questa estate, mi raccomando',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:34',
                            message: 'Ok Marco, se mi ospiti tu vengo. Promesso!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Gabriele',
                    avatar: 'assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Mi porti una arancina quando arrivi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:35',
                            message: 'No',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Simona',
                    avatar: 'assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Ciao Simo, come va con i vicini "rumorosi"?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:32',
                            message: 'Non me ne parlare...',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Cosimo',
                    avatar: 'assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '17:30',
                            message: 'Ti ricordi di fare gli auguri a Marco Cancelliere che è il suo compleanno?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '17:34',
                            message: 'Grazie per avermelo ricordato, gli scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Marica',
                    avatar: 'assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '14:55',
                            message: 'Ciao Papi, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '14:56',
                            message: 'Dove vuoi andare a mangiarla?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '14:59',
                            message: 'Da Pepe in Grani!! Il mio preferito',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:03',
                            message: 'Ti pareva che non scegli il posto più caro...Va bene dai, ti accontento!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
}).mount('#app');