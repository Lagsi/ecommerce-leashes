import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex gap-4 items-center justify-center h-16 left-8 text-stone-100">
      <div>
        <a href="https://github.com/Lagsi/ecommerce-leashes">
          <FaGithub size={35} />
        </a>
      </div>
      <div className="flex divide-x divide-stone-100">
        <a
          className="text-center px-3 font-semibold hover:underline"
          href="https://twitter.com/jeppehauman"
        >
          Jeppe
        </a>
        <a
          className="text-center px-3 font-semibold hover:underline"
          href="https://twitter.com/NimTheZee"
        >
          Nima
        </a>
      </div>
    </footer>
  );
}
