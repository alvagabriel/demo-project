import { Component, OnInit } from '@angular/core';
import { AreaUnitChartOfAccount } from '../models/area-unit-chart-of-account';
import { DemoService } from '../services/demo.service';
import { Requisition } from '../models/requisition';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit {
  areaUnitChartOfAccounts: AreaUnitChartOfAccount[] = [];
  requisitions: Requisition[] = [];

  constructor(private demoService: DemoService) {

  }
  ngOnInit(): void {
    this.areaUnitChartOfAccounts = this.demoService.getAreaUnitChartOfAccount();
    console.log(this.areaUnitChartOfAccounts);
  }
}
