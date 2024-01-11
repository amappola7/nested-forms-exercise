import { Address } from "./address";

export interface User {
  username: string,
  firstName: string,
  secondName: string,
  surName: string,
  secondSurname: string,
  email: string,
  password: string,
  address: Address
}
