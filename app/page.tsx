import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AmuseBouche from "../components/AmuseBouche";
import ProjectsPreview from "../components/ProjectsPreview";
import AboutSnapshot from "../components/AboutSnapshot";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AmuseBouche />
      <ProjectsPreview />
      <AboutSnapshot />
      <ContactSection />
    </Layout>
  );
}
