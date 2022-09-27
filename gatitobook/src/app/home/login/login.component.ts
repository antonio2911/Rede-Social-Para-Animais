import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = ""
password = "";
  constructor(private autenticarService: AutenticacaoService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.autenticarService.autenticar(this.user,this.password).subscribe(()=>{
    this.router.navigate(['animais'])
  },(error) => {
    alert("Usuario ou senha invalido")
    console.log(error)
  });
}
}
