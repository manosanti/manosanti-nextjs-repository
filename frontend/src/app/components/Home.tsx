import Image from "next/image";
import myImage from "./../images/lucas-santiago-profile.jpeg";

const Home = () => {
  return (
    <div className="grid grid-cols-2 bg-slate-100 h-screen">
      <div className="container mx-auto my-auto max-w-96">
        <h1 className="text-7xl">
          Frontend<br></br>Developer
        </h1>
        <p className="mx-0 my-2">
          I like to craft solid and scalable frontend products with great user
          experiences<span className="text-purple-400">.</span>
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
          </div>
          <div>
            <p>
              Proven experience building successful products for clients across
              several countries.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-auto align-center">
        <Image
          src={myImage}
          alt="descrição da imagem"
          width={400}
          height={600}
            className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
