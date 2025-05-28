import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BoxReveal } from "../ui/box-reveal";

export function MainManagment() {
  const MainManagmentMember = [
    {
      quote:
        "Memimpin dengan aksi bukan hanya kata-kata, tetapi juga tindakan nyata. Mari kita buktikan bersama!",
      name: "Ahmad Yusril Aziz Maulana",
      designation: "Ketua Umum HMPS PI 2025-2026",
      src: "/pengurus/yusril.png",
      instagram: "/maulidihidayat",
    },
    {
      quote:
        "Tertib administrasi tertib organisasi. Mari kita tingkatkan kinerja HMPS PI 2025-2026!",
      name: "Ainul Lutfi",
      designation: "Sekertaris Umum HMPS PI 2025-2026",
      src: "/pengurus/lutfi.png",
      instagram: "/maulidihidayat",
    },
    {
      quote: "Urusan dana? Serahkan pada ahlinya!",
      name: "Ria Aprilia",
      designation: "Bendahara Umum HMPS PI 2025-2026",
      src: "/pengurus/ria.png",
      instagram: "/maulidihidayat",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <BoxReveal>
          <h2 className="mx-auto text-3xl md:text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-bl from-primary to-primary-foreground">
            Pengurus Inti Hmps PI
          </h2>
        </BoxReveal>
      </div>
      <p className="text-sm md:text-lg text-center text-neutral-600 dark:text-neutral-400  ">
        Get in touch sama mereka yuk!
      </p>
      <AnimatedTestimonials testimonials={MainManagmentMember} />
    </>
  );
}
