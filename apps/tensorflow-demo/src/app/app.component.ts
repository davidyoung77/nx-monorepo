import { Component } from '@angular/core';
import { TensorflowService } from './../../../../libs/tensorflow/src/lib/tensorflow.service';

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _tensorflowService: TensorflowService) {
    this._tensorflowService.run();
  }
}
