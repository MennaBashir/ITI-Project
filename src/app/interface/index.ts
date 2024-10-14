export interface IProduct {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  rate: string[];
  tyeCategory: string;
  nameCategory: string;
  suk: string;
  Tags: string[];
  introduction: string;
  features: string[];
  typeDeals?: string;
  stockStatus: boolean;
  salePrice: number;
  oldPrice: number;
  mainImage: string;
  hoverImage: string;
  previewImage1: string;
  previewImage2: string;
  previewImage3: string;
  quantity: number;
}
export interface IRegister {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkPolicy: boolean;
}
