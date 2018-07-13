export class App {
  constructor() {
    this.message = 'Aurelia Framework!';
    this.user = 'David J McClelland';
    this.firstName = "Enter your name";

    this.update();
    setInterval(() => this.update(), 1000);
  }

  updateContent() {
    this.message = 'Aurelia World';
    this.user = 'David J User';
  }

  update() {
    this.currentDate = new Date();
    this.netWorth = Math.random() * 1000000000;
  }

  clickFunction(msg){
    console.log("The clickFunction message: " + msg);
    this.message = msg;
  }

}
