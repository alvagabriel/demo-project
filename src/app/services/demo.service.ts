import { Injectable } from '@angular/core';
import { AreaUnitChartOfAccount } from '../models/area-unit-chart-of-account';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getAreaUnitChartOfAccount(): AreaUnitChartOfAccount[] {
    const list: AreaUnitChartOfAccount[] = [
      {
        id: '1',
        isPayroll: true,
        operationalUnitName: 'Unit One',
        jobName: 'Manager',
        areaUnitName: 'Sales',
        costCodeName: 'Code 101',
        costTypeName: 'Type A',
        areaUnitId: 'AU001',
        chartOfAccountId: 'CA001',
        chartOfAccountName: 'Account One'
      },
      {
        id: '2',
        isPayroll: false,
        operationalUnitName: 'Unit Two',
        jobName: 'Supervisor',
        areaUnitName: 'Marketing',
        costCodeName: 'Code 102',
        costTypeName: 'Type B',
        areaUnitId: 'AU002',
        chartOfAccountId: 'CA002',
        chartOfAccountName: 'Account Two'
      }
    ];

    return list;
  }
}
