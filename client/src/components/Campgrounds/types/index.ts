export declare type CampgroundType = {
  id: number;
  title: string;
  location: string;
  geometry: {
    id: number;
    lng: number;
    lat: number;
    type: string;
  };
  author: {
    username: string;
    firstName: string;
    lastName: string;
  };
  images: [
    {
      url: string;
    }
  ];
  description: string;
  price: number;
  reviews: {
    id: number;
    rating: number;
  };
};
