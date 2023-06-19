import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  private _success = new Subject<string>();

	@Input() staticAlertClosed: boolean = false;
	@Input() alertMessage: string = '';
	@Input() alertType: string = '';

	@ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;
  
	@ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

	ngOnInit(): void {
		setTimeout(() => this.staticAlert.close(), 20000);

		this._success.subscribe((message) => (this.alertMessage = message));
		this._success.pipe(debounceTime(5000)).subscribe(() => {
			if (this.selfClosingAlert) {
				this.selfClosingAlert.close();
			}
		});
	}

	public changeSuccessMessage() {
		this._success.next(`${new Date()} - Message successfully changed.`);
	}

}
