import { Address } from "./address";

export interface User {
  username: string,
  fullName: string,
  email: string,
  password: string,
  address: Address
}
