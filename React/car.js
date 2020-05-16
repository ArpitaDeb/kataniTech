import { METHODS } from "http";
import { uptime } from "os";
import SearchBar from "./pics/src/components/SearchBar";
import { version } from "punycode";

class Car {
    setDriveSound(sound) {
      this.sound = sound;
    }
    drive() {
      return this.sound;
  }
  }
  const car = new Car();
  car.setDriveSound('vroom');
  car.drive();

//under class car defining
how the value of class works inside of a method 
inside of it setting 2 different METHODS
setDriveSound function(gets an argument called->sound)
define a second method called drive and anytime we call that we return this.sound
dummy class Car essentially gives us the ability to set a value and return a value
setting drive sound with Vroom

car.drive(); returns droom-> print up

whenever we want to know the value of this keyword inside of a method on a class 
we don't look 
drive() {
    return this.sound;
}
on the method or function itself we look where we called the method/function, we look 
down to car.drive();
we r calling drive() here is the rule thumb we find the function name it is drive()
we look to the variable of the left of (.)dot or to the left of the function-> car.drive()
we look at the variable car is going to be equal to the inside of the drive() function
this.sound ->(this) is going to be equal to the car variable or instance of the car class
const car = new Car();
class Car {
    setDriveSound(sound) {
      this.sound = sound;
    }

another example using that
const truck = {
    sound: 'putputput',
    driveMyTruck: car.drive
}   

truck.driveMyTruck

assign drive fn to a variable called drive, notice that i didnot invoke the function, 
drive(), no parenthesis there only wrote car.drive
 
const drive = car.drive;
drive;  returns Function drive
calling the drive function here
drive() Cannot read property 'sound' of undefined
left of drive is undefined(no dot)
it tells you that when we pass that callback down into the form element at some point of 
Time we r going to call our callback of onFormSubmit right here 
<form onSubmit={this.onFormSubmit} className="ui form">
and when it actually gets invoked there is no like this.onFormSubmit or there is no SearchBar
onFormSubmit. At some point of time when the form actually calls that function {this.onFormSubmit}
it rips that function off of that object or whatever object it shows up by us inside that
form element.and it calls that function on its own just like this on drive()
when the fn is invoked the value of this inside of  {
    return this.sound;
drive() {
    return this.sound;
} 
is undefined

What is the difference between car.drive and car.drive()? Why we assign driveMyTruck 
value of car.drive and not car.drive()?
It's because he wants to have driveMyTruck to be a function you can call. car.drive is a 
reference of the function and car.drive() will call the methods and return the result into
 the truck.driveMyTruck property

  drive(){
    return this.sound;
  }
This methods return the sound of this
const truck = {
  sound: 'putputput',
  driveMyTruck: car.drive()
}
console.log(truck.driveMyTruck); // Returns "vroom"
So in this case you declare driveMyTruck to be the result of the call car.drive().
You've earlier instantiated Car and set the sound to 'vroom' car.setDriveSound('vroom')
 so car.drive() is returns  'vroom' which in result set {driveMyTruck: "vroom"}

On the other hand if you do it that way (see below) you just "import" the method to your 
object and you will have the sound from truck.sound. this.sound will therefore become 
truck.sound
const truck = {
  sound: 'putputput',
  driveMyTruck: car.drive
} 
console.log(truck.driveMyTruck());

to fix there r 7/8 methods, we will use 

class Car {
  constructor() {
    this.drive = this.drive.bind(this);
  }
  setDriveSound(sound) {
    this.sound = sound;
  }
  drive() {
    return this.sound;
  }
}
this.drive = this.drive.bind(this); binding the drive fn, when we bind a function it is going to 
produce a new version of that function ""drive"" 
this.drive.bind(this); it is a new function altogether, this new fn which is created is essentially
fixed with a correct value of this :- this.sound, so this.drive.bind(this) creates a new fn that is
going to have always the correct value of this.sound, value of this is equal to instance of car
 drive() {
  return this.sound;
} we then take the new function and overwrite the existing kind of broken not fixed function that
exists on this.drive property. so one way to solve is find the constructor, bind the function and
overwrite the existing one. this.drive = this.drive.bind(this);
