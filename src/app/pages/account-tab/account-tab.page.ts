import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Musician } from 'src/app/models/musician';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: 'account-tab.page.html',
  styleUrls: ['account-tab.page.scss']
})
export
 class Tab3Page implements OnInit{

  musicianList:Musician[]|undefined;
  accountDetails:Account|undefined;

  constructor(private localStorageService:LocalStorageService) {}

  ngOnInit()
  {
    this.musicianList=LocalStorageService.runtimeAccountMusicians;
    this.accountDetails=LocalStorageService.runtimeAccount;
    console.log(JSON.stringify(LocalStorageService.runtimeAccountMusicians));
    console.log(JSON.stringify(LocalStorageService.runtimeAccount));
  }

  clearLocalStorage()
  {
    this.localStorageService.clearLocalStorage();
  }

  logOut()
  {
    this.localStorageService.logOut();
  }
}
