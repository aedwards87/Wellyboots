import { RiStarSmileLine as icon } from 'react-icons/ri'

export default {
  name: 'feedback',
  type: 'document',
  title: 'Feedback',
  icon,
  __experimental_actions: [ 'update', 'create',  'delete', 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'feedback',
      type: 'bioPortableText',
      title: 'Feedback',
      description: 'Please try to avoid too many line breaks. (350 character count)',
      validation: Rule => Rule.required().custom(feedback => {
        // Map through obtain the feedback content
        const length = feedback.map(a => a.children.map(b => b.text)).map(c => c[0].length).reduce((a,b) => a + b)

        // If there is feedback and within 400 character return true
        if (typeof feedback !== 'undefined' && length <= 350) {
          return true 
        }

        // If there is feedback and within 400 character return warning
        if (typeof feedback !== 'undefined' && length > 350) {
          return 'A maximum of 400 characters is only allowed' 
        }

        // This would crash if we didn't check for undefined values 
        if (typeof feedback === 'undefined') {
          return 'Please paste in a desired feedback'
        }
        return true
      })
    }
  ]
}
