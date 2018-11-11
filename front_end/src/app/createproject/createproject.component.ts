import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

// import { QuoteService } from './quote.service';

@Component({
  selector: 'createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateProjectComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {} //(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
  }
}
