export default {
  name: 'species-data',
  title: 'Species Data',
  type: 'object',
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
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'text',
      title: 'Body text',
      type: 'content'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file'
    },
    {
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
}