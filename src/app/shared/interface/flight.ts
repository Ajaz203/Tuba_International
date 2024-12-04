export interface flights{
  flight: flight[]
}

export interface flight{
  id: number;
  airline: string;
  img: string;
  arrive: string;
  departureTime: string;
  stop: string;
  stopTime: string;
  departure: string;
  arriveTime: string;
  fare: string;
  price: number;
  activeFrom?: boolean;
  activeTo?: boolean;
  tags: string[];
}


export interface flightMeal{
  id: number;
  title: string;
  description: string;
  price: number;
  mealType: string;
  active?: boolean;
  value: number;
}

export interface additionalLuggage{
  id: number;
  title: string;
  price: number;
  active?: boolean;
  value: number;
}
