export interface User {
  [x: string]: any;
  _id?: string;
  name?: string;
  email: string;
  password: string;
  biz?: boolean;
}
