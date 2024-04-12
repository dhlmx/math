import { jsPDFFormatEnum, jsPDFOrientationEnum, jsPDFUnitEnum } from '../../enums/jsPDF/jsPDF.enum';

export interface IJsPdfOptions {
  orientation: jsPDFOrientationEnum;
  unit: jsPDFUnitEnum;
  format: jsPDFFormatEnum | number[];
  compressPdf: boolean;
}
