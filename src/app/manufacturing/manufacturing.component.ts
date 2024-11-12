import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss',
})
export class ManufacturingComponent implements OnInit {
  data: any[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Fabrication')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
