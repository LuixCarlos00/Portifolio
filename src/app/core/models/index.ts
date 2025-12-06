/**
 * Centralized type definitions for the Portfolio application
 */

// ============================================
// Portfolio & Projects
// ============================================

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

// ============================================
// Certificates
// ============================================

export interface Certificate {
  codigo: number;
  templateImage: string;
  certificateImage: string;
}

// ============================================
// Carousel Images
// ============================================

export interface CarouselImage {
  url: string;
  alt?: string;
}

// ============================================
// Content Sections
// ============================================

export interface ContentSection {
  description: string;
}

// ============================================
// Email Form
// ============================================

export interface EmailFormData {
  from_name: string;
  to_email: string;
  message: string;
}

// ============================================
// Snake Game
// ============================================

export interface Position {
  x: number;
  y: number;
}
