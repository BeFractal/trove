import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { EOSJSService } from './eosjs.service';
// import { QuoteService } from './quote.service';

@Component({
  selector: 'createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateProjectComponent implements OnInit {
  constructor(private eosjsService: EOSJSService) {}

  ngOnInit() {
  }

  async createProject() {
    await this.eosjsService.createProject();
  }
}
