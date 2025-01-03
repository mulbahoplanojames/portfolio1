import { JSX } from "react";

export type NavLinksType = {
  label: string;
  path: string;
};

export type SocialsType = {
  id: number;
  icon: JSX.Element;
  link: string;
};

export type ExpertiseType = {
  id: number;
  name: string;
};

export type ServicesType = {
  id: number;
  title: string;
  description: string;
  icon?: string;
};

export type ProjectType = {
  projectID: number;
  image: string;
  projectTitle: string;
  projectDescription: string;
  technologiesUsed: string[];
  liveDemo: string;
  code: string;
};

export interface PostType {
  slug: string;
  content: string;
  title?: string;
  date?: string;
  description?: string;
  category?: string[];
  tags?: string[];
  image?: string;
  featured?: boolean;
}
