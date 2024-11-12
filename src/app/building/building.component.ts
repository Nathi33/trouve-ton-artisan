import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss',
})
export class BuildingComponent implements OnInit {
  data: any[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Bâtiment')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
