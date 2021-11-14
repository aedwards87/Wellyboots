// Imported dependencies
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
// Imported components
import Form from './Form'
// Imported helpers
import pattern from '../../../data/patterns';


// The component
export const FormIndex = ({ 
  subjectValue = 'Contact', 
  color,
  options,
  ...props
}) => {
  const { 
    handleSubmit, 
    control, 
    // formState: { isDirty, isValid },
    // setFocus
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => console.log(data);
  
  // useEffect(() => {
  //   setFocus("First name");
  // }, [setFocus])

  return (
    <Form onSubmit={handleSubmit(onSubmit)} {...props}>
      <div>
        <Form.Field
          Element="input"
          name="First name"
          control={control}
          rules={{
            required: "Please enter your first name",
            pattern: {
              value: pattern.name,
              message: "Numbers and certain special chracters are not allowed"
            },
          }}
          maxLength={32}
        />
        <Form.Field 
          Element="input"
          name="Last name"
          control={control}
          rules={{
            required: "Please enter your last name",
            pattern: {
              value: pattern.name,
              message: "Numbers and certain special chracters are not allowed"
            },
          }}
          maxLength={99}
        />
      </div>
      <div>
        <Form.Field 
          Element="input"
          type="email"
          name="Email"
          control={control}
          rules={{
            required: "Please enter your email address",
            pattern: {
              value: pattern.email,
              message: "Please enter a valid email address"
            },
          }}
          maxLength={320}
        />
        {subjectValue === 'Contact' && 
          <Form.Field 
            Element="input"
            name="Subject"
            control={control}
            rules={{ required: "Please enter a subject" }}
            maxLength={99}
          />
        }
        {subjectValue === 'Booking' && 
          <Form.Field 
            Element="select"
            name="Location"
            control={control}
            options={options}
            rules={{ required: "Please select a location" }}
          />
        }
      </div>

      <Form.Field 
        Element="textarea"
        htmlFor="message"
        name="Message"
        control={control}
        rules={{ 
          required: "Please enter a message or question" 
        }}
      />
      
      <Form.Button 
        model={1}
        color={color}
        type="submit" 
        children="Submit"
        // disabled={!isDirty || !isValid}
      />

    </Form>
  )
}

export default FormIndex