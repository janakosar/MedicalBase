/**
 * Created by yana on 23.03.18.
 */
export class Comment{

  private _id: number;
  private _createdDate: Date;
  private _text: string;

  constructor() {
  }

  constructor(createdDate: Date, text: string) {
    this._createdDate = createdDate;
    this._text = text;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
