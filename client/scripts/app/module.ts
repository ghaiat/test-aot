import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

if (CONFIG_MODE === 'prod') {
	enableProdMode();
}

import { MainComponent } from './components/main/main.component';
@NgModule({
	imports: [
		BrowserModule, FormsModule, ReactiveFormsModule
	],
	declarations: [MainComponent],
	providers: [],
	bootstrap: [MainComponent]
})
export class MainModule { }
