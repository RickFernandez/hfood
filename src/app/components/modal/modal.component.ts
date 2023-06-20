import { Component, Input } from '@angular/core';
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

  constructor(private _locationpService$: LocationService) { }

  ngOnInit(): void {
  }

  @Input() title!: string;
  @Input() modal!: any;
  active = 1;

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
      this._locationpService$.searchByZip(zip).subscribe(
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
}
