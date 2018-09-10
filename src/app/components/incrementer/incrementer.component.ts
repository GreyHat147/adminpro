import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() legend: string = 'Leyenda';
  @Input() progress: number = 50;
  @Output() change: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeValue( value: number ) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
    this.change.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

  onChanges( newValue: number ) {

    this.txtProgress.nativeElement.value = this.progress;
    if (newValue >= 100) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.change.emit(this.progress);
  }
}
