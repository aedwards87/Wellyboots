export default {
  name: 'address',
  type: 'object',
  title: 'Address',
  fields: [
    {
      name: 'nameOrNumber',
      title: `Name/Number`,
      type: 'string',
      validation: Rule => Rule.required().max(96)
    },
    {
      name: 'addressLineOne',
      title: `Address line 1`,
      type: 'string',
      validation: Rule => Rule.required().max(96)
    },
    {
      name: 'addressLineTwo',
      title: 'Address line 2',
      type: 'string',
      description: 'Optional'
    },
    {
      name: 'townOrCity',
      title: `Town/City`,
      type: 'string',
      validation: Rule => Rule.required().max(96)
    },
    {
      name: 'county',
      title: 'County',
      type: 'string',
      description: 'Optional'
    },
    {
      name: 'postCode',
      title: 'Post code',
      type: 'string',
      validation: Rule => Rule.required().min(6).max(7)
    }
  ]
}
