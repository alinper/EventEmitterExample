import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
  }

  firstComponentFunction(name:string){
    this.eventEmitterService.onFirstComponentButtonClick(name);
  }
}


