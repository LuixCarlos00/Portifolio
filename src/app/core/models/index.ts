export interface PortfolioItem {
  codigo: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface MediaUrl {
  url: string;
}

export interface PortfolioExample {
  codigo: number;
  title: string;
  description: string;
  imageUrl: MediaUrl[];
  videoUrl: MediaUrl[];
}

export interface Certificate {
  codigo: number;
  templateImage: string;
  certificateImage: string;
}

export interface CarouselImage {
  url: string;
  alt?: string;
}

export interface ContentSection {
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EmailFormData {
  from_name: string;
  to_email: string;
  message: string;
}

export interface Position {
  x: number;
  y: number;
}
