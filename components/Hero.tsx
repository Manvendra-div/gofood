import Image from "next/image";
import heroIMG from "@/assets/hero.png";
export default function Hero() {
  return (
    <section className="relative flex md:flex-row flex-col md:justify-center w-full md:items-center bg-gray-100 h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full md:w-[60%] h-full">
        <div className="flex flex-col justify-between w-full md:w-[80%] 2xl:w-[800px] p-3 space-y-1 md:space-y-3 z-10">
          <span className="text-lg font-bold">Discount up to 20%</span>
          <h1 className="capitalize text-3xl md:text-5xl font-bold leading-tight">
            buy fresh and organic grocery food
          </h1>
          <span className="leading-relaxed text-gray-700 md:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            autem commodi quaerat? Distinctio architecto, mollitia quidem.
          </span>
          <div className="w-[98%] md:w-[70%] flex justify-between items-center pt-6">
            <button className="flex items-center bg-green-800 hover:bg-green-700 px-6 py-3 rounded-full text-sm text-white font-bold space-x-1 transition duration-300">
              <span>SHOP NOW</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            <span className="flex justify-between items-center space-x-3">
              <div className="flex flex-col justify-between">
                <p className="text-3xl">35k +</p>
                <p className=" text-gray-400">Users</p>
              </div>
              <div className="w-[1px] h-10 bg-gray-400" />
              <div className="flex flex-col justify-between">
                <p className="text-3xl">35k +</p>
                <p className=" text-gray-400">Users</p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden relative md:flex flex-col justify-center items-center w-full md:w-[40%] bg-green-800 h-full">
        <Image
          src={heroIMG}
          alt="Salad"
          className="absolute md:-left-32 left-4"
          width={500}
          height={200}
        />
      </div>
      <Image
        src={heroIMG}
        alt="Salad"
        className="md:hidden absolute opacity-40 top-[50%] translate-y-[-50%] right-[0%]"
        width={500}
        height={500}
      />
    </section>
  );
}
