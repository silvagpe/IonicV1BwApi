import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


const extractError = (error: Response | any): string => {

  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.log("BaseService -> extractError:", errMsg);

  return errMsg;
}

export abstract class BaseService {

  protected urlBase : string = "http://192.168.0.129/BWApiZortea/";

  protected prepareHeader(user: string, pass : string):any{

    let pwd = btoa(user+':'+pass);
    let reqOpts = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic '+ pwd
      }
    };

    return reqOpts
  }

  protected prepareHeaderWtzApp():any{

    let pwd = btoa('wtzAPP:8F77C395');

    let reqOpts = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic '+ pwd
      }
    };

    return reqOpts
  }



  protected handlePromiseError(error: Response | any): Promise<any> {
    return Promise.reject(extractError(error));
  }

  protected handleObservableError(error: Response | any): Observable<any> {
    return Observable.throw(extractError(error));
  }

}
