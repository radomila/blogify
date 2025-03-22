import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import MainLayout from '@/components/Layout/MainLayout';
import { OverlayLoadingProvider } from '@/providers/OverlayLoadingProvider';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';
import { AuthProvider } from '@/providers/AuthProvider';

export const metadata: Metadata = {
  title: 'Blogify',
  description: 'Master thesis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <QueryProvider>
            <OverlayLoadingProvider>
              <Theme>
                <MainLayout>{children}</MainLayout>
              </Theme>
            </OverlayLoadingProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
