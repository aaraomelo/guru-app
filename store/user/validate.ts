import {
  email,
  minLength,
  required,
} from "../validations"

export function validate({ field, value }: any) {
  let messages = []
  switch (field) {
    case "name":
      !required(value.toString()) && messages.push("É necessário informar um nome")
      return [...messages]
    case "email":
      !required(value.toString()) && messages.push("É necessário informar um e-mail")
      !email(value.toString()) && messages.push("Informe um e-mail válido")
    case "password":
      const minlength = 6;
      !required(value.toString()) && messages.push("É necessário informar uma senha")
      !minLength(value.toString(), minlength) && messages.push(`Mínimo de ${minlength} caracteres`)
      return [...messages]
    default:
      return []
  }
}
