import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  accounts=[
    {
    name:'MasterAccount',
    status:'Active'
    },
    {
    name:'TestAccount',
    status:'Offline'
    },
    {
    name:'Unknown',
    status:'Inactive'
    }

  ];

  onAccountAdded(newAccount:{name:string, status:string}){
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo:{id: number, newStatus:string}){
    this.accounts[updateInfo.id].status=updateInfo.newStatus;
  }

}
 