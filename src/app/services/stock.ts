export interface Stock {
  id?: number;
  name: string;
  sector: string;
  cusip:string;
  price?: number;
  marketCap?: string;
  description?:string;

}
