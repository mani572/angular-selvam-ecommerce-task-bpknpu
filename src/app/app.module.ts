import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Pipe, PipeTransform } from '@angular/core';

import { dirConfig } from './dir.config';

import { RouterConfig,RouterDeclarations } from './router.config';

import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';

import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';
import { CartmodalComponent } from './cartmodal/cartmodal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule,ReactiveFormsModule,RouterConfig,BrowserAnimationsModule,NgbModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, dirConfig ,RouterDeclarations,FilterPipe,SortPipe, CartmodalComponent, CarouselComponent ],
  providers : [ProductsModel,BillingFormModel,CompanyDetailsModel, StorageService,CartService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
