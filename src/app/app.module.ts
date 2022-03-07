import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoreComponent } from './components/core/core.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import {LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [AppComponent, CoreComponent, ModalComponent, MyLoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    CdkTableModule,
    CdkTreeModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
