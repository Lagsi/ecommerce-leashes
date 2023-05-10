import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 justify-center items-center min-h-[calc(100vh-8rem)] mb-8">
      <div className="max-w-4xl flex gap-24 items-center">
        <Image
          src={"/pexels-vlada-karpovich-4452511.jpg"}
          alt="picture of rolled up leather"
          height={700}
          width={400}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptas ex aliquid, porro tempora maiores rem amet rerum aperiam
          natus consequuntur harum, nisi molestias iusto non eligendi quam
          corrupti officiis modi earum corporis molestiae atque quasi
          repudiandae. Dignissimos delectus illo, nisi nihil labore repudiandae
          velit eligendi! Ipsam sit a ducimus id eveniet, quibusdam eum fugit
          veniam impedit. Enim consequuntur eveniet, at praesentium, impedit
          magnam dolore dolor expedita fugit nesciunt explicabo ipsa maxime
          alias. Esse quibusdam, nihil, rerum itaque dolorum, ea non impedit
          obcaecati officiis ullam fugiat illum corporis eligendi harum libero?
          Delectus modi qui expedita! Vel voluptatum suscipit quia odio.
        </p>
      </div>
      <div className="max-w-4xl flex flex-row-reverse gap-24 items-center">
        <Image
          src={"/pexels-gustavo-fring-4173278.jpg"}
          alt="picture of rolled up leather"
          height={700}
          width={400}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          praesentium maxime hic, totam et eaque voluptas laborum, minus alias,
          ipsum quae consequuntur! Omnis ad repudiandae temporibus sit dolor
          molestias soluta error in nostrum quisquam. Officiis, molestiae! Odio
          hic eveniet commodi repudiandae vero dolores quam repellat alias
          laboriosam similique, corporis fuga, pariatur harum atque temporibus.
          Eligendi, quaerat inventore repudiandae voluptas assumenda eos,
          adipisci repellat debitis minus mollitia earum ea minima dicta, quod
          vel aperiam dolores nemo suscipit! Non esse, eligendi, ullam
          excepturi, ducimus voluptas possimus illum dicta quos odio quibusdam
          ab.
        </p>
      </div>
    </div>
  );
}
