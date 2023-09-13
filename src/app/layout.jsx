// Imports the global CSS styles from 'globals.css'
import "./globals.css";

// Metadata for the application (title and description)
export const metadata = {
  title: "HNGx MovieBox",
  description:
    "A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies.",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    // Basic HTML and body structure with language set to 'en'
    <html lang="en">
      <body>
        {/* Renders the child components (page content) */}
        {children}
      </body>
    </html>
  );
}
