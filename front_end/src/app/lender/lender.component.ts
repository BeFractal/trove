import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.scss']
})
export class LenderComponent implements OnInit {
  version: string = environment.version;

  constructor() {}

  ngOnInit() {}
}
