import Banner from "@/components/Banner";
import Accordion from "@/components/FAQ";
import MainFeed from "@/components/MainFeed";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Banner/>
      <MainFeed />
      <Accordion/>
      <Newsletter/>
    </main>
  );
}
