import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdviceResponse } from '../interfaces/response/advice-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AdviceSlipService {

  private readonly BASE_URL = 'https://api.adviceslip.com/advice';

  constructor( private _httpClient: HttpClient ) { }

  public getRandomAdvice(): Observable<AdviceResponse> {
    return this._httpClient.get<AdviceResponse>(this.BASE_URL);
  }
}
