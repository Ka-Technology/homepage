export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'fname',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'lname',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: Rule=>Rule.email()
        },
        {
            // Throw validation on phone number or no?
            name: 'phonenumber',
            title: 'Phone Number',
            type: 'number',
        },
        {
            name: 'message',
            title: 'Messsage',
            type: 'text',
        }
    ]
}