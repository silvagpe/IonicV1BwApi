import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario-service/usuario-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public usuarioService: UsuarioService,
    public navCtrl: NavController
  ) {

  }

  onLogin(): void {

    console.log("adasd sa as");
    this.usuarioService.validarLogin("silva")
      .then((result : any) => {
        console.log("onLogin sucesso:", result);

        alert(result.existe);
      })
      .catch(err => {
        console.log("onLogin error: ", err);
      });
  }

}
