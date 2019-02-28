import {Component, OnInit} from '@angular/core';
import {W3Service} from '../../shared/services/w3.service';

@Component({
  selector: 'we-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private w3: W3Service) {
  }

  ngOnInit() {
    this.w3.createAccount();
  }

}
