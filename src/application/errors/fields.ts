export class RequiredFieldError extends Error {
  constructor (fieldName: string) {
    super(`The field ${fieldName} is required`)
    this.name = 'RequiredFieldError'
  }
}

export class InvalidFieldError extends Error {
  constructor (fieldName: string) {
    super(`The ${fieldName} is invalid`)
    this.name = 'InvalidFieldError'
  }
}

export class FieldsNotMatchError extends Error {
  constructor (fieldName: string) {
    super(`${fieldName} fields do not match`)
    this.name = 'FieldsNotMatchError'
  }
}
