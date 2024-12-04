export interface flightModern{
  destination: destination[];
  airlines: airlines[];
  category: number[];
  flightDetails: number[];
  topDestination: topDestination[];
  blog: number[];
}

export interface destination{
  id: number;
  country: string;
  city: string;
  description: string;
  image: string;
  price: number;
}

export interface airlines{
  id: number;
  airlineName: string;
  title: string;
  subTitle: string;
}

export interface topDestination{
  id: number;
  title: string;
  image: string;
  flights: flights[];
}

export interface flights{
  id: number;
  country: string;
  price: number;
  airlines: number;
}
