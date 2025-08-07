import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import AppLayout from '@/components/layouts/AppLayout';
import { OverlayLoadingProvider } from '@/providers/OverlayLoadingProvider';
import QueryProvider from '@/providers/QueryProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blogify',
  description: 'Master thesis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <AuthProvider>
          <QueryProvider>
            <OverlayLoadingProvider>
              <Theme>
                <AppLayout>{children}</AppLayout>
              </Theme>
            </OverlayLoadingProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
