
export interface tourTrending{
  deals: number[];
  continents: continents[];
  themes: themes[];
  testimonial: number[];
}

export interface deals{
  deals: deal[];
}
export interface deal{
  id: number;
  title: string;
  bg_image: string;
  details: details[]
}

export interface details{
  id: number;
  title: string;
  subTitle: string;
  image: string;
  price: number;
  discountPrice: number;
  rating?: number;
  tag?: boolean;
  tagTitle?: string;
  tagClass?: string;
}

export interface continents{
  id: number;
  tourName: string;
  image: string;
  price: number;
}

export interface themes{
  id: number;
  title: string;
  image: string;
  price: number;
}

