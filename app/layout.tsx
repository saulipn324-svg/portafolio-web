import type { Metadata } from 'next';
import './globals.css';
const title = 'Saul Ramos Sanchez | Desarrollador de software';
const description = 'Desarrollador de software con experiencia en Java, Spring Boot, Oracle y desarrollo web. Conoce mi trayectoria y mis próximos proyectos personales.';
export const metadata: Metadata = {
  metadataBase: new URL('https://dev-portafolio-primera-version.saulipn324.chatgpt.site'),
  title, description, icons: { icon: '/favicon.svg' },
  openGraph: { title, description, locale: 'es_MX', type: 'website', images: [{url: '/og.png', width: 1536, height: 1024, alt: 'Saul Ramos Sanchez — Java, Backend y Desarrollo web'}] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] }
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="es"><body>{children}</body></html>; }
