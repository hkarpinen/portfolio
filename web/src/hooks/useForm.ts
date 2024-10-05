import {ChangeEvent, FormEvent, useState} from "react";

export interface UseFormParams<T> {
  initialState: T,
  validators: UseFormValidators<T>
  onSuccess: (formData: T) => void
}

export type UseFormErrors<T> = {
  [K in keyof T]: boolean
}

export type UseFormValidators<T> = {
  [K in keyof T]: (value: T[K]) => boolean
}

function useForm<T extends object>({ initialState, validators, onSuccess }: UseFormParams<T>) {
  const [formData, setFormData] = useState<T>(initialState)
  const [formErrors, setFormErrors] = useState<UseFormErrors<T>>()

  const validateField = (fieldName: keyof T, value: T[keyof T]): boolean => {
    const validator = validators[fieldName]
    console.log(validator(value))

    return  validator ? validator(value) : true
  }

  const validateForm = (): boolean => {
    let hasErrors = false;
    const newErrors = {} as UseFormErrors<T>;

    (Object.keys(formData) as Array<keyof T>).forEach((fieldName) => {
      const fieldValue = formData[fieldName];
      const errorMessage = validateField(fieldName, fieldValue);
      newErrors[fieldName] = errorMessage;
      if (errorMessage) hasErrors = true;
    });

    setFormErrors(newErrors);
    return !hasErrors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    if(form.checkValidity()) {
      if(validateForm()) {
        onSuccess(formData)
      }
    }
  }

  return {
    formData,
    formErrors,
    handleChange,
    handleSubmit
  }
}

export default useForm;
