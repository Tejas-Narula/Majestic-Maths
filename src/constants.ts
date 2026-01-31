import { StudentResult, Feature, NavItem } from '../types';

export const COMPANY_INFO = {
  name: "Majestic Maths",
  tagline: "Where numbers make sense and success adds up!",
  subTagline: "Every child is unique. Hence every child has different Mathematical needs.",
  owner: "Aanchal Narula",
  phone: "9819224432",
  address: "603/4 Drewberry, Everest World, Kolshet Road, Thane",
  email: "contact@majesticmaths.com", // Placeholder
  experienceYears: 10,
  grades: "Grade 7 - 10th",
  boards: "CBSE & ICSE Board",
  admissionYear: "2026-2027"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES: string[] = [
  "Small batches for focused learning",
  "Individual Attention for each student",
  "Customized study plans",
  "Regular revisions & concept clearing",
  "Weekly Tests to track progress",
  "Extra time for weak students",
  "Extra practice other than textbook"
];

export const RESULTS_GRADE_10: StudentResult[] = [
  { name: "Rayhan", score: 99, total: 100 },
  { name: "Soham", score: 95, total: 100 },
  { name: "Aarush", score: 93, total: 100 },
  { name: "Harshit", score: 93, total: 100 },
  { name: "Aalekh", score: 93, total: 100 },
  { name: "Aarya", score: 88, total: 100 },
  { name: "Kedar", score: 88, total: 100 },
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/800/600?random=4",
];