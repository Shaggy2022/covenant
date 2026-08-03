export interface Guest {
  id: string;

  fullName: string;

  family: string;

  confirmed: boolean;

  guests: number;

  table?: number;

  phone?: string;

  message?: string;

  allergies?: string;
}