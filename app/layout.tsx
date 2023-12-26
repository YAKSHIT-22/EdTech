import "./globals.css";

export const metadata = {
  title: "Ed tech Website",
  description:
    "This is edtech website for students learning and collage classes as a study partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
