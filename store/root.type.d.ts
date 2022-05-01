interface SetFieldAction {
  field: string
  value: any
}

interface ValidateFormAction {
  field?: string
}

interface RequestInterface {
  pending: boolean
  failed: boolean
  suceeded: boolean
  [key: string]: any
}