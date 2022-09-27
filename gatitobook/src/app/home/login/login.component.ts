import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = ""
password = "";
  constructor(private autenticarService: AutenticacaoService) { }

  ngOnInit(): void {
  }
login(){
  this.autenticarService.autenticar(this.user,this.password).subscribe(()=>{
    console.log("Autenticado com sucesso.")
  },(error) => {
    alert("Usuario ou senha invalido")
    console.log(error)
  });
}
}
