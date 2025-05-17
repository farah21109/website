import '@/styles/index.css';

export const metadata = {
  title: 'Evergreen College - Excellence in Education',
  description: 'Evergreen College offers world-class education with modern facilities and diverse academic programs. Join us to shape your future through excellence in education.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}