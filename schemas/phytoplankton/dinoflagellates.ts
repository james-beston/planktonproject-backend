export default {
  name: 'dinoflagellates',
  title: 'Dinoflagellates',
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
      name: 'data',
      title: 'Data',
      type: 'species-data'
    },
  ]
}