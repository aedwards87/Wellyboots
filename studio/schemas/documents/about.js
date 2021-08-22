export default {
  name: 'about',
  type: 'document',
  title: 'About us',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'bioPortableText',
      description: 'Who you are. What matters to you. What you do. How you do it.',
      validation: Rule => Rule.required()
    },
    {
      name: 'ourMissionStatement',
      title: 'Our mission statement',
      type: 'bioPortableText',
      description: 'What is your mission statement?',
      validation: Rule => Rule.required()
    },
    {
      name: 'ourAim',
      title: 'Our aims',
      type: 'bioPortableText',
      description: 'What are you aims?',
      validation: Rule => Rule.required()
    },
    {
      name: 'frontPageDescription',
      title: 'Front page excerpt',
      type: 'bioPortableText',
      description: 'A short extract from the main about us description to be display on the front page',
      validation: Rule => Rule.required()
    },
    {
      name: 'accreditations',
      type: 'array',
      description: 'Any logos your company is accredited to',
      of: [{ type: 'imageModal' }],
      validation: Rule => Rule.required().min(1).unique()
    },
    {
      name: 'aboutOwner',
      type: 'aboutOwner',
      title: 'About the owner',
      validation: Rule => Rule.required()
    }
  ]
}
