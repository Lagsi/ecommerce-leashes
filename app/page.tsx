import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col w-full items-center text-center  bg-[url('/main-bg-elisa-kennemer.jpg')] bg-center bg-cover ">
      <h1 className="text-6xl mt-6 lg:text-7xl">Homemade Leashes</h1>
      <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-6 items-center p-6 lg:p-24 flex-grow">
        <div className="w-full flex flex-col items-center gap-6 lg:w-1/2">
          <Link
            className="bg-white font-semibold w-3/4 max-w-xs text-stone-500 py-4 text-lg rounded-lg hover:bg-opacity-20 border-2 border-transparent hover:border-white hover:border-2 hover:text-white transition-all ease-in-out"
            href={"/leashes"}
          >
            Shop now
          </Link>
          <Link
            className="bg-white font-semibold  w-3/4 max-w-xs text-stone-500 py-4 text-lg rounded-lg hover:bg-opacity-20 border-2 border-transparent hover:border-white hover:border-2 hover:text-white transition-all ease-in-out"
            href={"/about"}
          >
            How we make them
          </Link>
        </div>
        <div className="w-full max-w-lg lg:w-2/3 p-6 bg-slate-950 bg-opacity-20 backdrop-blur-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          perferendis eos iusto odit, eligendi alias sed, nobis blanditiis, unde
          quod sunt enim repellat libero? Nisi recusandae aut eius, inventore,
          ipsum iusto alias atque optio natus sint harum enim, consequatur
          omnis! Alias repellendus quas quisquam corporis deserunt odit quam
          dolores porro?
        </div>
      </div>
    </div>
  );
}
