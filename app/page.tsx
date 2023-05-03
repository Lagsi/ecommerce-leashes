import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow min-h-[calc(100vh-8rem)] h-full w-full flex p-32 justify-between items-center text-center  bg-[url('/main-bg-elisa-kennemer.jpg')] bg-center bg-cover ">
      <div className="w-1/4 flex flex-col gap-6">
        <Link
          className="bg-white font-semibold text-stone-500 py-4 text-lg rounded-lg hover:bg-opacity-20 border-2 border-transparent hover:border-white hover:border-2 hover:text-white transition-all ease-in-out"
          href={"/leashes"}
        >
          Shop now
        </Link>
        <Link
          className="bg-white font-semibold text-stone-500 py-4 text-lg rounded-lg hover:bg-opacity-20 border-2 border-transparent hover:border-white hover:border-2 hover:text-white transition-all ease-in-out"
          href={"/about"}
        >
          How we make them
        </Link>
      </div>
      <div className="w-1/3 bg-slate-50 bg-opacity-20 p-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        perferendis eos iusto odit, eligendi alias sed, nobis blanditiis, unde
        quod sunt enim repellat libero? Nisi recusandae aut eius, inventore,
        ipsum iusto alias atque optio natus sint harum enim, consequatur omnis!
        Alias repellendus quas quisquam corporis deserunt odit quam dolores
        porro?
      </div>
    </div>
  );
}
