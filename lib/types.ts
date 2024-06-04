import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IScreenshot {
  id: number;
  image: string;
}

export interface IMinimumSystemRequirement {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
}

export interface IGame {
  id: number;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  release_date: Date | string;
  short_description: string;
  thumbnail: string;
  title: string;
  minimum_system_requirements?: IMinimumSystemRequirement;
  description: string;
  screenshots: IScreenshot[];
  status: string;
}

export interface INews {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  main_image: string;
  article_content: string;
  article_url: string;
}

export interface IGiveaway {
  id: number;
  title: string;
  keys_left: string;
  thumbnail: string;
  main_image: string;
  short_description: string;
  giveaway_url: string;
}

export interface ISocialLink {
  id: string;
  title: string;
  url: string;
  priority: number;
}

export interface IFilter {
  values: { value: string; label: string }[];
  label: string;
}
