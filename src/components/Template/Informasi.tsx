import React from 'react';

// Tipe data untuk props card
interface CardInformasiProps {
  type: 'Artikel' | 'Berita' | 'Informasi';
  judul: string;
  penulis: string;
  tanggal: string;
  gambarUrl: string;
  href?: string; // Optional link detail
}

const CardInformasi: React.FC<CardInformasiProps> = ({
  type,
  judul,
  penulis,
  tanggal,
  gambarUrl,
  href = '#',
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-sm flex flex-col h-full">
      <img src={gambarUrl} alt={judul} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold uppercase rounded-full mb-2 ${
            type === 'Artikel'
              ? 'bg-blue-100 text-blue-600'
              : type === 'Berita'
              ? 'bg-red-100 text-red-600'
              : 'bg-green-100 text-green-600'
          }`}
        >
          {type}
        </span>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{judul}</h3>
        <div className="text-sm text-gray-600 mb-4">
          <p>Penulis: <span className="font-medium">{penulis}</span></p>
          <p>Tanggal: <span className="font-medium">{tanggal}</span></p>
        </div>
        <div className="mt-auto">
          <a
            href={href}
            className="inline-flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardInformasi;