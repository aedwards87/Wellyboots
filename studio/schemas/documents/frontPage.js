export default {
  name: 'frontPage',
  type: 'document',
  title: 'Front page',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Headline',
      description: 'Your unqiue selling point. This will be one of the main focal points when users enter your website'
    },
    {
      name: 'subHeading',
      type: 'string',
      title: 'Sub-headline',
      description: 'A brief description of what you do/offer'
    },
    {
      name: 'primaryCTA',
      type: 'string',
      title: 'Primary call to action',
      description: 'The label for your primary cta button',
      validation: Rule => Rule.min(2).max(20)
    },
    {
      name: 'secondaryCTA',
      type: 'string',
      title: 'Secondary call to action',
      description: 'The label for your secondary cta button',
      validation: Rule => Rule.min(2).max(20)
    },
    {
      name: 'imageGallery',
      title: `Carousel images`,
      description: 'Select upto a maximum of 6 images to display in the carousel',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'imageGallery' }]
      }],
      validation: Rule => Rule.required().min(2).max(6).unique()
    },
    
  ]

}
