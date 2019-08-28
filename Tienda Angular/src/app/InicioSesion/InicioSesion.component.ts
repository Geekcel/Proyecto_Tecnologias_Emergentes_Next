import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-InicioSesion',

  templateUrl: './InicioSesion.component.html',

  styleUrls: ['./InicioSesion.component.css']
})


export class InicioSesionComponent implements OnInit {
  errorInicioSesion:boolean = false;
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }


  
  InicioSesion(email, password) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(()=>{
        this.router.navigateByUrl('/Inicio');
      })
      .catch((error) => {
        this.errorInicioSesion = true;
      })
  }

}
