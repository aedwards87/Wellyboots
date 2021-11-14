export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Bio portable text',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'string',
              }
            ]
          }
        ]
      }
    }
  ]
}
