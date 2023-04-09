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
      name: 'group',
      title: 'Group',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Phytoplankton', value: 'phytoplankton' },
          { title: 'Zooplankton', value: 'zooplankton' },
          { title: 'Other', value: 'other' },
        ]
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