import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import HomeClient from "@/components/HomeClient";
import PageType from "@/components/PageType";

export default function Home() {
  return (
    <>
      <PageType type="home" />
      <Nav />
      <HomeClient />
      <Marquee />
    </>
  );
}
