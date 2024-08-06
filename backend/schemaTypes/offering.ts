export default {
    name: 'offering',
    title: 'Offering',
    type: 'document',
    fields: [
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
            description: 'Description of Offerings',
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
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'Assoication between Services',
        },
    ]
}