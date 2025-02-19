import { About, Contact, Footer, Gallery, Story, ButtonGoTop} from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Story />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ButtonGoTop />
    </>
  );
}
