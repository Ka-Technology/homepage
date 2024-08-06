export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Service Name',
            type: 'string',
            description: 'Name of the service',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'priority',
            title: 'Priority',
            type: 'number',
            description: 'Priority of the services'
        },
    ]
}