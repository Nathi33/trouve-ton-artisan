import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

// OnInit est une interface qui définit une méthode 'ngOnInit' qui est appelée lors de l'initialisation d'un composant
export class HomeComponent implements OnInit {
  // Déclaration d'une variable data qui est un tableau pouvant stocker des éléments de n'importe quel type
  // Cette variable stockera les données récupérées par le service DataCraftsmanService
  data: any[] = [];

  // Injection du service DataCraftsmanService
  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Appel de la méthode getData du service DataCraftsmanService
    this.dataCraftsmanService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  // Conversion de la note en étoiles
  getStars(note: number): string[] {
    // Détermination du nombre d'étoiles pleines, vides et à moitié
    const fullStars = Math.floor(note); // Permet de déterminer le nombre d'étoiles pleines
    const halfStar = note % 1 !== 0; // Si la note n'est pas entière alors cette variable passe à 'true' et on ajoute une demi-étoile
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Les étolies vides complètes la note jusqu'à 5 et son nombre ser a déduit si présence d'une demi-étoile
    //Création du tableau d'étoiles
    return [
      ...Array(fullStars).fill('full'),
      ...(halfStar ? ['half'] : []),
      ...Array(emptyStars).fill('empty'),
    ];
  }
}
