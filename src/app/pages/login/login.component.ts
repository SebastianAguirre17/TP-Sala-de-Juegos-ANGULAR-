import { NewAuthService } from './../../services/new-auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/app.models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../assets//css/main.css', '../assets/css/util.css']
})
export class LoginComponent implements OnInit {
    usuario: UsuarioModel = new UsuarioModel();
    recordarme = false;

    constructor(private authSrv: NewAuthService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    }

    async onLogin(formulario: NgForm) {
        if (formulario.invalid) return;

        const { email, password } = formulario.value;

        try {
            const user = await this.authSrv.login(email, password);
            
            if (user) {
                Swal.close();
                this.router.navigateByUrl('Principal')
            }
        }
        catch (err) {
            console.log( 'Login', err);
        }
    }

    cargarAdmin() {
        this.usuario.email = 'invitado@invitado.com';
        this.usuario.password = '22222222';
    }
}
