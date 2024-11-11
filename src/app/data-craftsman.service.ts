import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataCraftsmanService {
  // Import de l'URL du fichier JSON
  private dataUrl = '../assets/data/datas.json';

  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  // Méthode permettant de récupérer les données du fichier JSON
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
