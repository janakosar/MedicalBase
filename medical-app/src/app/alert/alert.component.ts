/**
 * Created by yana on 28.03.18.
 */
import {Component, OnInit} from '@angular/core';
import {AlertService} from "../services/alert.service";


@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html',})

export class AlertComponent implements OnInit{
  alerts: string[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: string) => {
      if (!alert) {
        this.alerts = [];
        return;
      }

      this.alerts.push(alert);
    });
  }

  removeAlert(alert: string) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

}
