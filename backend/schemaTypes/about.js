export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'missionstatement',
            title: 'Mission Statement',
            type: 'string'
        },
        {
            name: 'aboutdescription',
            title: 'About Description',
            type: 'array',
            of: [
                    {
                        type: 'block'
                    }
                ]
        },
        {
            name: 'values',
            title: 'Values',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
        }
    ]
}