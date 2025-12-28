import CornerShape from "@/Constant/constant";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceCard({ item }: any) {
  return (
    <Link href={`/services/${item.slug}`}>
      <div className="group relative overflow-hidden rounded-[28px] bg-black cursor-pointer">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={450}
          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden rounded-tr-[28px] z-20">
          <CornerShape className="h-full w-full" color="#F9FAFD" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

        <div className="absolute inset-0 flex flex-col justify-end py-1 px-4 text-white">
          <div className="transition-all duration-500 group-hover:-translate-y-6">
            <h3 className="text-xl font-semibold tracking-wide">
              {item.title}
            </h3>

            <p className="max-w-[90%] text-sm text-white/90 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {item.desc}
            </p>
          </div>

          <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black transition-all duration-500 group-hover:rotate-45">
            <MdArrowOutward size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}
