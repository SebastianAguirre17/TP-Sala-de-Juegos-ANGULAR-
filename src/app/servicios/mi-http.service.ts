import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MiHttpService {

    constructor(public http: HttpClient) { }

    public httpGetPromise(url: string, objeto: any) {


        return this.http
            .get(url)
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handleError);
    }

    private extraerDatos(resp: Response) {

        return resp.json() || {};

    }
    private handleError(error: Response | any) {

        return error;
    }

}
