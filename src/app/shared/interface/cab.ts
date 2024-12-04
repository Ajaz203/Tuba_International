import { images } from "./hotel";

export interface cabs{
  cab: cab[]
}

export interface cabDetails{
  cabGallery: cabGallery[];
  cabDetails: cabDetail[]
}

export interface cab{
  id: number;
  carName: string;
  carImage: string;
  carImages: images[];
  carType: string;
  price: number;
  fare: number;
  per_km: number;
  passenger: number;
  luggage: number;
  gearbox: string;
  carOption: string;
  rating: number;
  category: string;
  tags: string[];
}

export interface pagination{
  totalItems: number,
  currentPage: number,
  pageSize: number,
  totalPages: number,
  startPage: number,
  endPage: number,
  startIndex: number,
  endIndex: number,
  pages: number[],
}

export interface cabGallery{
  id: number;
  image: string;
  type: string;
}

export interface cabDetail{
  title: string;
  details: data[]
}

export interface data{
  data: string;
}