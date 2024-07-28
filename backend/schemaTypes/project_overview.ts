export default {
    name: 'project_overview',
    title: 'Project Overview',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Project Description',
            type: 'array',
            of: [
                {
                    type: 'block',
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ]
                }
            ]
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }
    ]
}