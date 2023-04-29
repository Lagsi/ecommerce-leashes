import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="z-50 h-16 fixed bg-stone-500 border-b border-stone-600 shadow-md w-full top-0">
      <div className="h-16 relative">
        <nav className="flex gap-5 justify-center items-center h-full">
          <div className="h-full px-2 flex items-center text-stone-100 hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500">
            <Link className="text-xl font-semibold" href={"/"}>
              Home
            </Link>
          </div>
          <div className="h-full px-2 flex items-center text-stone-100 hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500">
            <Link className="text-xl font-semibold" href={"/leashes"}>
              Leashes
            </Link>
          </div>
        </nav>
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <FaShoppingCart size={24} className="hover:cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
