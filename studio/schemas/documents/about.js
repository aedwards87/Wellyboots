export default {
  name: 'about',
  type: 'document',
  title: 'About us',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'bioPortableText',
      description: 'Who you are. What matters to you. What you do. How you do it.'
    },
    {
      name: 'ourMissionStatement',
      title: 'Our mission statement',
      type: 'bioPortableText',
      description: 'What is your mission statement?'
    },
    {
      name: 'ourAim',
      title: 'Our aims',
      type: 'bioPortableText',
      description: 'What are you aims?'
    },
    {
      name: 'aboutOwner',
      type: 'aboutOwner',
      title: 'About the owner'
    }
  ]
}
