import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "traction.money",
  description:
    "Get money for on-chain traction",
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
          "w-screen h-screen", // Legacy browser support
          "w-svw h-svh flex flex-col items-center justify-between"
        )}
      >
        {/* <Navbar /> */}

        <main className="w-full">{children}</main>

        <footer className="py-4 border-t w-full">
          <div className="wrapper text-center">
            <p className="text-sm text-black">
              {`With ❤️ by Potluck Labs, Inc. ${new Date().getFullYear()}`}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
