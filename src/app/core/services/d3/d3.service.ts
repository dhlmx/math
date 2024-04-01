import { ID3 } from "./id3";

export class D3Helper {

  width = 0;
  height = 0;
  marginBottom = 0;
  marginLeft = 0;
  marginRight = 0;
  marginTop = 0;

  svg = null;

  constructor(source: ID3) {
    if (source) {
      this.height = source.height;
      this.marginBottom = source.marginBottom ?? 0;
      this.marginLeft = source.marginLeft ?? 0;
      this.marginRight = source.marginRight ?? 0;
      this.marginTop = source.marginTop ?? 0;
      this.width = source.width;
    }
  }



}

/*
suits =

  Array(28) [
  0:


  Object {source: "Microsoft", target: "Amazon", type: "licensing"}
  1:


  Object {source: "Microsoft", target: "HTC", type: "licensing"}
  2:


  Object {source: "Samsung", target: "Apple", type: "suit"}
  3:


  Object {source: "Motorola", target: "Apple", type: "suit"}
  4:


  Object {source: "Nokia", target: "Apple", type: "resolved"}
  5:


  Object {source: "HTC", target: "Apple", type: "suit"}
  6:


  Object {source: "Kodak", target: "Apple", type: "suit"}
  7:


  Object {source: "Microsoft", target: "Barnes & Noble", type: "suit"}
  8:


  Object {source: "Microsoft", target: "Foxconn", type: "suit"}
  9:


  Object {source: "Oracle", target: "Google", type: "suit"}
  10:


  Object {source: "Apple", target: "HTC", type: "suit"}
  11:


  Object {source: "Microsoft", target: "Inventec", type: "suit"}
  12:


  Object {source: "Samsung", target: "Kodak", type: "resolved"}
  13:


  Object {source: "LG", target: "Kodak", type: "resolved"}
  14:


  Object {source: "RIM", target: "Kodak", type: "suit"}
  15:


  Object {source: "Sony", target: "LG", type: "suit"}
  16:


  Object {source: "Kodak", target: "LG", type: "resolved"}
  17:


  Object {source: "Apple", target: "Nokia", type: "resolved"}
  18:


  Object {source: "Qualcomm", target: "Nokia", type: "resolved"}
  19:


  Object {source: "Apple", target: "Motorola", type: "suit"}
  20:


  Object {source: "Microsoft", target: "Motorola", type: "suit"}
  21:


  Object {source: "Motorola", target: "Microsoft", type: "suit"}
  22:


  Object {source: "Huawei", target: "ZTE", type: "suit"}
  23:


  Object {source: "Ericsson", target: "ZTE", type: "suit"}
  24:


  Object {source: "Kodak", target: "Samsung", type: "resolved"}
  25:


  Object {source: "Apple", target: "Samsung", type: "suit"}
  26:


  Object {source: "Kodak", target: "RIM", type: "suit"}
  27:


  Object {source: "Nokia", target: "Qualcomm", type: "suit"}
  columns:


  Array(3) ["source", "target", "type"]
]
*/
