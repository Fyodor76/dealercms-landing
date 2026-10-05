import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Clients from "./components/Clients";
import Approach from "./components/Approach";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./lib/site";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Products />
        <Benefits />
        <Clients />
        <Approach />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
