class House {
  constructor(doorColour) {
    this.doorColour = doorColour;
  }
  displayDoorColour = () => {
    console.log(`The door colour is ${this.doorColour}`);
  };
}

class NewHouse extends House {
  changeDoorColour = newDoorColour => {
    this.doorColour = newDoorColour;
    console.log(`The door colour has been set to ${newDoorColour}`);
  };
}

const house1 = new NewHouse("brown");

console.log(house1.changeDoorColour("black"));
