const emailValidation = (email, optional) => {
  // Allow value of undefined if set to optional
  if (typeof email === 'undefined' && optional) {
    return true
  }
  // Regex checker for email validation
  const regChecker = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // If email appears to be correct return true
  if (typeof email !== 'undefined' && regChecker.test(email)) {
    return true 
  }
  // This would crash if we didn't check for undefined values 
  // we also check if email is incorrect
  if (typeof email === 'undefined' || !regChecker.test(email)) {
    return "Please enter a valid email address"
  }
}

const numberValidation = (number, optional) => {
  const regChecker = /^\d+$/
  // Allow value of undefined if set to optional
  if (typeof number === 'undefined' && optional) {
    return true
  }
  // If value appears to only contain numbers return true
  if (typeof number !== 'undefined' && regChecker.test(number)) {
    return true 
  }
  // This would crash if we didn't check for undefined values 
  // we also check if value contains letters/spacing
  if (typeof number === 'undefined' || !regChecker.test(number)) {
    return "Please enter a valid contact number! No letters or spaces are allowed"
  }
}

export default {
  name: 'locationContactDetails',
  type: 'object',
  title: 'Contact details',
  fields: [
    {
      name: 'telephoneNumber',
      title: `Telephone number`,
      type: 'string',
      validation: Rule => Rule.custom(number => numberValidation(number, true)).min(9).max(11)
    },
    {
      name: 'mobileNumber',
      title: `Mobile number`,
      type: 'string',
      validation: Rule => Rule.custom(number => numberValidation(number)).required('A contact number of at least one form is required').min(11).max(11)
    },
    {
      name: 'emailAddressOne',
      title: 'Email Address 1',
      type: 'string',
      validation: Rule => Rule.custom(email => emailValidation(email)).required('At least one email address is required')
    },
    {
      name: 'emailAddressTwo',
      title: `Email Address 2`,
      type: 'string',
      description: 'Optional',
      validation: Rule => Rule.custom(email => emailValidation(email, true))
    },
  ]
}
