import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import MainLayout from "@/components/Layout/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blogify",
  description: "Master thesis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <MainLayout>{children}</MainLayout>
        </Theme>
      </body>
    </html>
  );
}
