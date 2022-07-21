# vhap.eval

### Assignment:

"reproduce" the beta app as shown here: https://vhi-dev.usc.edu/eval

- Click "find" to show the Search input textbox
- Enter text in the text box to perform auto-suggests (sample inputs: "jon" or "mike")
- Press enter after the text is entered or select one of the auto-suggest items to perform a Search
- Display the search results
- Click the search result item to show the item detail

### Angular project:

- clone this repo, or make a public fork
- this app is in the projects/beta folder
- use Angular material/cdk (already installed)  
  https://material.angular.io
- use FlexLayout (already installed)  
  https://github.com/angular/flex-layout/wiki  
  https://github.com/angular/flex-layout/wiki/Declarative-API-Overview  
  https://github.com/angular/flex-layout/wiki/Responsive-API
- use existing styles: see _projects/vhap/src/lib/vhap.scss_
- use exising types: see _projects/beta/src/app/model.ts_

### Getting started:

- The input/auto-suggest can be done with _mat-autocomplete_.
- The list of items can be done with _cdk-virtual-scroll-viewport_.
- The file _beta.service.ts_ has setup the methods for retrieveing data.  
  The API is defined at:  
  https://vhap.usc.edu/VHAP.IWitness.API/eval/swagger/ui/index
