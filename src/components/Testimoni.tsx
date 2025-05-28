import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BoxReveal } from "./ui/box-reveal";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
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
    {
      quote:
        "Kepemimpinan yang baik adalah tentang mendengarkan dan memahami kebutuhan tim.",
      name: "Farihatun Aini",
      designation: "Kepala Bidang SDM",
      src: "/pengurus/aini.png",
      instagram: "/maulidihidayat",
    },
    {
      quote:
        "Kreativitas adalah kunci untuk menciptakan inovasi yang berdampak.",
      name: "M.Faqih Aljumhuri",
      designation: "Kepala Bidang Humas",
      src: "/pengurus/faqih.png",
      instagram: "/maulidihidayat",
    },
    {
      quote:
        "Kepemimpinan yang baik adalah tentang mendengarkan dan memahami kebutuhan tim.",
      name: "Laela Febriana",
      designation: "Kepala Bidang Minkat",
      src: "/pengurus/laela.png",
      instagram: "/maulidihidayat",
    },
    {
      quote:
        "Kreativitas adalah kunci untuk menciptakan inovasi yang berdampak.",
      name: "Arif Suriadi",
      designation: "Kepala Bidang IT",
      src: "/pengurus/arrif.png",
      instagram: "/maulidihidayat",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center pt-20">
        <BoxReveal>
          <h2 className="mx-auto text-3xl md:text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-bl from-primary to-primary-foreground">
            Kepengurusan Hmps PI
          </h2>
        </BoxReveal>
      </div>
      <p className="text-sm md:text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 mx-auto">
        Teman-teman bakal dipandu sama kakak-kakak kece ini loh!!
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
