import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative text-center   ">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-primary-50 mb-6 md:mb-8 lg:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 inline-block text-primary-800 text-base md:text-lg lg:text-xl font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
