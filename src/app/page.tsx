import { About, Contact, Footer, Gallery, Story} from "@/components";

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
    </>
  );
}
