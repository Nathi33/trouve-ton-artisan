import { Component, Input } from '@angular/core';

export interface Artisans {
  id: string;
  name: string;
  category: string;
  specialty: string;
  location: string;
  note: number;
  top: boolean;
}

@Component({
  selector: 'app-craftman-card-type',
  templateUrl: './craftman-card-type.component.html',
  styleUrl: './craftman-card-type.component.scss',
})
export class CraftmanCardTypeComponent {
  @Input() artisan!: Artisans;
  @Input() index!: number;
}
