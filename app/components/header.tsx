import Link from "next/link";

export default function Header() {
  return (
    <header className="z-50 h-16 fixed bg-stone-500 w-full top-0">
      <nav className="flex gap-5 justify-center items-center h-full">
        <div className="h-full px-2 flex items-center text-white hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500">
          <Link className="text-xl font-semibold" href={"/"}>
            Home
          </Link>
        </div>
        <div className="h-full px-2 flex items-center text-white hover:bg-slate-100 hover:cursor-pointer hover:text-stone-500">
          <Link className="text-xl font-semibold" href={"/leashes"}>
            Leashes
          </Link>
        </div>
      </nav>
    </header>
  );
}
