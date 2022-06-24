export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
};

interface Image {
  medium: string;
  original: string;
}

interface Rating {
  average: number;
}
