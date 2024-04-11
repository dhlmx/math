import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  htmlContent: any;
  pdf: any;
  canvasData = '';
  width = 214; // Letter (mm)
  height = 278;

  exportPDF = (elementId: string, fileName: string): Observable<{ status: string }> => {
    this.htmlContent = document.getElementById(elementId);

    if (!this.htmlContent) {
      console.error('HTML Content not found!');
      return of({ status: 'ERROR: HTML Content not found!'});
    }

    return from(html2canvas(this.htmlContent)).pipe(
      map(canvas => {
        this.height = (canvas.height * this.width) / canvas.width;
        this.canvasData = canvas.toDataURL('image/png');
        return new jsPDF.jsPDF();
      }),
      map(pdf => {
        this.pdf = pdf;
        this.pdf.addImage(this.canvasData, 'PNG', 0, 0, this.width, this.height);
        this.pdf.save(`${fileName}.pdf`);
        return { status: 'OK' };
      })
    );
  }
}
