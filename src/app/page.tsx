import { About, Contact, Footer, Gallery, ButtonGoTop} from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ButtonGoTop />
    </>
  );
}
