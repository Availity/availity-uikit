import inquirer from 'inquirer';
import Logger from './logger';

var questions = [
  {
    type: 'input',
    name: 'version',
    message: 'project version',
    validate: function( value ) {
      var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      } else {
        return 'Please enter a valid phone number';
      }
    }
  }
];

export default function prompt() {

  Logger.log('releasing');

  return new Promise((resolve, reject) => {

  });

}
