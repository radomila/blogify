import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import Layout from "@/components/layout";
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
          <Layout children={children} />
        </Theme>
      </body>
    </html>
  );
}
