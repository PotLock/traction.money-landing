import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "traction.money",
  description: "Get money for on-chain traction",
  twitter: {
    card: "summary_large_image",
    creator: "@potlock_",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          GeistSans.className,
          "min-h-screen flex flex-col"
        )}
      >
        <Navbar />

        <main className="flex-grow w-full flex justify-center items-center">
          {children}
        </main>

        <footer className="py-4 border-t w-full">
          <div className="max-w-screen-lg mx-auto text-center">
            <p className="text-sm text-black">
              {`With ❤️ by Potluck Labs, Inc. ${new Date().getFullYear()}`}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
