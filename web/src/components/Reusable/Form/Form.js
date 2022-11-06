// Imported dependencies
import React, { Fragment } from 'react';
import { useController } from "react-hook-form";
// Imported components
import Warning from '../../../assets/svg/Warning';
import { camalise } from '../../../utils/helpers';
import {
  Button,
  Container,
  ErrorMessage,
  Field,
  Text
} from './FormStyles';

export default function Form({ children, className, bgColor,...props }) {
  return (
    <Container
      className={className}
      style={{ '--sectionBgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))` }}
      {...props}
    >
      {children}
    </Container>
  )
}


Form.Field = function FormField({ 
  children, 
  Element = 'input',
  control,
  type, 
  name, 
  disabled, 
  className,
  value,
  placeholder,
  defaultValue = "",
  rules,
  maxLength,
  options,
}) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
    formState: { errors }
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })
  return (
    <Field
      className={className}
      htmlFor={camalise(name)}
    >
      <Text>{children || name}</Text>
      <Element
        id={camalise(name)}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid || error ? true : false}
        maxLength={maxLength}
        {...inputProps}
      >
        {options?.map(option => 
          <Fragment key={option}>
            <option value="" disabled hidden>Select a location...</option>
            <option value={option}>
              {option}
            </option>
          </Fragment>
        )}
      </Element>
      {error && 
        <ErrorMessage>
          <Warning />
          <Text invalid={error}>{errors[name]?.message}</Text>
        </ErrorMessage>
      }
    </Field>
  )
}

Form.Text = function FormText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Form.Button = function FormButton({ children, className, ...props }) {
  return (<Button className={className} {...props}>{children}</Button>)
}
