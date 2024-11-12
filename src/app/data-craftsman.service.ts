import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Artisans {
  id: string;
  name: string;
  category: string;
  specialty: string;
  location: string;
  note: number;
  top: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataCraftsmanService {
  // Import de l'URL du fichier JSON
  private dataUrl = '../assets/data/datas.json';

  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  // Méthode permettant de récupérer les données du fichier JSON
  getData(): Observable<Artisans[]> {
    return this.http.get<Artisans[]>(this.dataUrl);
  }

  //Filtre les artisans par catégorie
  getByCategory(category: string): Observable<Artisans[]> {
    return this.http
      .get<Artisans[]>(this.dataUrl)
      .pipe(
        map((response) =>
          response.filter((artisan: Artisans) => artisan.category === category)
        )
      );
  }
}
