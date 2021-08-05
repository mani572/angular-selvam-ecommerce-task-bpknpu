import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
 import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.component.html',
  styleUrls: ['./cartmodal.component.css'],
    animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .9, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.9, .14, .0)' }))
      ])
    ])
  ]
 
})
export class CartmodalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}