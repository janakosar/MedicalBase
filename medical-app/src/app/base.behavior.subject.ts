/**
 * Created by yana on 29.03.18.
 */
import {BehaviorSubject, Subscription} from "rxjs";

export abstract class BaseBehaviorSubject<T> {

  subject: BehaviorSubject<T[]> = new BehaviorSubject([]);

  constructor() {}

  subscribe(next?: (value: T[]) => void): Subscription {
    return this.subject.subscribe(next)
  }

  notifySubjectChanged(items: T[]) {
    this.subject.next(items);
  }

  add(item: T) {

    if (!item) {
      return
    }

    let currentValue: T[] = this.subject.getValue();
    currentValue.push(item);
    this.subject.next(currentValue);
  }

  remove(item: T) {
    let currentValue: T[] = this.subject.getValue();

    let positionInTheList = this.findIndexOf(item, currentValue);

    if (positionInTheList > -1) {
      currentValue.splice(positionInTheList, 1);
    }

    this.notifySubjectChanged(currentValue);
  }

  replace(item: T) {

    if (!item) {
      return
    }

    let currentValue: T[] = this.subject.getValue();

    let positionInTheList = this.findIndexOf(item, currentValue);

    if (positionInTheList > -1) {
      currentValue[positionInTheList] = item;
    }

    this.notifySubjectChanged(currentValue);

  }

  private findIndexOf(item: T, items: T[]): number {
    let positionInTheList = -1;

    items.forEach((element, index) => {
      if (this.equal(item, element)) {
        positionInTheList = index;
        return
      }
    });

    return positionInTheList;
  }

  abstract equal(item1:T, item2: T): boolean
}
