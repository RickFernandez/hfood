import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state/state.service';
import { Address } from 'src/app/shared/models/Address';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() zipEntered: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchType!: string;

  searchTerm: string = "";

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe(param => {
      if (param['searchTerm']) {
        console.log(param['searchTerm']);
        
        this.searchTerm = param['searchTerm'];
      }
    });
  }

  onSearchFood() {
    this.searchTerm ? this._router.navigateByUrl('/search/' + this.searchTerm) : this._router.navigateByUrl('/');
  }

  onSearchByZip(zip: string) {
    let cleanZip = zip.replace(/\D/g, '');
    if (zip) {
      if (zip.length === 8) {
        this.zipEntered.emit(cleanZip);
      }
      if (zip.length <= 7) {
        cleanZip = ''
        this.zipEntered.emit(cleanZip);
      }
    }
  }
}
