import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  headers = ["Case ID", "Name", "Type", "Progress (%)"];

  rows = [
    {
      "Case ID" : "1",
      "Name" : "Rahul",
      "Type" : "Onboarding",
      "Progress (%)" : "100"
    },
    {
      "Case ID" : "2",
      "Name" : "Ajay",
      "Type" : "Offboardong",
      "Progress (%)" : "50",
    }
  ]
}
