import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable, from, map, of } from 'rxjs';
import { IJsPdfOptions } from '../interfaces/jsPDF/IJsPdfOptions';
import { jsPDFFormatEnum, jsPDFOrientationEnum, jsPDFUnitEnum } from '../enums/jsPDF/jsPDF.enum';
import { IDimension } from '../interfaces/jsPDF/IDimensions';
import { LETTER_HEIGHT_MM, LETTER_WIDTH_MM } from '../constants/paper';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  htmlContent: any;
  pdf: any;
  canvasData = '';

  margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  height = 0;
  width = 0;
  innerHeight = 0;
  innerWidth = 0;

  pdfOptions = {
    orientation: jsPDFOrientationEnum.Lanscape,
    unit: jsPDFUnitEnum.Milimeter,
    format: jsPDFFormatEnum.Letter,
    compressPdf: false
  } as IJsPdfOptions;

  exportPDF = (elementId: string, fileName: string): Observable<{ status: string }> => {
    this.htmlContent = document.getElementById(elementId);

    if (!this.htmlContent) {
      console.error('HTML Content not found!');
      return of({ status: 'ERROR: HTML Content not found!'});
    }

    return from(html2canvas(this.htmlContent)).pipe(
      map(canvas => {
        this.getImageSize(canvas.width, canvas.height);
        this.canvasData = canvas.toDataURL('image/png');
        return new jsPDF.jsPDF(this.pdfOptions);
      }),
      map(pdf => {
        this.pdf = pdf;
        this.pdf.addImage(this.canvasData, 'PNG', this.margin.left, this.margin.top, this.innerWidth, this.innerHeight);
        this.pdf.save(`${fileName}.pdf`);
        return { status: 'OK' };
      })
    );
  }

  getImageSize = (canvasWidth: number, canvasHeight: number): void => {
    if (canvasWidth > canvasHeight) {
      this.pdfOptions.orientation = jsPDFOrientationEnum.Lanscape;

      this.width = LETTER_HEIGHT_MM;
      this.height = LETTER_WIDTH_MM;
      this.innerWidth = this.width - this.margin.left - this.margin.right;
      this.innerHeight = (canvasHeight / canvasWidth) * this.innerWidth;
      this.margin.top = Math.floor((this.height - this.innerHeight) / 2);
      this.margin.bottom = this.margin.top;
    } else {
      this.pdfOptions.orientation = jsPDFOrientationEnum.Portrait;

      this.height = LETTER_HEIGHT_MM;
      this.width = LETTER_WIDTH_MM;
      this.innerHeight = this.height - this.margin.top - this.margin.bottom;
      this.innerWidth = (canvasWidth / canvasHeight) * this.innerHeight;
      this.margin.left = Math.floor((this.width - this.innerWidth) / 2);
      this.margin.right = this.margin.left;
    }
  }
}
