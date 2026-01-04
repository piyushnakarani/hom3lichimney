import type { Metadata } from "next";
import ContactUs from "@/Component/Contactus/Contact";
import ServiceAbout from "@/Component/ServiceDetails/ServiceAbout";
import ServiceDetails from "@/Component/ServiceDetails/ServiceDetails";
import ServiceHero from "@/Component/ServiceDetails/ServiceHero";
import { capitalize, services } from "@/Constant/constant";
import { notFound } from "next/navigation";

/* REQUIRED for static generation */
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* ✅ DYNAMIC SEO BASED ON SLUG */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const title = capitalize(`${service.title} | Hom3li`);
  const description =
    service.desc ||
    `${service.title} service by Hom3li. Local, family-focused professionals keeping homes warm and safe.`;

  return {
    title,
    description,
  };
}

export default async function Services({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ REQUIRED in Next 15

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mb-4 lg:mb-14">
      <ServiceHero service={service} />
      <ServiceAbout service={service} />
      <ServiceDetails service={service} />
      <ContactUs isService={true} />
    </div>
  );
}
