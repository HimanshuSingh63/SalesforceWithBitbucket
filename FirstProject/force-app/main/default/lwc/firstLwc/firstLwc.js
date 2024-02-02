// Importing necessary modules from the LWC (Lightning Web Components) library
import { LightningElement, wire } from 'lwc';
// Importing the 'getRecordMethod' function from the 'firstApexClass' Apex class
import getRecordMethod from '@salesforce/apex/firstApexClass.getRecordMethod';

// Exporting a default class that extends from LightningElement, the base class for Lightning web components
export default class FirstLwc extends LightningElement {
     // Declaring two properties, 'accountsData' and 'error', to hold the data and error information respectively
     accountsData;
     error;
 
     // Using the @wire decorator to call the 'getRecords' function
     // The function's result is passed to the 'wiredAccounts' function
     @wire(getRecordMethod)
     wiredAccounts({ error, data }) {
 
         // If data is returned from the 'getRecords' function, it is assigned to 'accountsData' and 'error' is set to undefined
         if (data) {
             this.accountsData = data;
             this.error = undefined;
         } 
 
         // If an error occurs during the execution of the 'getRecords' function, it is assigned to 'error' and 'accountsData' is set to undefined
         else if (error) {
             this.error = error;
             this.accountsData = undefined;
         }
     }
}