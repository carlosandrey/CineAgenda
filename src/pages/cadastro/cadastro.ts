import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ProgramacaoPage } from './../programacao/programacao';

@IonicPage()
@Component({

  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private url:string = "http://localhost:3000/filmes";

  public filme = {

    filme: "",  
		tipo: "",  
		horario:"",  
		local:"",  
		data:""
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public toastCtrl: ToastController) {
  }

  Cadastro(filme){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, filme, options)
            .map(res => res.json())
            .subscribe(data => {
              const toast = this.toastCtrl.create({
                message: 'cadastrado com Sucesso!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();
              this.navCtrl.push(ProgramacaoPage);
            });

      filme.filme = "";
      filme.tipo = "";
      filme.data = "";
      filme.local = "";
      filme.horario = "";

  }

}
