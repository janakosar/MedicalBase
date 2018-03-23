import {Sex} from "./Sex";
/**
 * Created by yana on 22.03.18.
 */
export class Patient {

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _birthDate: any;
  private _sex: Sex;
  private _country: string;
  private _state: string;
  private _address: string;

  private _comments: Array<Comment>;

  constructor() {}

  constructor(firstName: string,
              lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get birthDate(): any {
    return this._birthDate;
  }

  set birthDate(value: any) {
    this._birthDate = value;
  }

  get sex(): Sex {
    return this._sex;
  }

  set sex(value: Sex) {
    this._sex = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }


  get comments(): Array<Comment> {
    return this._comments;
  }

  set comments(value: Array<Comment>) {
    this._comments = value;
  }
}
