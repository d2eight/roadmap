import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '../lib/utils';
import Providers from '../providers';
import { Header } from '../components/custom-ui/Header';
import { Toaster } from '../components/ui/sonner';
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'RoadmapAI',
    description: 'Generate ai roadmaps with RoadmapAI',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
};

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cn(
                'h-full',
                'antialiased',
                geistSans.variable,
                geistMono.variable,
                'font-sans',
                'font-sans',
                geist.variable,
            )}
        >
            <body className="min-h-screen bg-background font-sans antialiased">
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="mt-[70px] max-w-[1400px] w-full mx-auto">
                            {children}
                        </main>
                    </div>
                    <Toaster richColors />
                </Providers>
            </body>
        </html>
    );
}
