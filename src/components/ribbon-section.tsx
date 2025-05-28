import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";

export default function RibbonSection() {
  return (
    <div className="flex items-center md:-mt-50 -mt-80 flex-col justify-center gap-10 overflow-hidden h-[350px] w-full">
      <InfiniteRibbon rotation={5} reverse={true} className="absolute bg-primary-foreground" separator="✦">
        Hmps Pendidikan Informatika Universitas Hamzanwadi
      </InfiniteRibbon>
      <InfiniteRibbon  rotation={-5} className="absolute" separator="✦">
        Hmps Pendidikan Informatika Universitas Hamzanwadi
      </InfiniteRibbon>
    </div>
  );
}
