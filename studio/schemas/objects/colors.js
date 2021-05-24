import React from 'react'

export default {
  name: 'colors',
  type: 'object',
  title: 'Colours',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Name',
    },
    {
      type: 'color',
      name: 'color',
      title: 'Color',
    }
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color'
    },
    prepare: ({ title, color }) => {
      return {
        title: title,
        media: <span style={{ background: color.hex, width: '80%', height: '80%' }} />
      }
    }
  }
}
