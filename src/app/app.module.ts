import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './effects/product.effect';
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from './modules/material/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productInCartReducer } from './reducers/cart.reducer';
import { featureKey, productReducer } from './reducers/product.reducer';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forFeature([ProductEffect]),
    StoreModule.forFeature(featureKey.productFeatureKey, productReducer),
    StoreModule.forFeature(featureKey.cartFeatureKey, productInCartReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
