import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationService } from 'src/app/services/zip/location.service';
import { Address } from 'src/app/shared/models/Address';
import { Location } from 'src/app/shared/models/Location';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  location!: Location;

  locationData: boolean = false;

  constructor(private _locationService$: LocationService) { }

  ngOnInit(): void {
  }

  @Input() title!: string;
  @Input() modal!: any;
  active = 1;

  @Output() locationSelected = new EventEmitter<string>();
  @Output() modalHidden =  new EventEmitter<boolean>();

  onZipEntered(zip: string) {
    this.searchByZip(zip);
  }

  searchByZip(zip: string): Location {
    if (zip.length <= 7) {
      this.locationData = false;
      return this.location = {
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: '',
      }
    }
    else {
      this._locationService$.searchByZip(zip).subscribe(
        ((location: Location) => {
          return this.location = location;
        })
      );
      if (this.location.cep != '' && this.location.logradouro != '' && this.location.bairro != '' && this.location.uf != '') {
        this.locationData = !this.locationData
      }
    }
    return this.location;
  }

  getLocation(location: any): void {
    if (location) {
      if (location.target.srcElement == 'div' || location.target.srcElement == 'span') {
        if (location.target.className = 'btn-address') {
          location.target.firstChild.className = 'address-zip' ? this.locationSelected.emit(location.target.firstChild.innerText) : this.locationSelected.emit('');
        }
      }
      else {
        let zipValue;
        zipValue = document.querySelector('.address-zip');
        console.log(zipValue!.innerHTML);
        this.locationSelected.emit(zipValue!.innerHTML);
        console.log(this.locationSelected);
        
      }
    }
    this.modalHidden.emit(true);
    console.log(this.modalHidden);
  }
}
