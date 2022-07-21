import { EmailValidation, EqualsValidation, MinLengthValidation, RequiredStringValidation, ValidationBuilder } from '@/application/validation'

describe('ValidationBuilder', () => {
  it('should return a RequiredStringValidator', () => {
    const validators = ValidationBuilder
      .of({ value: 'any_value', fieldName: 'any_name' })
      .required()
      .build()

    expect(validators).toEqual([new RequiredStringValidation('any_value', 'any_name')])
  })

  it('should return a MinLengthValidation', () => {
    const validators = ValidationBuilder
      .of({ value: 'any_value', fieldName: 'any_name' })
      .min(10)
      .build()

    expect(validators).toEqual([new MinLengthValidation('any_value', 'any_name', 10)])
  })

  it('should return a EmailValidation', () => {
    const validators = ValidationBuilder
      .of({ value: 'any_invalid_email', fieldName: 'email' })
      .email()
      .build()

    expect(validators).toEqual([new EmailValidation('any_invalid_email')])
  })

  it('should return a EqualsValidation', () => {
    const validators = ValidationBuilder
      .of({ value: 'any_value', fieldName: 'any_name' })
      .equals('other_any_value')
      .build()

    expect(validators).toEqual([new EqualsValidation('any_name', 'any_value', 'other_any_value')])
  })
})
