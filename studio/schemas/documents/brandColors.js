import { AiOutlineBgColors as icon } from 'react-icons/Ai'
import React from 'react'

export default {
  name: 'brandColors',
  type: 'document',
  title: 'Brand colours',
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
