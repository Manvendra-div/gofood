import CategorySection from "@/components/CategorySection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden min-h-full">
      <Hero/>
      <CategorySection/>
    </main>
  );
}
