import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpService: HttpClient) { }

  autenticar(user:string,senha:string):Observable<any>{
    return this.httpService.post('http://localhost:3000/user/login',{
      userName: user,
      password: senha
    })
  }
}
