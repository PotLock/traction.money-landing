import { GitHubIcon } from "@/components/icons/GitHubIcon.jsx";
import { Marquee } from "@/components/Marquee.jsx";
import Link from "next/link.js";
import { Balancer } from "react-wrap-balancer";

const keywords = [
  { text: "User Onboarding", color: "#e2bbce" },
  { text: "User Rentetion", color: "#aabadb" },
  { text: "Transaction Fees", color: "#e9c7a1" },
  { text: "Verified Contract Source Code", color: "#acdcb4" },
  { text: "User Ecosystem Conversion", color: "#f0e182" },
  { text: "Developer Adoption", color: "#98cfb8" },
  { text: "Verified Humans", color: "#baaac7" },
  { text: "High Value Users", color: "#e2bbce" },
  { text: "Daily Active Users", color: "#aabadb" },
  { text: "Contracts Forked", color: "#e9c7a1" },
  { text: "Contract TVL", color: "#acdcb4" },
  { text: "Transaction + Asset Velocity", color: "#f0e182" },
  { text: "Life Time Value", color: "#98cfb8" },
  { text: "Project Token Adoption", color: "#98cfb8" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 px-3 md:px-4">
      <Balancer as="h1" className="slide-in-top text-4xl sm:text-5xl lg:text-7xl font-semibold">
        🚀 traction.money
      </Balancer>

      <Balancer
        as="p"
        className="slide-in-top animate-delay-3 text-base sm:text-xl max-w-4xl mx-auto"
      >
        Get money for on-chain traction
      </Balancer>

      <div className="slide-in-top animate-delay-3">
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/learn"
            target="_blank"
            className="bg-primary hover:bg-gray-800 border border-gray-600 flex items-center space-x-2 text-white font-medium text-sm sm:text-base rounded-lg py-1.5 px-3"
          >
            Learn More
          </Link>

          <Link
            href="/discuss"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-800 border border-gray-600 flex items-center space-x-2 text-white font-medium text-sm sm:text-base rounded-lg py-1.5 px-3"
          >
            {/* <GitHubIcon className="w-5 h-5" /> */}
            <span className="text-white">Discuss</span>
          </Link>
        </div>
      </div>

      <Marquee {...{ keywords }} className="w-full slide-in-top animate-delay-3" />
    </div>
  );
}
