import "./globals.css";

export const metadata = {
  title: "Grammar Triangles",
  description: "Grammar Triangles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
