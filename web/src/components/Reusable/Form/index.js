// Imported dependencies
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Imported components
import Form from './Form';
// Imported helpers
import pattern from '../../../data/patterns';


// The component
export const FormIndex = ({ 
  category = 'Contact us', 
  fieldColor = 'Purple',
  options,
  ...props
}) => {
  const { 
    handleSubmit, 
    control, 
    // formState: { isDirty, isValid },
    setFocus
  } = useForm({ mode: 'onBlur' });
  const onSubmit = data => console.log(data);
  
  useEffect(() => {
    setFocus("First name");
  }, [setFocus])

  return ( 
    <Form
      name={category}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      fieldColor={fieldColor} 
      onSubmit="submit" 
      {...props}
    >
      <input type="hidden" name="wellyboots-form" value={category} />
      <input type="hidden" name="bot-field" />

      <div>
        <Form.Field
          Element="input"
          name="First name"
          control={control}
          tabindex="0"
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
        {category === 'Contact us' && 
          <Form.Field 
            Element="input"
            name="Subject"
            control={control}
            rules={{ required: "Please enter a subject" }}
            maxLength={99}
          />
        }
        {category === 'Book a visit' && 
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
        color={category}
        type="submit" 
        children="Submit"
        // disabled={!isDirty || !isValid}
      />

    </Form>
  )
}

export default FormIndex