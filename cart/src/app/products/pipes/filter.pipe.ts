import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//we can change parameters in transform
//propname is property
//searckKey is string in searchbar
//allproducts is from where search is done
  transform(allproducts:[],searchKey:string,propname:string): any[] {
    if(!allproducts||searchKey==''||propname==''){
      return allproducts;
    }
    const result:any=[]//new array
    allproducts.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result;
  }

}
