
import ContactUs from "@/Component/Contactus/Contact";
import ServiceAbout from "@/Component/ServiceDetails/ServiceAbout";
import ServiceDetails from "@/Component/ServiceDetails/ServiceDetails";
import ServiceHero from "@/Component/ServiceDetails/ServiceHero";
import { services } from "@/Constant/constant";
import { notFound } from "next/navigation";

/* REQUIRED for static generation */
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Services({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ REQUIRED in Next 15

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <div className="mb-4 lg:mb-14">
    <ServiceHero />
    <ServiceAbout />
    <ServiceDetails />
    <ContactUs isService={true}/>
    </div>
  );
}
