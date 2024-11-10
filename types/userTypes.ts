export interface userTypes {
  id: string;
  name: string | null;
  image: string | null;
  email: string | null;
  emailVerified: Date | null;
  column: boolean | null;
}