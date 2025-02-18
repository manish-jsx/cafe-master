export interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

export interface SuccessStory {
  title: string;
  description: string;
  impact: string;
  image: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
}
