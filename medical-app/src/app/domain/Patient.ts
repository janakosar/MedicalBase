import {Sex} from "./Sex";
/**
 * Created by yana on 22.03.18.
 */
export class Patient {

  id: number;
  firstName: string;
  lastName: string;
  birthDate: any;
  sex: Sex;
  country: string;
  state: string;
  address: string;

  comments: Array<Comment>;

  constructor() {}


}
