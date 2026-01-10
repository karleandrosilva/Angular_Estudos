import { Component } from '@angular/core';
import { Header } from "../header/header";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from "../btn-primary/btn-primary";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, NgOptimizedImage, BtnPrimary],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
