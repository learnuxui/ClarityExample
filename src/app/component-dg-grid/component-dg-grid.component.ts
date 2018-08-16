import { Component, OnInit, ViewChild } from '@angular/core';
import {ClrDatagridStringFilterInterface} from "@clr/angular";
import { VirtualMachine } from '../virtual-machine';
import { ClrWizard } from '../../../node_modules/@clr/angular';

class VMNameFilter implements ClrDatagridStringFilterInterface<VirtualMachine> {
    accepts(virtualmachine: VirtualMachine, search: string):boolean {
        return "" + virtualmachine.name == search
            || virtualmachine.name.toLowerCase().indexOf(search) >= 0;
    }
}


@Component({
  selector: 'app-component-dg-grid',
  templateUrl: './component-dg-grid.component.html',
  styleUrls: ['./component-dg-grid.component.css']
})
export class ComponentDgGridComponent implements OnInit {
  vms:VirtualMachine[];
  _open: boolean = false;
  selected:VirtualMachine;
  private vmNameFilter = new VMNameFilter();
  selectedVM:VirtualMachine = null;
  constructor() { 
    this.vms = this.getUserList();
  }

  ngOnInit() {
  }

  onEdit(vm:VirtualMachine) {
    this.selected = vm;
    this._open = !this._open;
  }
  
  onAdd(vms:VirtualMachine[]) {
    // this._open = !this._open;
  }

  onDelete(vm:VirtualMachine) {
    alert("Are you sure want to delete Virtualmachine" + vm.id + " " + vm.name + " ?");
  }

  getStyle(vm, col:string) {
    // snip snip -> fetch the url from somewhere
    if (col === 'STATE') {
      return (vm.state === 'ON' ? 'vm-on' : 'vm-off');
    }
    return 'vm-on';
    
  }

  getValue(vm) {
    return Math.round(vm.HDD/1024/1024/1024) + '-TB';
  }

  getUserList() {
    // DUMMY DATA FOR GRID
    const data = [
      { id:1, name:'VM-1', datastore:'ds-1', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '2000000000', freeHDD: '1000000000' },
      {id:1,name:'VM-2', datastore:'ds-8', CPU:'3 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '3000000000', freeHDD: '1000500000' },
      {id:2,name:'VM-3', datastore:'ds-7', CPU:'1 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '4000000000', freeHDD: '1000000000' },
      {id:3,name:'VM-4', datastore:'ds-6', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '5000000000', freeHDD: '100000000' },
      {id:4,name:'VM-5', datastore:'ds-6', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000000' },
      {id:5,name:'VM-6', datastore:'ds-6', CPU:'2 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '6000000000', freeHDD: '10000000' },
      {id:6,name:'VM-7', datastore:'ds-6', CPU:'2 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '8000000000', freeHDD: '1000000000' },
      {id:7,name:'VM-8', datastore:'ds-6', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '2000000000', freeHDD: '1000000000' },
      {id:8,name:'VM-8', datastore:'ds-5', CPU:'3 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '5000000000', freeHDD: '1000000000' },
      {id:9,name:'VM-10', datastore:'ds-5', CPU:'3 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '6000000000', freeHDD: '1000000000' },
      {id:10,name:'VM-11', datastore:'ds-5', CPU:'3 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '4000000000', freeHDD: '1000000000' },
      {id:11,name:'VM-12', datastore:'ds-5', CPU:'3 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '6000000000', freeHDD: '10000000' },
      {id:12,name:'VM-13', datastore:'ds-5', CPU:'2 GHz', mem: '32cGB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '8000000000', freeHDD: '100000' },
      {id:13,name:'VM-14', datastore:'ds-11', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '9000000000', freeHDD: '100000000' },
      {id:14,name:'VM-15', datastore:'ds-11', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:15,name:'VM-16', datastore:'ds-11', CPU:'2 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000' },
      {id:16,name:'VM-17', datastore:'ds-11', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:17,name:'VM-18', datastore:'ds-11', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000' },
      {id:18,name:'VM-19', datastore:'ds-21', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '100000000' },
      {id:19,name:'VM-20', datastore:'ds-22', CPU:'3 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:20,name:'VM-21', datastore:'ds-22', CPU:'3 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000' },
      {id:21,name:'VM-22', datastore:'ds-22', CPU:'3 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:22,name:'VM-23', datastore:'ds-23', CPU:'3 GHz', mem: '64 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:23,name:'VM-24', datastore:'ds-22', CPU:'3 GHz', mem: '64 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:24,name:'VM-25', datastore:'ds-21', CPU:'3 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:25,name:'VM-26', datastore:'ds-20', CPU:'3 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '100000000' },
      {id:26,name:'VM-27', datastore:'ds-1123', CPU:'2 GHz', mem: '32 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000' },
      {id:27,name:'VM-28', datastore:'ds-144', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:28,name:'VM-29', datastore:'ds-15', CPU:'2 GHz', mem: '32 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '100000000' },
      {id:29,name:'VM-30', datastore:'ds-14', CPU:'2 GHz', mem: '20 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '10000000' },
      {id:20,name:'VM-31', datastore:'ds-13', CPU:'3 GHz', mem: '12 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000' },
      {id:32,name:'VM-32', datastore:'ds-12', CPU:'3 GHz', mem: '22 GB', state: 'OFF', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000000' },
      {id:31,name:'VM-33', datastore:'ds-10', CPU:'3 GHz', mem: '20 GB', state: 'ON', dataprotection: 'on', snapshotSchedule: 'Hourly', HDD: '1000000000', freeHDD: '1000000000' }];
    return data;
  }

}
