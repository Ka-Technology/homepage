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
            type: 'array',
            of: [
              {
                type: 'block',
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Numbered', value: 'number'}
                  ]  
              }
            ]
        },
        {
            name: 'priority',
            title: 'Priority',
            type: 'number',
            description: 'Priority of the services'
        },
    ]
}