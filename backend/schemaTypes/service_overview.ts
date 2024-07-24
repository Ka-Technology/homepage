export default {
    name: 'service_overview',
    title: 'Service Overview',
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
            description: 'One line description',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'priority',
            title: 'Priority',
            type: 'number',
            description: 'Priority of the services'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'For the rate page (for later)',
            options: {
                source: 'title',
                maxLength: 96
            },
        },
    ]
}