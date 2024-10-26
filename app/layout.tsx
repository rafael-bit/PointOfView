import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./actions/getCurrentUser";
import { EdgeStoreProvider } from "@/lib/edgestore";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Point Of View",
  description: "Point Of View is a place to share your thoughts with the world and understand other pespectives.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <AuthContext>
        <EdgeStoreProvider>
          <body
            className={`${roboto.className} overflow-x-hidden bg-light`}
          >
            <Navbar user={user as any} />
            {children}
            <Footer />
          </body>
        </EdgeStoreProvider>
      </AuthContext>
    </html>
  );
}
