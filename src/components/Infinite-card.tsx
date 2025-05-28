"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextAnimate } from "./ui/text-animate";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[60rem] rounded-md flex flex-col antialiased bg-white dark:bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-30">
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={0.8}
        as="h2"
        once
        className="text-lg px-4 max-w-7xl mx-auto md:text-[3.5rem] py-2 font-bold text-center text-primary"
      >
        {`Feedback dan  kesan pesan`}
      </TextAnimate>
      <TextAnimate
        animation="blurIn"
        delay={0.2}
        duration={0.8}
        by="character"
        as="p"
        className="text-sm md:text-3xl font-bold text-center relative text-foreground/70 mx-auto pb-10"
      >
        {`dari teman teman Hmps Pendidikan Informatika`}
      </TextAnimate>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Seru banget bisa gabung, nimbrung, dan berproses bareng sama kalian di HMPS Pendidikan Informatika! Banyak banget momen asik yang bikin betah. Semoga next time bisa ketemu lagi dan ngelakuin hal seru bareng lagi. Keep in touch ya, teman-teman!”",
    name: "Anggi",
    picture: {
      src: "/avatar.svg",
      alt: "Anggi",
      width: 48,
      height: 48,
    },
  },
  {
    quote:
      "“Gak nyangka bisa dapet pengalaman se-seru ini bareng HMPS Pendidikan Informatika! Dari ngobrol-ngobrol santai sampai belajar hal baru bareng, semuanya berkesan banget. Semoga ini bukan pertemuan terakhir, dan kita bisa terus terhubung buat berbagi cerita dan keseruan lainnya. Sampai jumpa di lain kesempatan, teman-teman!”",
    name: "Andin",
    picture: {
      src: "/avatar.svg",
      alt: "Andin",
      width: 48,
      height: 48,
    },
  },
  {
    quote: "“Dari awal cuma mau nimbrung, eh malah jadi betah bareng HMPS Pendidikan Informatika! Banyak momen seru, tawa, dan pengalaman berharga yang bikin susah move on. Semoga nanti ada kesempatan buat ngumpul lagi dan bikin kenangan baru. Sampai ketemu lagi, guys! ”",
    name: "Dita",
    picture: {
      src: "/avatar.svg",
      alt: "Dita",
      width: 48,
      height: 48,
    },
  },
  {
    quote:
      "“Gabung bareng HMPS Pendidikan Informatika tuh rasanya kayak masuk ke keluarga baru—seru, rame, dan penuh cerita! Banyak pengalaman berharga yang bikin susah dilupain. Semoga kita bisa ketemu lagi di lain waktu buat nambah keseruan baru. Stay awesome, guys!”",
    name: "Putri",
    picture: {
      src: "/avatar.svg",
      alt: "Putri",
      width: 48,
      height: 48,
    },
  },
  {
    quote:
      "“Seru banget bisa jadi bagian dari keseruan bareng HMPS Pendidikan Informatika! Dari canda tawa sampai belajar hal baru bareng, semuanya berkesan banget. Semoga ini bukan akhir, tapi awal dari lebih banyak cerita bareng. Sampai jumpa di lain waktu, geng!”",
    name: "Gea",
    picture: {
      src: "/avatar.svg",
      alt: "Gea",
      width: 48,
      height: 48,
    },
  },
  {
    quote:
      "“Seru banget bisa jadi bagian dari keseruan bareng HMPS Pendidikan Informatika! Dari canda tawa sampai belajar hal baru bareng, semuanya berkesan banget. Semoga ini bukan akhir, tapi awal dari lebih banyak cerita bareng. Sampai jumpa di lain waktu, geng!”",
    name: "Agung",
    picture: {
      src: "/avatar.svg",
      alt: "Agung",
      width: 48,
      height: 48,
    },
  },
];
