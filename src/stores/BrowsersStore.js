import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'

var _selected = {};

function add(browser, version, percent) {
  _selected[browser + version] = percent;
}

function remove(browser, version) {
  delete _selected[browser + version];
}

// Extend Cart Store with EventEmitter to add eventing capabilities
class BrowsersStore extends EventEmitter {

  getSelected() {
    return _selected;
  }

}

var browsersStore = new BrowsersStore();

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {

  switch(payload.actionType) {

    // Respond to CART_ADD action
    case 'ADD':
      add(payload.data.browser, payload.data.version, payload.data.percent);
      break;

    case 'REMOVE':
      remove(payload.data.browser, payload.data.version);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  console.log('emitting change');
  browsersStore.emit('change');

  return true;

});

export default browsersStore
