import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] overflow-hidden flex flex-col w-full items-center text-center  bg-center bg-cover relative">
      <div className="-z-50 h-[calc(100vh+10vh)] w-screen absolute min-w-[1100px] bg-[url('/main-bg-elisa-kennemer123.jpg')] bg-contain bg-right bg-no-repeat"></div>

      <div className="lg:ml-auto lg:mr-[50vw]">
        <h1 className="text-6xl mt-6 text-stone-950 lg:text-9xl text-center">
          Homemade <br />{" "}
        </h1>
        <h1 className="lg:-mr-[35vw] lg:ml-auto text-6xl mt-6 lg:text-9xl bg-gradient-to-b from-[#d59d74] via-[#a96746] to-[#96412d] text-transparent bg-clip-text">
          Leashes
        </h1>
        <div className="flex flex-col lg:flex-row w-full lg:justify-center gap-6 items-center p-6 lg:p-24 flex-grow">
          <div className="w-full flex flex-col items-center lg:items-start gap-6 lg:w-full">
            <Link
              className="bg-white  font-semibold w-3/4 max-w-xs text-stone-500 py-4 text-lg rounded-lg hover:bg-opacity-20 border-2 border-transparent hover:border-white hover:border-2 hover:text-white transition-all ease-in-out"
              href={"/leashes"}
            >
              Shop now
            </Link>
            <Link
              className="bg-white lg:ml-auto font-semibold  w-3/4 max-w-xs text-stone-500 py-4 text-lg rounded-lg hover:bg-opacity-20 border-2 border-transparent hover:border-white hover:border-2 hover:text-white transition-all ease-in-out"
              href={"/about"}
            >
              How we make them
            </Link>
          </div>
          {/* <div className="w-full max-w-lg lg:w-2/3 p-6 bg-slate-950 bg-opacity-20 backdrop-blur-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            perferendis eos iusto odit, eligendi alias sed, nobis blanditiis, unde
            quod sunt enim repellat libero? Nisi recusandae aut eius, inventore,
            ipsum iusto alias atque optio natus sint harum enim, consequatur
            omnis! Alias repellendus quas quisquam corporis deserunt odit quam
            dolores porro?
          </div> */}
        </div>
      </div>
    </div>
  );
}
