export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
  featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}