import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["slip", "string"]
  static values = {
    date: String
  }
  connect() {
    console.log('My date :', [this.dateValue])
  }


  // j'ai besoin d'une méthode qui se déclenche au click
  toggle(){
    // changer la classe du form
    this.slipTarget.classList.toggle('d-none')
    if (this.stringTarget.text === "Show the Form"){
      this.stringTarget.text = "Hide the Form"
      this.stringTarget.classList.remove('btn-primary')
      this.stringTarget.classList.add('btn-danger')
    } else {
      this.stringTarget.text = "Show the Form"
    }

  }
  // changer le texte du bouton / changer la class du bouton pour changer la couleur
}
