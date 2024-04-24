import type { Metadata } from "next";
import { NavMenu, Toast } from "@/ui";
import { Providers } from "../Providers";

export const metadata: Metadata = {
  title: "Super app",
  description: "Generated by create next app",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <Toast />
      <div className="container p-2">
        <NavMenu />
        {children}
      </div>
    </Providers>
  );
}
