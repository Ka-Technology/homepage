export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },
        {
            name: 'message',
            title: 'Messsage',
            type: 'text',
        }
    ]
}