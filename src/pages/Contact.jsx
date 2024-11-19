import ContactMe from "../components/ContactMe/ContactMe";

export default function Contact() {
  return (
    <section className="mt-12">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex items-center flex-col-reverse gap-8">
          <ContactMe contactPage={true} />
          <img
            src="/images/me-3.jpg"
            alt="About me image"
            className="h-60 rounded-full object-contain border-4 border-yellow-500"
          />
        </div>
      </div>
    </section>
  );
}
