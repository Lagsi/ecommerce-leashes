import AddToCart from "@/app/components/addToCart";
import prisma from "@/lib/prisma";
import Image from "next/image";

const getData = async (id: string) => {
  const leash = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return leash;
};

export default async function LeashPage({
  params,
}: {
  params: { id: string };
}) {
  const leash = await getData(params.id);
  console.log(leash);

  if (!leash) {
    return (
      <div className="flex-grow">
        <h1>No leash found</h1>
      </div>
    );
  }
  leash.onSale = true;
  leash.salePercent = 50;

  return (
    <>
      <div className="flex flex-col mx-auto min-h-[calc(100vh-8rem)] max-w-lg lg:flex-row lg:max-w-6xl lg:justify-center lg:items-center">
        <div className="w-full relative md:rounded-b-lg lg:max-w-lg">
          <img
            src={leash.imgSrc!}
            alt={`product image of ${leash.title}`}
            className="sm:rounded-b-lg lg:rounded-lg"
          />
        </div>
        <div className="p-4 flex flex-col gap-6 lg:max-w-md">
          <h1 className="text-stone-900 text-xl font-bold lg:text-4xl">
            {leash.title} - {leash.color}
          </h1>
          <p className="text-sm">
            (description) Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Repudiandae repellendus maiores mollitia accusamus asperiores.
            Non.
          </p>
          <div className="flex justify-between">
            {leash.onSale ? (
              <>
                <div className="flex gap-3 items-center">
                  <span className="text-xl font-bold text-stone-900">
                    $
                    {leash.saleAmount
                      ? (leash.price - leash.saleAmount).toFixed(2)
                      : (leash.price * (1 - leash.salePercent! / 100)).toFixed(
                          2
                        )}
                  </span>
                  <span className="bg-teal-800 text-teal-950 px-2 rounded-md font-semibold text-sm">
                    {leash.saleAmount
                      ? leash.saleAmount
                      : leash.salePercent + "%"}
                  </span>
                </div>
                <div>
                  <span className="text-stone-800 font-bold line-through">
                    ${leash.price}
                  </span>
                </div>
              </>
            ) : (
              <div>
                <span className="text-xl font-bold text-stone-900">
                  ${leash.price}
                </span>
              </div>
            )}
          </div>
          <AddToCart />
        </div>
      </div>
    </>
  );
}