export class App {
  constructor() {
    this.message = 'Aurelia Framework!';
    this.user = 'David J McClelland';
  }

  updateContent() {
    this.message = 'Aurelia World';
    this.user = 'David J User';
  }

  /*
  lifecycle

  constructor()
  created(owningVIEW, myView) -- js and html resources are linked
  bind(bindingContext, overrideContext) -- events
  attached() - view is available on the DOM
  detached() - view is removed from the DOM
  unbind() - events are unbound from the object

  */
   */
  /*

      let firstName = David;
      let lastName = McClelland;

      this.name = "${firstName} ${lastName}";

      let three = 3;
      let four = 4;

      this.dozen = "The product of 3 * 4 is ${three * four}."


  // decorators

  import ${inject} from 'aurelia-framework';
  */

// async/await  -- this is used inside a class
  /*    activate(){

      }*/
}
