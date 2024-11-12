import { Component, OnInit } from '@angular/core';
import { DataCraftsmanService } from '../data-craftsman.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  data: any[] = [];

  constructor(private dataCraftsmanService: DataCraftsmanService) {}

  ngOnInit(): void {
    this.dataCraftsmanService
      .getByCategory('Services')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
