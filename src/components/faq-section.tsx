"use client";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";
import { BoxReveal } from "./ui/box-reveal";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200 dark:border-white/[0.2] rounded-xl overflow-hidden bg-white dark:bg-black mb-4 shadow-input dark:shadow-primary/20 transition-all duration-200 hover:shadow-lg">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
        whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <h3 className="text-sm md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-neutral-500"
        >
          <IconChevronDown size={20} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-neutral-600 dark:text-neutral-400 md:text-sm text-xs bg-neutral-50 dark:bg-neutral-900/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -400px 0px",
  });

  return (
    <div
      className="pb-48 px-4 max-w-5xl mx-auto min-h-screen pt-40"
      id="faq"
      ref={containerRef}
    >
      <div className="flex flex-col items-center">
        <BoxReveal>
          <h2 className="mx-auto text-3xl md:text-7xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-bl from-primary to-primary-foreground">
            FAQ
          </h2>
        </BoxReveal>
      </div>
      <p className="text-sm md:text-lg text-center text-neutral-600 dark:text-neutral-400 mb-12 mx-auto">
        Beberapa pertanyaan yang sering ditanyakan oleh para calon anggota Hmps
        Pendidikan Informatika
      </p>

      <div className="space-y-2 md:space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.15, // Sequential delay based on item index
                      ease: [0.22, 1, 0.36, 1], // Custom spring-like easing
                    },
                  }
                : {}
            }
          >
            <FAQItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const faqItems = [
  {
    question: "Apa sih Hmps Pendidikan Informatika itu?",
    answer:
      "HMPS Pendidikan Informatika Universitas Hamzanwadi adalah Himpunan Mahasiswa Program Studi yang jadi tempat berkumpulnya mahasiswa Pendidikan Informatika buat belajar bareng, saling support, dan ngembangin diri lewat berbagai kegiatan positif. Di sini, kita gak cuma dapet ilmu, tapi juga pengalaman, relasi, dan pastinya momen seru bareng keluarga Pendidikan Informatika!",
  },
  {
    question: "Gimana cara join Himpunan ini?",
    answer: (
      <div className="space-y-2">
        <p>
          Cara join HMPS Pendidikan Informatika Universitas Hamzanwadi gampang
          banget, bro/sis! Nih langkah-langkah umumnya:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Tunggu Open Recruitment (Oprec) HMPS biasanya buka pendaftaran
            anggota baru setiap periode tertentu. Info Oprec biasanya disebar
            lewat medsos, grup angkatan, atau pamflet kampus. Jadi, pantau terus
            ya!
          </li>
          <li>
            Isi Formulir Pendaftaran Biasanya ada Google Form atau formulir
            fisik yang harus kamu isi. Di situ kamu bakal diminta data diri,
            motivasi gabung, dan kadang ada pilihan divisi yang kamu minati.
          </li>
          <li>
            Ikut Wawancara / Seleksi Setelah daftar, kamu bisa dipanggil buat
            sesi wawancara singkat. Tenang aja, ini cuma buat kenalan dan tahu
            seberapa serius kamu mau aktif.
          </li>
          <li>
            Pengumuman Anggota Baru Kalau lolos, kamu bakal diumumin jadi bagian
            dari keluarga besar HMPS! Biasanya ada orientasi atau upgrading juga
            biar makin akrab dan paham tugas masing-masing.
          </li>
          <li>
            Langsung Aktif & Berkontribusi Setelah resmi jadi anggota, kamu bisa
            ikut program kerja, rapat, dan event-event seru bareng tim HMPS.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Apa persyaratan untuk menjadi anggota Himpunan?",
    answer:
      "Syarat Gabung HMPS Pendidikan Informatika Mahasiswa Aktif Wajib terdaftar sebagai mahasiswa aktif Prodi Pendidikan Informatika (minimal semester 2 ya, biar udah agak paham dunia kampus 😄).Punya Semangat & Komitmen Siap belajar, aktif, dan kontribusi buat kegiatan HMPS. Bukan yang cuma numpang nama doang ya! Bisa Kerja Sama Tim Karena di HMPS itu kerjanya bareng-bareng, jadi penting banget punya sikap yang asik dan bisa diajak kerja sama. Bersedia Mengikuti Seluruh Proses Oprec Mulai dari isi formulir, ikut wawancara, sampai pengumuman—semua harus diikuti. Niat & Punya Rasa Kepedulian Punya rasa peduli sama prodi sendiri dan pengin ikut berkontribusi bikin kampus jadi lebih hidup.",
  },
  {
    question: "Berapa biaya keanggotaan Himpunan ini?",
    answer: "Gratis! Kami sudah terlalu malas untuk membuat sistem pembayaran.",
  },
  {
    question: "Aktivitas apa saja yang dilakukan di Himpunan ini?",
    answer: (
      <div className="space-y-2">
        <p>
          Himpunan kami memiliki berbagai aktivitas super produktif loh!, antara
          lain:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Ngadain workshop, pelatihan coding, desain, video editing, atau
            hal-hal kekinian yang relate sama dunia Informatika.
          </li>
          <li>
            Undang pemateri keren buat bahas topik-topik seputar teknologi,
            pendidikan, dan pengembangan diri.
          </li>
          <li>
            Ada juga acara seru kayak upgrading, makrab (malam keakraban), atau
            game bareng biar makin solid dan akrab.
          </li>
          <li>
            Tiap divisi punya proker masing-masing, kayak divisi humas yang
            ngurus media sosial, atau divisi pendidikan yang ngatur pelatihan
            dan diskusi.
          </li>
          <li>
            Ikut turun ke masyarakat lewat pengabdian, bakti sosial, atau
            kampanye digital edukatif.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Bagaimana saya tahu kalau saya cocok dengan Himpunan ini?",
    answer:
      "Gabung HMPS Pendidikan Informatika itu bukan cuma soal organisasi, tapi soal berkembang bareng, nambah relasi, dan bikin masa kuliah makin bermakna. Kalau kamu pengen aktif, kreatif, dan punya impact, sini bareng kami!",
  },
  {
    question: "Apa benefit jadi anggota Himpunan ini?",
    answer:
      "Benefit gabung HMPS Pendidikan Informatika banyak banget, nih! Kamu bakal dapat pengalaman organisasi yang seru, nambah skill komunikasi dan teamwork, dapat akses pelatihan atau workshop eksklusif, serta peluang buat networking sama temen-temen seprodi sampai dosen. Selain itu, kamu juga bisa lebih percaya diri dan punya bekal berharga buat karier atau studi lanjut di masa depan. Pokoknya, join HMPS bikin kamu makin siap hadapi dunia nyata!",
  },
];
