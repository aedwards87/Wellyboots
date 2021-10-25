import { HiOutlineLocationMarker as icon } from 'react-icons/hi'
import svgUploadPreview from 'sanity-plugin-inline-svg';
// import client from 'part:@sanity/base/client'

const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

// Validation as to whether or not the location has a daily routine or late afternoon routine
const verifyInput = ({ type, dailyRoutine, lateAfternoonRoutine }) => {
  const preschoolAndChildminding = type.includes("Pre-school" || "Childminding")
  const afterSchool = type.includes("After school club")
  if (preschoolAndChildminding && !afterSchool) {
    if (!dailyRoutine || dailyRoutine.length < 1) return "No daily routines have been entered"
    if (lateAfternoonRoutine?.length > 0) return "Only daily routines are required, please remove the late afternoon routines"
    return true
  }
  if (!preschoolAndChildminding && afterSchool) {
    if (!lateAfternoonRoutine || lateAfternoonRoutine?.length < 1) return "No late afternoon routines have been entered"
    if (dailyRoutine?.length > 0) return "Only late afternoon routines are required, please remove the daily routines"
  }
  if (preschoolAndChildminding && afterSchool) {
    if ((!lateAfternoonRoutine || lateAfternoonRoutine?.length < 1) && (!dailyRoutine || dailyRoutine?.length < 1)) return "No daily or late afternoon routines have been entered"
    if (!dailyRoutine || dailyRoutine?.length < 1) return "No daily routines have been entered"
    if (!lateAfternoonRoutine || lateAfternoonRoutine?.length < 1) return "No late afternoon routines have been entered"
  }
  return true
}

export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  icon,
  initialValue: async () => ({
    // person: await client.fetch(`//groq
    //   *[_type == "person" && references(^._id)]{
    //     // "_type": "location",
    //     // "person": {
    //       "_ref": _id,
    //       "_type": "reference"
    //     // }
    //   }
    // `),
    geoLocation: await getPosition()
      .then(() => ({
        '_type': 'geopoint',
        'lat': 51.2154239,
        'lng': 0.09911389999999999
      }))
      .catch(error => console.error(error))
  }),
  validation: Rule => Rule.custom(verifyInput),
  fields: [
    {
      name: 'name',
      title: `Name`,
      type: 'string',
      description: 'What is the name of the location',
      options: {
        maxLength: 96
      },
      validation: Rule => Rule.required().max(96)
    },
    {
      name: 'shortName',
      title: `Short name`,
      type: 'string',
      description: 'If the location has a shortened name, please insert here',
      options: {
        maxLength: 96
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A slug is the part of a URL which identifies a particular page on a website',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required().error('A slug is required for this location to have it\'s own page')
    },
    {
      name: 'type',
      title: `Type`,
      type: 'array',
      of: [{type: 'string'}],
      description: 'What type of daycare is performed at this location?',
      options: {
        list: [ 
          { title: 'Pre-school', value: 'Pre-school' },
          { title: 'After school club', value: 'After school club' },
          { title: 'Childminding', value: 'Childminding' },
        ]
      },
      validation: Rule => Rule.required().error('Every location has a type of daycare they perform')
    },
    {
      name: 'introduction',
      title: `Introduction`,
      type: 'bioPortableText',
      description: 'Tell us a bit about the location',
      validation: Rule => Rule.required()
    },
    {
      name: 'subBrandLogo',
      title: 'Sub-brand logo',
      description: 'Upload an SVG File of this locations logo',
      type: 'svgUploadPreview',
    },
    {
      name: 'subBrandColors',
      title: 'Sub-brand colours',
      description: 'Select the two main to be associated with this location',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'brandColors' }]
      }],
      validation: Rule => Rule.required().min(2).max(2)
    },
    {
      name: 'person',
      title: `Staff`,
      description: 'Who is allocated to this location',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'person' }]
        // options: {
        //   filter: ({ document }) => {
        //     let newId = document._id.replace('drafts.', '')
        //     return {
        //       filter: '_type == "person" && $newId == location._ref',
        //       params: { newId }
        //     }
        //   }
        // }
      }],
      validation: Rule => Rule.required().min(1).max(6).unique()
    },
    {
      name: 'dailyRoutine',
      title: `Daily routine (Only if applicable)`,
      description: 'What is the daily routine laid out for this location',
      type: 'array',
      of: [{ type: 'dailyRoutine' }],
    },
    {
      name: 'lateAfternoonRoutine',
      title: `Late afternoon routine (Only if applicable)`,
      description: 'What is the late afternoon routine laid out for this location',
      type: 'array',
      of: [{ type: 'dailyRoutine' }],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'This should be the main image of the location building/exterior',
      type: 'mainImage',
      // options: {
      //   collapsible: true
      // },
      validation: Rule => Rule.required().error('The main image of the location grounds is required')
    },
    // {
    //   name: 'imageGallery',
    //   title: 'Image gallery',
    //   description: 'Select upto a maximum of 10 photos from the image gallery',
    //   type: 'array',
    //   of: [{
    //     type: 'reference',
    //     to: [{ type: 'imageGallery' }],
    //     options: {
    //       filter: ({ document }) => {
    //         let newId = document._id.replace('drafts.', '')
    //         return {
    //           filter: '_type == "imageGallery" && $newId == location._ref',
    //           params: { newId }
    //         }
    //       }
    //       // filterParams: { location: 'Welly boots' }
    //     }
    //   }],
    //   validation: Rule =>
    //     Rule.required()
    //       .min(2)
    //       .max(10)
    //       .unique()
    //       .error('Check quantities, there is a minimum of 2 and maximum of 10 required')
    // },

    {
      name: 'contactDetails',
      title: `Contact Details`,
      type: 'locationContactDetails',
      description: 'Please fill in this locations contact details',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: `Address`,
      type: 'address',
      description: 'Please fill in this locations address details',
      validation: Rule => Rule.required('Every location requires an address')
    },
    {
      name: 'geoLocation',
      title: `Location`,
      type: 'geopoint',
      description: 'Pinpoint this location on the map',
      validation: Rule => Rule.required('Pinpointing the exact location will ensure users of the website find the location without fail')
    },
    {
      name: 'dayAndTime',
      title: 'Open hours',
      type: 'array',
      of: [{ type: 'dayAndTime' }],
      validation: Rule => Rule
        .required()
        .custom(data => {
          if (data !== undefined) {
            const findDuplicate = data
              .map(input => input.day) // This creates an array
              .filter((day, index, array) => array.indexOf(day) !== index)

            let joinDays = findDuplicate.slice(0, findDuplicate.length - 1).join(', ')
            joinDays += ` and  ${findDuplicate[findDuplicate.length - 1]}`

            if (findDuplicate.length > 0) {
              return `There are duplicate days for ${findDuplicate.length === 1 ? findDuplicate : joinDays
                }`
            }

            if (data.length > 0) {
              return true
            }

            return 'It is important for parents to know the times the location starts and finishes'
          }
          return true
        }),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage.image'
    },
    prepare: ({ title, media }) => {
      return {
        title,
        media
      }
    }
  }
}
