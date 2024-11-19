import AboutMe from "../components/AboutMe/AboutMe";

export default function About() {
  return (
    <section className="mt-12">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex items-center flex-col-reverse md:flex-row gap-8">
          <AboutMe aboutPage={true} />
          <img
            src="/images/me-2.jpg"
            alt="About me image"
            className="h-60 rounded-full object-contain border-4 border-yellow-500"
          />
        </div>
      </div>
    </section>
  );
}
