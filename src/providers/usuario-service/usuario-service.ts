import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';

@Injectable()
export class UsuarioService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  validarLogin(login : string): Promise<boolean> {

    let url: string = this.urlBase + "/whatz/retornarUsuarioExiste";
    //let data: any = { login: "silva" };
    let data: any = { login: login };

    let opts = this.prepareHeaderWtzApp();

    return new Promise((resolve, reject) => {
      this.http.post(url, data, opts)
        .subscribe((res : any) => {
          resolve(res.registros[0]);
        },
        this.handlePromiseError);
    });

  }

}
