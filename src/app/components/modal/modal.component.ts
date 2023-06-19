import { Component, Input } from '@angular/core';
import { ZipService } from 'src/app/services/zip/zip.service';
import { Zip } from 'src/app/shared/models/Zip';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  zip: Zip = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  };

  zipData: boolean = false;

  staticAlertClosed: boolean = false;
  alertMessage: string = '';
  alertType: string = '';

  constructor(private _zipService$: ZipService) { }

  ngOnInit(): void {
  }

  @Input() title!: string;
  @Input() modal!: any;
  active = 1;

  alertResponse() {
    this.staticAlertClosed = true;
    this.alertMessage = 'Sucesso!';
    this.alertType = 'success';
  }

  onZipEntered(zip: string) {
    this.searchZip(zip);
  }

  searchZip(zip: string): Zip {
    this._zipService$.searchByZip(zip).subscribe(
      ((address: Zip) => {
        this.zip = address;
      })
    );
    if (this.zip.cep != '' && this.zip.logradouro != '' && this.zip.bairro != '' && this.zip.uf != '') {
      this.zipData = !this.zipData
    }
    return this.zip;
  }
}
