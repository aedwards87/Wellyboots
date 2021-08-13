export default {
  name: 'companyLogo',
  type: 'document',
  title: 'Company Logo',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      description: 'Ideally this should be an SVG, if not possible, please use a PNG',
      type: 'mainImage',
      validation: Rule => Rule.required().error('A company needs a logo')
    },
    {
      name: 'mascot',
      title: 'Mascot',
      description: 'Ideally this should be an SVG, if not possible, please use a PNG',
      type: 'mainImage'
    }
  ]
}
