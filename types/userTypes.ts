export type userTypes = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | string | null;
  image: string | null;
  column: boolean;
} | null