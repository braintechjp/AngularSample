import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   templateUrl: './app.component.html'
})



export class AppComponent  {  
    key: string = 'username'; 
    reverse: boolean = false;
    sort(key:string) {
        this.key = key;
        this.reverse = !this.reverse;
    } 
    options: string[];  
  
    
    pagSize: number = 5;
 ShowDetails :boolean= false;	
    CountryName: string = "";
    p: number = 1;
   Name : string ="";
   Gender : string ="";
   templist =[{gender:1 ,name:"Kumar Arpit",userid:1,username:"Kumar_Arpit"}];
    userListArray = [{gender:1 ,name:"Kumar Arpit",userid:1,username:"Kumar_Arpit"},{gender:2 ,name:"Shanu Tripathi",userid:2,username:"Shanu_Tripathi"},{gender:2 ,name:"Nidhi Nagar",userid:3,username:"Nidhi_Nagar"}];
    isListReady: boolean = true;
    showIcon: boolean = false;
	ShowMsg :boolean = false;
    constructor() {
       
    }
    ChooseMe(id: any) {
		
            this.templist =    this.userListArray.filter((data: any) => data.userid == id);	
			
				

this.ShowDetails = true;	
this.ShowMsg = false;			 
			  }
      RemoveMe(id: any) {
		
            this.userListArray =    this.userListArray.filter((data: any) => data.userid != id);	
			this.ShowDetails = false;
			this.ShowMsg = true;
				

//this.ShowDetails = true;				 
			  }
    
   
    ToggleFilterSection(): void
    {
        this.isListReady = !this.isListReady;
       
    }

   
  

    
    

   

}
