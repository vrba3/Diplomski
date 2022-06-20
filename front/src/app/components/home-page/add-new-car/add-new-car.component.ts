import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/model/car';
import { User } from 'src/app/model/user';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  models: Array<String> = new Array<String>();
  user: User = new User()
  selectedBrand: string = '';
  selectedModel: string = '';
  selectedPrice: string = '';
  selectedCubic: string = '';
  selectedKw: string = '';
  selectedFuel: string = '';
  selectedKm: string = '';
  selectedYear: string = '';
  selectedTransmission: string = '';
  selectedChassis: string = '';
  insertedDescription: string = '';
  images: Array<String> = new Array<String>();
  file: File = null;
  chooseFileError: Boolean = false;
  brandError: Boolean = false;
  modelError: Boolean = false;
  fuelError: Boolean = false;
  cubicError: Boolean = false;
  powerError: Boolean = false;
  transmissionError: Boolean = false;
  kilometersError: Boolean = false;
  yearError: Boolean = false;
  chassisError: Boolean = false;
  chassisLengthError: Boolean = false;
  priceError: Boolean = false;
  newId: number = 1;
  photoError: Boolean = false;

  @Output() homePage = new EventEmitter<string>();

  constructor(private carService: CarService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedUser().subscribe(ret => {
      this.user = ret;
    })
    let model = document.getElementById('model') as HTMLSelectElement;
    model.disabled = true;
    this.generateId();
  }

  goBackToHomePage() {    
    let car = new Car()
    car.id = this.newId
    this.carService.deleteFolder(car).subscribe(ret => {
      if(ret) {
        if(this.user.email === 'vrbica.vlado11@gmail.com')
          this.homePage.emit('administrator');
        else
          this.homePage.emit('user');
      }
    })
  }

  removePhoto(index: number) {
    this.carService.deletePhoto(this.file, this.newId.toString()).subscribe(ret => {
      if(ret)
        this.images.splice(index, 1);
    })
  }

  savePhoto() {
    this.photoError = false;
    if(this.file?.name.match(/.(jpg)$/i)){
      this.chooseFileError = false;
      this.carService.uploadPhoto(this.file, this.newId.toString()).subscribe(ret => {
        if(ret) {
          this.images.push(this.file.name); 
        } else {
          this.photoError = true;
        }
      });
    } else  
      this.chooseFileError = true;
  }

  onChange(event) {
    this.file = event.target.files[0]
  }

  changeCar() {  
    let brand = document.getElementById('brand') as HTMLSelectElement;
    let value = brand.value;
    let model = document.getElementById('model') as HTMLSelectElement;
    model.disabled = false;

    if(value === 'Audi')
      this.setAudiModels();
    else if(value === 'Bmw')
      this.setBMWModels();
    else if(value === 'Citroen')
      this.setCitroenModels();
    else if(value === 'Dacia')
      this.setDaciaModels();
    else if(value === 'Fiat')
      this.setFiatModels();
    else if(value === 'Ford')
      this.setFordModels();
    else if(value === 'Honda')
      this.setHondaModels();
    else if(value === 'Hyundai')
      this.setHyundaiModels();
    else if(value === 'Mercedes Benz')
      this.setMercedesModels();
    else if(value === 'Opel')
      this.setOpelModels();
    else if(value === 'Peugeot')
      this.setPeugeotModels();
    else if(value === 'Renault')
      this.setRenaultModels();
    else if(value === 'Volkswagen')
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

  putErrorsOnFalse() {
    this.chooseFileError = false;
    this.brandError = false;
    this.modelError = false;
    this.fuelError = false;
    this.cubicError = false;
    this.powerError = false;
    this.transmissionError = false;
    this.kilometersError = false;
    this.yearError = false;
    this.chassisError = false;
    this.chassisLengthError = false;
    this.priceError = false;
  }

  addCar() {
    this.putErrorsOnFalse();
    let car = new Car()
    let equipment1 = document.getElementById('equipment1') as HTMLInputElement
    let equipment2 = document.getElementById('equipment2') as HTMLInputElement
    let equipment3 = document.getElementById('equipment3') as HTMLInputElement
    let equipment4 = document.getElementById('equipment4') as HTMLInputElement
    let equipment5 = document.getElementById('equipment5') as HTMLInputElement
    let equipment6 = document.getElementById('equipment6') as HTMLInputElement
    let equipment7 = document.getElementById('equipment7') as HTMLInputElement
    let equipment8 = document.getElementById('equipment8') as HTMLInputElement
    let equipment9 = document.getElementById('equipment9') as HTMLInputElement
    let equipment10 = document.getElementById('equipment10') as HTMLInputElement
    let equipment11 = document.getElementById('equipment11') as HTMLInputElement
    let equipment12 = document.getElementById('equipment12') as HTMLInputElement
    let equipment13 = document.getElementById('equipment13') as HTMLInputElement
    let equipment14 = document.getElementById('equipment14') as HTMLInputElement
    let equipment15 = document.getElementById('equipment15') as HTMLInputElement
    let equipment16 = document.getElementById('equipment16') as HTMLInputElement
    let equipment17 = document.getElementById('equipment17') as HTMLInputElement
    let equipment18 = document.getElementById('equipment18') as HTMLInputElement
    let equipment19 = document.getElementById('equipment19') as HTMLInputElement
    let equipment20 = document.getElementById('equipment20') as HTMLInputElement
    let equipment21 = document.getElementById('equipment21') as HTMLInputElement

    if(this.checkFields()){
      car.id = this.newId
      car.brand = this.selectedBrand
      car.model = this.selectedModel
      car.cubicCapacity = parseInt(this.selectedCubic)
      car.numOfKilometers = parseInt(this.selectedKm)
      car.price = parseInt(this.selectedPrice)
      if(this.selectedKw.length === 4)
        car.numOfKw = parseInt(this.selectedKw.substring(0, 2))
      else if(this.selectedKw.length === 5)
        car.numOfKw = parseInt(this.selectedKw.substring(0, 3))
      car.yearOfProduction = parseInt(this.selectedYear)
      car.fuel = this.selectedFuel
      car.transmission = this.selectedTransmission
      car.numOfChassis = this.selectedChassis
      for(let i=0; i < this.images.length; i++) {
        this.images[i] = this.images[i].substring(0, this.images[i].length-4)
      }
      car.images = this.images
      car.description = this.insertedDescription
      car.equipment = new Array<String>()
      if(equipment1.checked)
        car.equipment.push(equipment1.value)
      if(equipment2.checked)
        car.equipment.push(equipment2.value)
      if(equipment3.checked)
        car.equipment.push(equipment3.value)
      if(equipment4.checked)
        car.equipment.push(equipment4.value)
      if(equipment5.checked)
        car.equipment.push(equipment5.value)
      if(equipment6.checked)
        car.equipment.push(equipment6.value)
      if(equipment7.checked)
        car.equipment.push(equipment7.value)
      if(equipment8.checked)
        car.equipment.push(equipment8.value)
      if(equipment9.checked)
        car.equipment.push(equipment9.value)
      if(equipment10.checked)
        car.equipment.push(equipment10.value)
      if(equipment11.checked)
        car.equipment.push(equipment11.value)
      if(equipment12.checked)
        car.equipment.push(equipment12.value)
      if(equipment13.checked)
        car.equipment.push(equipment13.value)
      if(equipment14.checked)
        car.equipment.push(equipment14.value)
      if(equipment15.checked)
        car.equipment.push(equipment15.value)
      if(equipment16.checked)
        car.equipment.push(equipment16.value)
      if(equipment17.checked)
        car.equipment.push(equipment17.value)
      if(equipment18.checked)
        car.equipment.push(equipment18.value)
      if(equipment19.checked)
        car.equipment.push(equipment19.value)
      if(equipment20.checked)
        car.equipment.push(equipment20.value)
      if(equipment21.checked)
        car.equipment.push(equipment21.value)
      
      
      car.ownersEmail = this.user.email;
      this.carService.addCar(car).subscribe(ret => {
        if(ret) {
          if(this.user.email === 'vrbica.vlado11@gmail.com')
            this.homePage.emit('administrator');
          else
            this.homePage.emit('user');
        }

      })
    }
  }

  checkFields(): Boolean {
    if(this.selectedBrand === '') {
      this.brandError = true;
      return false;
    }
    else if(this.selectedCubic === '') {
      this.cubicError = true;
      return false;
    }
    else if(this.selectedKm === '') {
      this.kilometersError = true;
      return false;
    }
    else if(this.selectedPrice === '') {
      this.priceError = true;
      return false;
    }
    else if(this.selectedModel === '') {
      this.modelError = true;
      return false;
    }
    else if(this.selectedKw === '') {
      this.powerError = true;
      return false;
    }
    else if(this.selectedYear === '') {
      this.yearError = true;
      return false;
    }
    else if(this.selectedFuel === '') {
      this.fuelError = true;
      return false;
    }
    else if(this.selectedTransmission === '') {
      this.transmissionError = true;
      return false;
    }
    else if(this.selectedChassis === '') {
      this.chassisError = true;
      return false;
    }
    else if(this.selectedChassis !== '') {
      if(this.selectedChassis.length < 15 || this.selectedChassis.length > 16) {
        this.chassisLengthError = true;
        return false;
      }
    }

    return true;
  }

  generateId() {
    let id = 1
    this.carService.getAllCars().subscribe(ret => {
      for(let car of ret){
        if(car.id > id)
          id = car.id
      }
      this.newId = id+1;
    })
  }
}
