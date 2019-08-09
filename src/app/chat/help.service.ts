import { Injectable } from '@angular/core';
import { HelpSection } from './help.section';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  _helpSections: HelpSection[];


  _intentGrouping = new Map();

  constructor() {
    this._helpSections = new Array<HelpSection>();
    this._helpSections.push(new HelpSection("BACNET", "BACnet", "BACnet",
      ["What is BACNet?"]));

    this._helpSections.push(new HelpSection("AboutHackathon", "AHAC", "About Hackathon",
      ["What is Hackathon?"
        , "Who will win hackathon?",
      "What is the winning prize in hackathon?"]));

        this._helpSections.push(new HelpSection("NewJoinee", "NJOI", "New Joinee?",
          ["How to get the outlook account?",
            , "What are the parameter for an intern to get permanent?", "How to transfer machine to our name?",
            "what to do if I don't have permanent admin rights?", "What are my default login credentials?",
            "How to get admin rights?", "Software development lifecycle in Siemens?",
            "What are the domains, in which Siemens lead?", "How to get my Employee ID card?",
            "Where to raise request for software installation?", "How to fill timesheet?",
          "What are the working days in Siemens?"]));
   
    this._helpSections.push(new HelpSection("AboutSiemens", "ABSIE", "About Siemens",
      [" What are the facilities provided to us by Siemens?"
        , "What are the list of holidays?", "How to connect with HR?"
        , "How to contact IT team?", "How I can apply for leave?"
        , "How the performance evaluation is done in Siemens?", "how to get salary slip?"]));

    //////////////////////////////////////////////////
    this._intentGrouping.set('Nuovo_BACNet Definition', 'BACnet');
    //
    this._intentGrouping.set('Nuovo_Hackathon', 'About Hackathon');
    this._intentGrouping.set('Nuovo_Which team is going to win hackathon?', 'About Hackathon');
    this._intentGrouping.set('Nuovo_Winning prize of hackathon', 'About Hackathon');
    //
    this._intentGrouping.set('Nuovo_how to get your outlook account ?', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Intern Related queries', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Machine Tansfer', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Missing Admin rights', 'New Joinee?');
    this._intentGrouping.set('Nuovo_New User Login', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Procedure for admin rights', 'New Joinee?');
    this._intentGrouping.set('Nuovo_SDLC in siemens', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Siemens Buisness Domain', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Siemens Employee ID card', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Software Installation', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Timesheet', 'New Joinee?');
    this._intentGrouping.set('Nuovo_Working days in siemens', 'New Joinee?');
    //
    this._intentGrouping.set('Nuovo_Facilities at Siemens.', 'About Siemens');
    this._intentGrouping.set('Nuovo_Holidays', 'About Siemens');
    this._intentGrouping.set('Nuovo_How to connect with HR', 'About Siemens');
    this._intentGrouping.set('Nuovo_IT related queries', 'About Siemens');
    this._intentGrouping.set('Nuovo_Leave Management', 'About Siemens');
    this._intentGrouping.set('Nuovo_PMP', 'About Siemens');
    this._intentGrouping.set('Nuovo_Salary Pay Slip', 'About Siemens');
    

  }

  get helpSections() {
    return this._helpSections;
  }

  get intentGrouping() {
    return this._intentGrouping
  }
}
