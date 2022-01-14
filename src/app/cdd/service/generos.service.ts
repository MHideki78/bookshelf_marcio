import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Generos } from '../modelos/generos';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

    private readonly urlAPI='/assets/generos.json';

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {

    return this.clienteDados.get<Generos[]>(this.urlAPI)
    .pipe(
      delay(3000)
    )
  }
}
