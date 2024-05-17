import Image from "next/image";
import Link from "next/link.js";

const Navbar = () => {
  return (
    <nav className="bg-transparent border-transparent border-b-2 p-5 relative transition-all items-center flex justify-between container w-full">
      <Link href="/" target="_blank" className="flex flex-col justify-center text-xl font-bold">
        <span className="flex flex-nowrap items-end gap-2 pb-1">
          <Image src={"/icon.png"} height={32} width={32} alt="PotLock logo" />
          <span className="text-nowrap">traction.money</span>
        </span>
      </Link>

      <div className="dropdown dropdown-hover dropdown-end">
        {/* <div
          tabIndex={0}
          role="button"
          className="btn btn-link text-lg decoration-dotted underline-offset-2"
        >
          Products
        </div> */}
        <Link href="/learn" target="_blank" className="flex items-end">
              {/* <Image src={"/nadabot.png"} height={24} width={24} alt="nadabot" /> */}
              <span>Nadabot</span>
            </Link>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/bot" target="_blank" className="flex items-end">
              <Image src={"/nadabot.png"} height={24} width={24} alt="nadabot" />
              <span>Nadabot</span>
            </Link>
          </li>

          <li>
            <Link href="/potlock" target="_blank" className="flex items-end">
              <Image src={"/icon.png"} height={24} width={24} alt="PotLock logo" />
              <span>PotLock</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
