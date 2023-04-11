import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{
wishlist:any=[]
eMsg:any
  constructor(private api:ApiService,private router:Router,private cart:CartService){}
  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.wishlists
        //to check if wishlist has values if not display initial setup
        if(this.wishlist.length==0){
          this.eMsg='Empty Wishlist'
        }
      },
      (data:any)=>{
        this.eMsg=data.error.message
      }
    )
  }
  deletewish(product:any){    
    this.api.deletewish(product.id).subscribe(
      (data:any)=>{
        alert(data.message)
        this.router.navigateByUrl('wishlist')//automatic refresh
        this.wishlist=data.wishlists
        if(this.wishlist.length==0){
          this.eMsg='Empty Wishlist'
        }
      },
      (data:any)=>{
        alert(data.error.message)
      }
    )
  }
  addtocart(product:any){
    this.cart.addtocart(product)
    this.deletewish(product)
  }
}
