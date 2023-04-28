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

  return (
    <div className="flex flex-col">
      <h1 className="text-stone-100 text-4xl text-center hidden">
        {leash.title}
      </h1>
      <div className="w-full h-80 relative">
        <Image
          src={leash.imgSrc!}
          fill
          style={{ objectFit: "fill" }}
          alt={`product image of ${leash.title}`}
        />
      </div>
      <div className="p-4">
        <h2 className="text-stone-900 text-xl font-bold">{leash.title}</h2>
        <p className="text-sm">
          (description) Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Repudiandae repellendus maiores mollitia accusamus asperiores.
          Non.
        </p>
        <div>
          {leash.onSale ? (
            <>
              <div>
                <span className="text-xl font-bold text-stone-900">
                  $
                  {leash.saleAmount
                    ? leash.price - leash.saleAmount
                    : leash.price * (1 - leash.salePercent! / 100)}
                </span>
                <span>
                  {leash.saleAmount ? leash.saleAmount : leash.salePercent}
                </span>
              </div>
              <div>
                <span>{leash.price}</span>
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
      </div>
    </div>
  );
}
