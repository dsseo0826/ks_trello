const cards = [
    {
        id: 'card-1',
        title: 'Learning how to cook',
    },

    {
        id: 'card-2',
        title: 'Making sandwich',
    },
    {
        id: 'card-3',
        title: 'Taking the trash out',
    },
];

const data = {
    lists: {
        'list-1':{
            id: 'list-1',
            title: 'ToDo',
            cards,
        },
        'list-2':{
            id: 'list-2',
            title: 'Doing',
            cards: [],
        },
         'list-3':{
            id: 'list-3',
            title: 'Done',
            cards: [],
        },
    },
    listIds: ['list-1', 'list-2', 'list-3'],
}

    //         cards: [
    //            { 
    //                id: 'card-4',
    //                title: 'cloning trello',
    //            },
    //            { 
    //                id: 'card-5',
    //                title: 'upload video to youtube',
    //            },
    //         ],
    //     },
    // },

    export default data;