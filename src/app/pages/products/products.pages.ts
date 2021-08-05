import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsModel } from '../../model/products.model';
import { CartService } from '../../services/cart.service';
import * as $ from 'jquery';
@Component({
  template:`
 <menu></menu>
  <div class="container">

   <div class="portfolio-menu mt-2 mb-4">

          <ul>

              <li class="btn btn-outline-dark active" (click)="productShow('product1')">Prooduct 1</li>
 
              <li class="btn btn-outline-dark" (click)="productShow('product2')">Prooduct 2</li>

              <li class="btn btn-outline-dark" (click)="productShow('product3')">Prooduct 3</li>
 
          </ul>

  </div>
  
    <div class="form-row align-items-center">    
      <div class="col-md-9">     
        <div class="input-group mb-4 mt-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Search Products</div>
          </div>
          <input [(ngModel)] = "searchText" class="form-control" placeholder="Please enter any product name to search ">
        </div>
      </div>
      <div class="col-md-3">     
        <div class=" mb-4 mt-2"> 
          <select class="form-control"  [(ngModel)] = "sortOption">        
        <option value="product_name|asc">Sort By Name (A to Z)</option>
        <option value="product_name|desc">Sort By Name (Z to A)</option>
        <option value="product_price|lth">Sort By Price (Low to High)</option>
        <option value="product_price|htl">Sort By Price (High to Low)</option>
      </select>
        </div>
      </div>
      
          
    </div>
    <div class="row">
   <div [ngClass]="cart.cartItemsList.length == 0 ? 'col-md-12' : 'col-md-12'">  
   <productslist-dir (refresh)="ref($event)" [allProductList]="selectedProducts" [searchedText]="searchText" [sortingBy]="sortOption"></productslist-dir>
   </div>
   <div class="col-md-5" *ngIf="cart.cartItemsList.length > 0">
    <!-- <cart></cart> -->
  </div>
       
  </div>
  </div>
  `,
    styles : [`
  

.portfolio-menu{
	text-align:center;
}
.portfolio-menu ul li{
	display:inline-block;
	margin:0;
	list-style:none;
	padding: 11px 35px;
  margin-left: 50px;
  margin-right: 50px;
	cursor:pointer;
	-webkit-transition:all 05s ease;
	-moz-transition:all 05s ease;
	-ms-transition:all 05s ease;
	-o-transition:all 05s ease;
	transition:all .5s ease;
}

.portfolio-menu ul{
	text-align:center;
}

.portfolio-item{
	/*width:100%;*/
}
.portfolio-item .item{
	/*width:303px;*/
	float:left;
	margin-bottom:10px;
}
 

  `]
})

export class ProductsPage{
    public cartflag:boolean= false;
    public sortBy: string ='';
    public selectedProducts:any;
    public sortOption: string ='product_name|asc';
  constructor (
    public products:ProductsModel, public cart: CartService
    
    ){

  }
 
  ngOnInit(){
    this.productShow('product1');
    this.ref();
// for(let i=0; i<=2;i++){



// }




this.selectedProducts = [ ...this.products.product1, ...this.products.product2, ...this.products.product3 ];


    // this.selectedProducts=this.products.product1;
    //  this.selectedProducts=this.products.product2;
    //   this.selectedProducts=this.products.product3;
    //  $('.portfolio-menu ul li').click(function(){

    //     $('.portfolio-menu ul li').removeClass('active'); 
    //     $(this).addClass('active');
 
    //  });
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 10 )
  }

  productShow(prd){
  
        this.selectedProducts=this.products[prd];
 
  }
  

}