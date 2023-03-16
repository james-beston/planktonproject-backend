export default {
  name: 'component',
  title: 'Component',
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
      name: 'species',
      title: 'Species',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'species'}
          ]
        }
      ]
    }
  ]
}