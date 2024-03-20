import { Component, OnInit } from '@angular/core';
import { KMeans } from 'src/app/core/models/kmeans';

@Component({
  selector: 'app-k-means',
  templateUrl: './k-means.component.html',
  styleUrls: ['./k-means.component.scss']
})
export class KMeansComponent implements OnInit {

  data = [
    [1, 3], [5, 8], [3, 0]
  ];

  kmeans = new KMeans(2, this.data);

  ngOnInit(): void {
    console.info('KMeans->Centroids', this.kmeans.centroids);
  }

}
