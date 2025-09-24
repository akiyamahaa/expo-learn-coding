import { ImageSourcePropType } from "react-native";

export enum EData {
  HEADER_SLIDE,
  COMMON,
  PLANET,
  ALL,
}

export interface IContent {
  title?: string;
  body?: string[];
  image?: string;
}

export interface IData {
  id: string;
  image: ImageSourcePropType | string;
  title: string;
  description: string;
  content: IContent[];
}

export interface IObjectData {
  [key: string]: IData;
}
