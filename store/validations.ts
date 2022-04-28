export function minLength(value: string, length: number) {
  if (value === "") return true;
  return value.length >= length;
}

export function email(value: string) {
  if (value === "") return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function required(value: string) {
  return !!(value.length)
}

export const haveMessages = (validations: any) =>
  Object.keys(validations)
    .map((field) => validations[field].length === 0)
    .reduce((acc, next) => acc && next);

export function validateModel(model: any, validations: any, validate: any, field?: any) {
  if (field) {
    return {
      ...validations,
      [field]: [...validate({ field, value: model[field] })]
    }
  } else {
    let validationsCopy = {
      ...validations
    }
    Object.keys(model).forEach((fieldModel: string) =>
      validationsCopy[fieldModel] = validate({ field: fieldModel, value: model[fieldModel] })
    );
    return validationsCopy
  }
}
