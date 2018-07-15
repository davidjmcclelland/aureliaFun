import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)

export class App {
  constructor(eventAggregator) {
    //02 binding
    this.message = 'Aurelia Framework!';
    this.user = 'David J McClelland';
    this.firstName = "Enter your name";
    //04 converters
    setInterval(() => this.update(), 1000);
    this.update();
    //05-events
    this.eventAggregator = eventAggregator;
    //06-forms
    this.email = "";
    this.password="";
  }
  //02 data binding
  updateContent() {
    this.message = 'Aurelia World';
    this.user = 'David J User';
  }
  //03 data binding
  clickFunction(msg){
    console.log("The clickFunction message: " + msg);
    this.message = msg;
  }
  //04-converters
  update() {
    this.currentDate = new Date();
    this.netWorth = Math.random() * 1000000000;
  }
  // 05 event aggregator
  publish(msg){
    let payload = msg;
    this.eventAggregator.publish('myEventName', payload);
  }
  subscribe(msg){
    console.log("subscribe: " + msg);
    this.subscriber = this.eventAggregator.subscribe('myEventName', payload=> {
      console.log(payload);
    });
  }
  dispose(msg){
    console.log("dispose: " + msg);
    this.subscriber.dispose();
    // payload is undefined below and you will see an error in console!
    console.log("payload disposed - payload: " + payload);
  }
 //06-forms
  signup(){
    let myUser = {email: this.email, password: this.password};
    console.log("myUser: " + JSON.stringify(myUser));
  }
}
