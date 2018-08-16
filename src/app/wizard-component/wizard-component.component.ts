import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClrWizard } from '../../../node_modules/@clr/angular';
import { VirtualMachine } from '../virtual-machine';

@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard-component.component.html',
  styleUrls: ['./wizard-component.component.css']
})
export class WizardComponentComponent implements OnInit {

  constructor() { 
    
  }
  
  @ViewChild("wizardlg") wizardLarge: ClrWizard;
  @Input() public openWizard: boolean = false;
  @Input() public vm: VirtualMachine;
  @Input() public title: String = "";
  @ViewChild("wizard") wizard: ClrWizard;
  @ViewChild("number") numberFi: any;

  mdOpen: boolean = false;
  lgOpen: boolean = false;
  xlOpen: boolean = false;

  ngOnInit() {
    
  }

  
  skipStepTwo: boolean = true;
  

  toggleStepTwo() {
      this.skipStepTwo = !this.skipStepTwo;
  }

  open() {
      this.openWizard = !this.open;
  }

}
