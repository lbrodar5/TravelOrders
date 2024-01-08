import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createWorker } from 'tesseract.js';
import { Material } from '../app.material';

@Component({
  selector: 'app-ocr',
  standalone: true,
  imports: [CommonModule, Material],
  templateUrl: './ocr.component.html',
  styleUrl: './ocr.component.css'
})
export class OCRComponent {
  ocrResult = '';
  imageUrl = '';
  imageUrlBi = '';
  fileName = '';
  kilometrage !: number;
  loading = false;

  @ViewChild('canvas') canvasElRef !: ElementRef;
  @ViewChild('image') imageElRef !: ElementRef;

  @Output() getKilometrage = new EventEmitter<number>;

  async doOCR() {
    const worker = await createWorker();
    const canvas = this.setupCanvas();
    const dataUrl = canvas.toDataURL("image/jpeg");
    
    const result = await worker.recognize(dataUrl);
    console.log(result);
    let words = [];
    for (let word of result.data.words) {
        words.push(+word.text)
    }
    words = words.filter( x => x);
    console.log(words);
    this.kilometrage = Math.max(...words);
    const text = result.data.text;
    this.ocrResult = text;
    (await worker).terminate();
    this.loading = false;
  }

  onFileSelected(event : any) {

    const file:File = event.target.files[0];

    this.loading = true;
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
      this.ocrResult = 'Recognizing...';
      this.doOCR();
    }
  }

  preprocessImage(canvas : HTMLCanvasElement) {
    const image = canvas.getContext('2d')?.getImageData(0,0,canvas.width, canvas.height);
    if (image) this.thresholdFilter(image.data, 0.55);
    return image;
  }
 
 // from https://github.com/processing/p5.js/blob/main/src/image/filters.js
 thresholdFilter(pixels : Uint8ClampedArray, level : number) {
    if (level === undefined) {
    level = 0.5;
    }
    const thresh = Math.floor(level*255);
    for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    
    const gray = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    let value;
    if (gray >= thresh) {
        value = 255;
    } else {
        value = 0;
    }
    pixels[i] = pixels[i + 1] = pixels[i + 2] = value;
    }
  }

  setupCanvas() {
    const image = this.imageElRef.nativeElement;
    const canvas = this.canvasElRef.nativeElement;
    const ctx = canvas.getContext("2d");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0, image.naturalWidth,image.naturalHeight);
    ctx.putImageData(this.preprocessImage(canvas),0,0);
    return canvas;
  }

  addKilometrage() {
    this.getKilometrage.emit(this.kilometrage);
  }
}
