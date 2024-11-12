import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent implements OnInit {
  data: any[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Alimentation')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
