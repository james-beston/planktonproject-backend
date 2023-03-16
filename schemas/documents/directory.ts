export default {
  name: 'directory',
  title: 'Directory',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'groups',
      title: 'Trophic Groups',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'group'}
          ]
        }
      ]
    }
  ]
}