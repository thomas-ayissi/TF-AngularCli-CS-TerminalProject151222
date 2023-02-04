import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementAGLComponent } from './user-management-agl/user-management-agl.component';
import { IdentifyAGLComponent } from './userManagementAGL/identify-agl/identify-agl.component';
import { RegisterAGLComponent } from './userManagementAGL/register-agl/register-agl.component';
import { MissingPasswordAGLComponent } from './userManagementAGL/missing-password-agl/missing-password-agl.component';
import { ItemsSalesAGLComponent } from './items-sales-agl/items-sales-agl.component';
import { AddToCartAGLComponent } from './itemsSalesAGL/add-to-cart-agl/add-to-cart-agl.component';
import { DeleteInsideCartAGLComponent } from './itemsSalesAGL/delete-inside-cart-agl/delete-inside-cart-agl.component';
import { AddPaymentMethodAGLComponent } from './itemsSalesAGL/add-payment-method-agl/add-payment-method-agl.component';
import { PayAGLComponent } from './itemsSalesAGL/pay-agl/pay-agl.component';
import { ChooseDeliveryAdressAGLComponent } from './itemsSalesAGL/choose-delivery-adress-agl/choose-delivery-adress-agl.component';
import { ItemsManagementAGLComponent } from './items-management-agl/items-management-agl.component';
import { DeleteProductInsideCartAGLComponent } from './itemsManagementAGL/delete-product-inside-cart-agl/delete-product-inside-cart-agl.component';
import { UpdateProductInsideCartAGLComponent } from './itemsManagementAGL/update-product-inside-cart-agl/update-product-inside-cart-agl.component';
import { AddProductInsideCartAGLComponent } from './itemsManagementAGL/add-product-inside-cart-agl/add-product-inside-cart-agl.component';
import { AddProductInsideProductsAGLComponent } from './itemsManagementAGL/add-product-inside-products-agl/add-product-inside-products-agl.component';
import { UpdateProductInsideProductsAGLComponent } from './itemsManagementAGL/update-product-inside-products-agl/update-product-inside-products-agl.component';
import { DeleteProductInsideProductsAGLComponent } from './itemsManagementAGL/delete-product-inside-products-agl/delete-product-inside-products-agl.component';
import { DesignAGLComponent } from './design-agl/design-agl.component';
import { MainDesignAGLComponent } from './designAGL/main-design-agl/main-design-agl.component';
import { MenuAGLComponent } from './designAGL/mainDesignAGL/menu-agl/menu-agl.component';
import { SousMenuAGLComponent } from './designAGL/mainDesignAGL/sous-menu-agl/sous-menu-agl.component';
import { ItemsCatalogAGLComponent } from './designAGL/mainDesignAGL/items-catalog-agl/items-catalog-agl.component';
import { ItemsAGLComponent } from './designAGL/mainDesignAGL/itemsCatalogAGL/items-agl/items-agl.component';
import { ItemsDetailsAGLComponent } from './designAGL/mainDesignAGL/itemsCatalogAGL/itemsAGL/items-details-agl/items-details-agl.component';
import { ItemsImagesAGLComponent } from './designAGL/mainDesignAGL/itemsCatalogAGL/itemsAGL/items-images-agl/items-images-agl.component';
import { AsideAGLComponent } from './designAGL/mainDesignAGL/aside-agl/aside-agl.component';
import { FooterDesignAGLComponent } from './designAGL/footer-design-agl/footer-design-agl.component';
import { FooterMenuAGLComponent } from './designAGL/footerDesignAGL/footer-menu-agl/footer-menu-agl.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementAGLComponent,
    IdentifyAGLComponent,
    RegisterAGLComponent,
    MissingPasswordAGLComponent,
    ItemsSalesAGLComponent,
    AddToCartAGLComponent,
    DeleteInsideCartAGLComponent,
    AddPaymentMethodAGLComponent,
    PayAGLComponent,
    ChooseDeliveryAdressAGLComponent,
    ItemsManagementAGLComponent,
    DeleteProductInsideCartAGLComponent,
    UpdateProductInsideCartAGLComponent,
    AddProductInsideCartAGLComponent,
    AddProductInsideProductsAGLComponent,
    UpdateProductInsideProductsAGLComponent,
    DeleteProductInsideProductsAGLComponent,
    DesignAGLComponent,
    MainDesignAGLComponent,
    MenuAGLComponent,
    SousMenuAGLComponent,
    ItemsCatalogAGLComponent,
    ItemsAGLComponent,
    ItemsDetailsAGLComponent,
    ItemsImagesAGLComponent,
    AsideAGLComponent,
    FooterDesignAGLComponent,
    FooterMenuAGLComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
