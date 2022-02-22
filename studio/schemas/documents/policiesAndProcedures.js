import { GrSecure as icon } from 'react-icons/gr'

export default {
  name: 'policiesAndProcedures',
  type: 'document',
  title: 'Policies & procedures',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A slug is the part of a URL which identifies a particular page on a website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required().error('A slug is required for this document to have it\'s own page')
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    },
  ]
}
