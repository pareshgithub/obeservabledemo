import { Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observabledemo';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let foo: any = new Observable((observer) => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter);
        counter++;
      }, 1000);
      setTimeout(() => {
        console.log('complete')
        observer.complete();
      }, 7000);
      
    });

    foo.subscribe((data) => {
      console.log(data);
    })

    
    
  }
}
