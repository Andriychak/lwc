import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class AccountForm extends LightningElement {
    @api recordId; // Account Id
	@wire(getRecord, { recordId: '$recordId'})
	account;
}