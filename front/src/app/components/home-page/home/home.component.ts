import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: Array<String> = new Array<String>();
  selectedBrand: string = '';
  selectedModel: string = '';
  selectedPrice: string = '';
  selectedStartCubic: string = '';
  selectedEndCubic: string = '';
  selectedStartKw: string = '';
  selectedEndKw: string = '';
  selectedFuel: string = '';
  selectedStartKm: string = '';
  selectedEndKm: string = '';
  selectedStartYear: string = '';
  selectedEndYear: string = '';
  selectedTransmission: string = '';

  @Output() loginPage = new EventEmitter<string>();
  @Output() registerPage = new EventEmitter<string>();
  @Output() carsPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    let model = document.getElementById('model') as HTMLSelectElement;
    model.disabled = true;
  }

  goToLogin(): void{
    this.loginPage.emit();
  }

  goToRegister(): void {
    this.registerPage.emit();
  }

  searchCars(): void {
    let text = ''
    if(this.selectedBrand === '')
      text = text + '-'
    else
      text = text + this.selectedBrand
    
    if(this.selectedModel === '...' || this.selectedModel === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedModel
    
    if(this.selectedPrice !== '')
      text = text + ',' + this.selectedPrice.toString()
    else
      text = text + ',0'
    
    if(this.selectedStartCubic !== '')
      text = text + ',' + this.selectedStartCubic.toString()
    else
      text = text + ',0'

    if(this.selectedEndCubic !== '')
      text = text + ',' + this.selectedEndCubic.toString()
    else
      text = text + ',0'

    if(this.selectedStartKw === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedStartKw

    if(this.selectedEndKw === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedEndKw

    if(this.selectedFuel === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedFuel

    if(this.selectedStartKm !== '')
      text = text + ',' + this.selectedStartKm.toString()
    else
      text = text + ',0'

    if(this.selectedEndKm !== '')
      text = text + ',' + this.selectedEndKm.toString()
    else
      text = text + ',0'

    if(this.selectedStartYear === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedStartYear

    if(this.selectedEndYear === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedEndYear

    if(this.selectedTransmission === '')
      text = text + ',-'
    else
      text = text + ',' + this.selectedTransmission

    
    this.carsPage.emit(text);
  }

  changeCar() {  
    let brand = document.getElementById('brand') as HTMLSelectElement;
    let value = brand.value;
    let model = document.getElementById('model') as HTMLSelectElement;
    model.disabled = false;

    if(value === 'audi')
      this.setAudiModels();
    else if(value === 'bmw')
      this.setBMWModels();
    else if(value === 'citroen')
      this.setCitroenModels();
    else if(value === 'dacia')
      this.setDaciaModels();
    else if(value === 'fiat')
      this.setFiatModels();
    else if(value === 'ford')
      this.setFordModels();
    else if(value === 'honda')
      this.setHondaModels();
    else if(value === 'hyundai')
      this.setHyundaiModels();
    else if(value === 'mercedes benz')
      this.setMercedesModels();
    else if(value === 'opel')
      this.setOpelModels();
    else if(value === 'peugeot')
      this.setPeugeotModels();
    else if(value === 'renault')
      this.setRenaultModels();
    else if(value === 'volkswagen')
      this.setVWModels();
    else if(value === ''){
      this.models = new Array<String>()
      let model = document.getElementById('model') as HTMLSelectElement;
      model.disabled = true;
    }
  }

  setVWModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('Arteon')
    this.models.push('Golf 1')
    this.models.push('Golf 2')
    this.models.push('Golf 3')
    this.models.push('Golf 4')
    this.models.push('Golf 5')
    this.models.push('Golf 6')
    this.models.push('Golf 7')
    this.models.push('Golf 8')
    this.models.push('Passat B1')
    this.models.push('Passat B2')
    this.models.push('Passat B3')
    this.models.push('Passat B4')
    this.models.push('Passat B5')
    this.models.push('Passat B5.5')
    this.models.push('Passat B6')
    this.models.push('Passat B7')
    this.models.push('Passat B8')
    this.models.push('Passat CC')
    this.models.push('Polo')
    this.models.push('T-Roc')
    this.models.push('Tiguan')
    this.models.push('Touraeg')
  }

  setRenaultModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('Captur')
    this.models.push('Clio')
    this.models.push('Fluence')
    this.models.push('Kadjar')
    this.models.push('Laguna')
    this.models.push('Megane')
    this.models.push('Talisman')
  }

  setPeugeotModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('107')
    this.models.push('108')
    this.models.push('206')
    this.models.push('207')
    this.models.push('208')
    this.models.push('307')
    this.models.push('308')
    this.models.push('406')
    this.models.push('407')
    this.models.push('408')
    this.models.push('507')
    this.models.push('508')
  }

  setOpelModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('Astra')
    this.models.push('Calibra')
    this.models.push('Corsa')
    this.models.push('Kadett')
    this.models.push('Meriva')
    this.models.push('Omega')
    this.models.push('Tigra')
    this.models.push('Vectra')
    this.models.push('Zafira')
  }

  setMercedesModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('A 140')
    this.models.push('A 150')
    this.models.push('A 160')
    this.models.push('A 170')
    this.models.push('A 180')
    this.models.push('A 190')
    this.models.push('A 200')
    this.models.push('B 150')
    this.models.push('B 160')
    this.models.push('B 170')
    this.models.push('B 180')
    this.models.push('B 190')
    this.models.push('B 200')
    this.models.push('B 160')
    this.models.push('B 180')
    this.models.push('B 200')
    this.models.push('B 220')
    this.models.push('B 230')
    this.models.push('C 270')
    this.models.push('C 300')
    this.models.push('C 320')
    this.models.push('E 200')
    this.models.push('E 220')
    this.models.push('E 230')
    this.models.push('E 240')
    this.models.push('E 250')
    this.models.push('E 260')
    this.models.push('G 300')
    this.models.push('G 350')
    this.models.push('G 400')
    this.models.push('G 500')
  }

  setHyundaiModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('Elantra')
    this.models.push('i10')
    this.models.push('i20')
    this.models.push('i30')
    this.models.push('i40')
    this.models.push('ix35')
    this.models.push('Ioniq')
    this.models.push('Santa Fe')
    this.models.push('Tucson')
  }

  setHondaModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('Accord')
    this.models.push('Civic')
    this.models.push('CR-V')
    this.models.push('CR-Z')
    this.models.push('CRX')
    this.models.push('Jazz')
  }

  setFordModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('B-Max')
    this.models.push('C-Max')
    this.models.push('Escort')
    this.models.push('Focus')
    this.models.push('Fiesta')
    this.models.push('Kuga')
    this.models.push('Mondeo')
    this.models.push('Mustang')
  }

  setFiatModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('500')
    this.models.push('500C')
    this.models.push('500L')
    this.models.push('Bravo')
    this.models.push('Doblo')
    this.models.push('Panda')
    this.models.push('Punto')
    this.models.push('Punto Grande')
    this.models.push('Tipo')

  }

  setAudiModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('A1')
    this.models.push('A2')
    this.models.push('A3')
    this.models.push('A4')
    this.models.push('A5')
    this.models.push('A6')
    this.models.push('A7')
    this.models.push('A8')
    this.models.push('Q2')
    this.models.push('Q3')
    this.models.push('Q5')
    this.models.push('Q7')
    this.models.push('Q8')
    this.models.push('R8')
    this.models.push('TT')
  }

  setBMWModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('120')
    this.models.push('123')
    this.models.push('125')
    this.models.push('214')
    this.models.push('216')
    this.models.push('218')
    this.models.push('220')
    this.models.push('225')
    this.models.push('315')
    this.models.push('316')
    this.models.push('318')
    this.models.push('328')
    this.models.push('420')
    this.models.push('425')
    this.models.push('428')
    this.models.push('430')
    this.models.push('518')
    this.models.push('520')
    this.models.push('525')
    this.models.push('X1')
    this.models.push('X2')
    this.models.push('X3')
    this.models.push('X4')
    this.models.push('X5')
    this.models.push('X6')
    this.models.push('X7')
  }

  setCitroenModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('C1')
    this.models.push('C2')
    this.models.push('C3')
    this.models.push('C3 Picasso')
    this.models.push('C4')
    this.models.push('C4 Grand Picasso')
    this.models.push('C4 Picasso')
    this.models.push('C5')
    this.models.push('C6')
    this.models.push('C8')
  }

  setDaciaModels() {
    this.models = new Array<String>()
    this.models.push('...')
    this.models.push('Logan')
    this.models.push('Sandero')
    this.models.push('Duster')
  }
}
