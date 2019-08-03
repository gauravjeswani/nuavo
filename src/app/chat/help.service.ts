import { Injectable } from '@angular/core';
import { HelpSection } from './help.section';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  _helpSections: HelpSection[];

  constructor() {
    this._helpSections = new Array<HelpSection>();
    this._helpSections.push(new HelpSection("wikiHeader", "wiki", "BACnet Wiki",
      ["Hi Nuavo, I am a new joiner. How can you assist me?"
        , "Where to begin with in BACnet"
        , "What all information are present in BACnet Wiki regarding BACnet project ?"
        , "Wiki for New Joiners"
        , "Wiki for on call support?"
        , "Where I can find Workspace Setup Guidelines?"
        , "Where I can get help for automation testing setup?"
        , "Where can I find Introductory Information in BACnet?"
        , "Hi I am new to AppDev , from where can I start ?"
        , "What is the link for Application Development notes?"
        , "Help me know more about higher level Architecture"
        , "Where I can find Tech Arch Designs?"
        , "Release Management Processes"
        , "How does the process flow in order for a request to get resolved?"
        , "What tools are  involved in development of BACnet Project?"]));

    this._helpSections.push(new HelpSection("Environment", "Env", "Environment Details",
      ["What are the details for Predev1 database?"
        , "Provide the link for Predev1 CSI URL"]));

        this._helpSections.push(new HelpSection("DataModel", "KADM", "Know about Data Model",
      ["What are the APPLICATION table details?"]));

    this._helpSections.push(new HelpSection("AutomationTesting", "ATMTEST", "Automation Testing",
      ["Please tell me about automation testing."
        , "How I can setup for automation testing?"]));
  }

  get helpSections() {
    return this._helpSections;
  }
}
