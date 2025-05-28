import { ContainerScroll } from "./ui/container-scroll-animation";
import UserList from "./UserList";
import Image from "next/image";

export function ManagmentDemo() {
  return (
    <div className="flex flex-col overflow-hidden content-center items-center justify-center place-content-center -mb-25">
      <span className="bg-yellow-400/40 p-20 text-white rounded-full absolute right-0 -z-40 blur-3xl" />
      <span className="bg-blue-300/40 p-20 text-white rounded-full absolute left-0 -z-40 blur-3xl"/>
      <Image src={"/avatar.svg"} alt="avatar" width={50} height={50} className=" absolute right-40  -z-40"/>
      <Image src={"/Emoticon Vibes (1).svg"} alt="avatar" width={50} height={50} className=" absolute left-40 top-50 -z-40"/>
      <ContainerScroll
        titleComponent={
          <>
            <UserList />
            <h1 className="max-w-4xl text-[48px] font-sans leading-[1.3] font-bold text-center">
              Kenalan sama HMPS <br /> Pendidikan Informatika yang <br />{" "}
              <span className="bg-primary text-white">
                siap bikin perubahan!
              </span>
            </h1>
            <p className="text-[28px] pt-2">
              Kepengurusan Zeta masa bakti 2025/2026
            </p>
          </>
        }
        children={undefined}
      ></ContainerScroll>
    </div>
  );
}
