import { Controller } from "@hotwired/stimulus"
import flatpickr from 'flatpickr';

// Connects to data-controller="datepickr"
export default class extends Controller {
  connect() {
    console.log('controller datepickr connected')
    flatpickr("#monument_opening_date", {
      enableTime: true,
      dateFormat: "D-m-y H:i",
      minDate: 'today',
      disable: [this.dateValue]

    });
  }
}
