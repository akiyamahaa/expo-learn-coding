import { ImageSourcePropType } from "react-native";

export enum EDisplayType {
  NORMAL,
  LARGE,
}

export interface IData {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
  content?: string[];
  videoUrl?: string;
}
