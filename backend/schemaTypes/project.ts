export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'Title of the project'
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Subtitle of the project'
        },
        {
            name: 'startdate',
            title: 'Start Date',
            type: 'date',
            description: 'Start Date of the project'
        },
        {
            name: 'enddate',
            title: 'End Date',
            type: 'date',
            description: 'End Date of the project'
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
            name: 'topics',
            title: 'Topics',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'description',
            title: 'Description',
            description: 'Description of the project (Shift + Enter for new paragraph)',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of : [
                {
                    type: 'url'
                }
            ]
        },
        {
            name: 'linksname',
            title: 'Links Name',
            type: 'array',
            description: 'Name of the links (Make sure you put them the order of the links above)',
            of : [
                {
                    type: 'string'
                }
            ]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
    ]
}