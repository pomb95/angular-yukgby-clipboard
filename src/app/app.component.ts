import { Component, Output } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private clipboardService: ClipboardService){}
  personne = new Personne(1, "Paul", "Paris");
  copied: boolean = false;

  copy() {
        var from = document.getElementById('content');
        var range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(from);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        this.copied = true;
        console.log(this.copied);
      }
  
}

export class Personne {
  constructor(  
    public id: number,
    public prenom: string,
    public adresse: string) {}
}
