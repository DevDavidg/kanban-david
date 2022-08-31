import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum colors {
  RED = "linear-gradient(90deg, rgba(159,0,156,1) 0%, rgba(239,0,255,1) 50%, rgba(239,0,255,1) 100%)",
  GREEN = "linear-gradient(90deg, rgba(255,89,0,1) 0%, rgba(255,149,0,1) 50%, rgba(255,164,4,1) 100%)",
  BLUE = "linear-gradient(90deg, rgba(0,78,255,1) 0%, rgba(0,129,255,1) 50%, rgba(4,182,255,1) 100%)",
  VIOLET = "linear-gradient(90deg, rgba(0,206,255,1) 0%, rgba(0,215,255,1) 50%, rgba(4,255,197,1) 100%)",
  YELLOW = "linear-gradient(90deg, rgba(116,255,0,1) 0%, rgba(0,255,4,1) 50%, rgba(4,255,147,1) 100%)",
  PINK = "linear-gradient(90deg, rgba(222,0,255,1) 0%, rgba(255,0,189,1) 50%, rgba(255,4,140,1) 100%)"
}

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {
  @Output() emitColor: EventEmitter<string> = new EventEmitter();

  colorsData = Object.values(colors)

  constructor() { }

  ngOnInit(): void {
  }

  onColorEmit(color: string) {
    this.emitColor.emit(color);
  }
}
