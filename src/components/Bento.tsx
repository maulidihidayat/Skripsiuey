import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { TextAnimate } from "./ui/text-animate";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={0.8}
        as="h2"
        once
        className="text-lg px-4 max-w-7xl mx-auto md:text-[3.5rem] py-2 font-bold text-center text-primary"
      >
        {`Yuk jadi bagian dari kami`}
      </TextAnimate>

      <TextAnimate
        animate="blurIn"
        delay={0.2}
        duration={0.8}
        by="character"
        as="p"
        className="text-sm md:text-3xl font-bold text-center relative -z-1 text-foreground/70 mx-auto pb-10"
      >
        {`Devisi yang siap mewadahi kamu`}
      </TextAnimate>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Devisi Sumber Daya Manusia",
    description: "Membangun tim yang kuat dmulai dari SDM yang hebat",
    header: "/pengurus/sdm.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Devisi Humas",
    description:
      "Suar kita, Wajah kita | Devisi Humas menjadi garda tedepan dalam menyambung informasi dan branding HMPS PI",
    header: "/pengurus/humas.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Devisi Minat dan Bakat",
    description:
      "Potensi dan kretivias dikawal Devisi Minat dan Bakat | Tempat ekspresi, prestasi dan inovasi berkumpul dalam satu wadah",
    header: "/pengurus/minkat.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Devisi IT",
    description:
      "Teknologi bukan hanya alat, tapi kekuatan | Devisi IT hadir sebagai pilar digitalisasi dalam organisasi",
    header: "/pengurus/it.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kabinet Zeta",
    description:
      "Dalam konteks ilmiah Zeta sering dikaitkan dengan konsep yang kompleks dan penting yang menunjukkan keseimbangan , tabilitas dan perhitungan presisi",
    header: "/pengurus/zeta.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
