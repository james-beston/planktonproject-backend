import { GrDocumentText } from 'react-icons/gr'

export default {
  name: 'post',
  title: 'Post',
  icon: GrDocumentText,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value: any, context: any) => context.defaultIsUnique(value, context),
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Body text',
      type: 'content'
    }
  ]
}