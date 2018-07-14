import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)

export class App {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.message = 'Aurelia Framework!';
    this.user = 'David J McClelland';
    this.firstName = "Enter your name";

    this.update();
    setInterval(() => this.update(), 1000);
  }

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
