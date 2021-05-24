export default {
  name: 'brand',
  type: 'document',
  title: 'Brand',
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
      type: 'color',
      name: 'colorYellow',
      title: 'Yellow brand color',
    },
    {
      type: 'color',
      name: 'colorDarkPink',
      title: 'Dark pink brand colour',
    },
    {
      type: 'color',
      name: 'colorDarkBlue',
      title: 'Dark blue brand colour',
    },
    {
      type: 'color',
      name: 'colorDarkGreen',
      title: 'Dark green brand color',
    },
    {
      type: 'color',
      name: 'colorPurple',
      title: 'Purple brand color',
    },
    {
      type: 'color',
      name: 'colorPink',
      title: 'Pink brand color',
    },
    {
      type: 'color',
      name: 'colorBlue',
      title: 'Blue brand color',
    },
    {
      type: 'color',
      name: 'colorGreen',
      title: 'Green brand color',
    },
    {
      type: 'color',
      name: 'colorDarkPurple',
      title: 'Dark Purple brand color',
    },
    {
      type: 'color',
      name: 'colorOrange',
      title: 'Orange brand color',
    },
  ]
}
