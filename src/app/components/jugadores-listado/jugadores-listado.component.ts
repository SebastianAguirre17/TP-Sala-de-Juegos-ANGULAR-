import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../../services/db.service';

@Component({
    selector: 'app-jugadores-listado',
    templateUrl: './jugadores-listado.component.html',
    styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

    public listadoParaCompartir: Array<any>;

    isLoading: boolean = false;
    listado: any;

    constructor(private dbService: DbServiceService) {

    }

    ngOnInit() {
        this.isLoading = true;
        this.dbService.GetUsers()
            .then(result => {
                this.isLoading = false;
                this.listado = result;
            })
    }

    Traer() {
        this.isLoading = true;
        this.dbService.GetUsers()
            .then(result => {
                this.isLoading = false;
                this.listado = result;
            })
    }
}