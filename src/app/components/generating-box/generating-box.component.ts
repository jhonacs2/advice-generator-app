import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdviceSlipService } from '../../services/advice-slip.service';
import { first } from 'rxjs';
import { Slip } from '../../interfaces/response/advice-response.interface';

@Component({
  selector: 'ag-generating-box',
  templateUrl: './generating-box.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GeneratingBoxComponent implements OnInit {

  public randomAdvice: Slip;

  constructor( private _adviceSlipService: AdviceSlipService ) {
    this.randomAdvice = {
      id: 0,
      advice: ''
    };
  }

  ngOnInit(): void {
    this.getRandomAdvice();
  }

  public getRandomAdvice(): void {
    this._adviceSlipService
      .getRandomAdvice()
      .pipe(first())
      .subscribe(adviceResponse => this.randomAdvice = adviceResponse.slip);
  }
}
