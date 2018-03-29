import {OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
/**
 * Created by yana on 29.03.18.
 */
export class LifecycleComponent implements OnInit, OnDestroy{

  public subscription: Subscription;

  constructor(){}

  ngOnInit(){}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
