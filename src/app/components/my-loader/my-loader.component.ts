// my-loader.component.ts
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.scss'],
})
export class MyLoaderComponent {
  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(flag => {
      this.loading = flag;
    });
  }
}
