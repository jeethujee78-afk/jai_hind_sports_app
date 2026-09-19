/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SportType =
  | "Cricket"
  | "Badminton"
  | "Football"
  | "Basketball"
  | "Volleyball"
  | "Fitness"
  | "Athletics & Running"
  | "School Sports";

export interface Product {
  id: string;
  name: string;
  brand: string;
  sport: SportType | string;
  category: string;
  image?: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  availability: "Check Availability" | "Ask on WhatsApp" | "In Store" | "Available on Order";
  status: "Available" | "New Arrival" | "Popular" | "Premium" | "Limited Stock";
  specifications?: Record<string, string>;
  iconSymbol?: string;
  visualGradient?: string;
}

export interface SportDefinition {
  id: string;
  name: SportType;
  iconSymbol: string;
  brands: string[];
  highlight: string;
  itemCount: string;
  description: string;
}

export interface BrandDefinition {
  name: string;
  fullName: string;
  origin: string;
  sports: string[];
  discipline: string;
  description: string;
}
