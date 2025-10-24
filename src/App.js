import './index.css';
import React from "react";
import { motion } from "framer-motion";

// Portfolio component (default export)
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
  src="/Foto/profile.jpg"
  alt="Anisa Profile"
  className="w-16 h-16 rounded-full object-cover shadow-lg"
/>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Anisa Nurohmah</h1>
              <p className="text-slate-300 text-sm md:text-base mt-1">Mahasiswa Sistem Informasi </p>
            </div>
          </div>

          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2 bg-slate-800/40 p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold">Hi — aku Anisa 👋</h2>
            <p className="mt-3 text-slate-300 leading-relaxed text-justify">
  Saya mahasiswa Sistem Informasi Universitas Ahmad Dahlan (semester 9) yang fokus pada analisis proses bisnis, desain antarmuka, dan pengembangan frontend. 
  Saat ini saya telah menyelesaikan studi dan <strong> sedang dalam proses yudisium. </strong> 
  Sebelumnya, saya pernah bekerja sebagai <strong>student employee di bagian PMB</strong> selama dua tahun (2023–2025), berkontribusi dalam pengelolaan sistem pendaftaran mahasiswa baru dan optimalisasi alur informasinya.
</p>


            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/60 p-4 rounded-lg">
                <div className="text-xs text-slate-400">Status</div>
                <div className="font-semibold mt-1">Mahasiswa — Semester 9</div>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-lg">
                <div className="text-xs text-slate-400">Pengalaman</div>
                <div className="font-semibold mt-1">Student Employee PMB</div>
              </div>
              
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-block bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow">Lihat Proyek</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anisimnida@outlook.com" className="inline-block border border-slate-700 px-4 py-2 rounded-lg text-slate-300">Email</a>
              
            </div>
          </div>

          <aside className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/20 border border-slate-700">
            {/* Replace with real image later */}
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-slate-900 font-extrabold text-2xl">
  <img
    src="/Foto/profile.jpg"
    alt="Anisa Profile"
    className="w-32 h-32 rounded-2xl object-cover"
  />
</div>

            <div className="text-center">
              <div className="font-semibold">Anisa Nurohmah</div>
              <div className="text-xs text-slate-400">Yogyakarta — Kotagede</div>
            </div>
            {/* Info Grid */}
  <div className="w-full grid grid-cols-2 divide-x divide-slate-700 mt-2">
    <div className="text-center">
      <div className="font-semibold text-cyan-400">9</div>
      <div className="text-xs text-slate-400">Semester</div>
    </div>
    <div className="text-center">
      <div className="font-semibold text-cyan-400">PMB UAD</div>
      <div className="text-xs text-slate-400">Student Employee</div>
    </div>
  </div>
          </aside>
        </motion.section>

      {/* Projects */}
<section id="projects" className="mt-10">
  <h3 className="text-xl font-semibold">Selected Projects</h3>
  <p className="text-slate-400 mt-2">
    Beberapa proyek yang saya kelola dan kontribusikan — desain, koordinasi, dan implementasi konsep.
  </p>

  <div className="mt-6 grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Redesign Sistem PMB UAD",
        tag: "Analisis & UI",
        desc: "Analisis proses bisnis, mockup antarmuka, dan rancangan notifikasi otomatis berbasis WhatsApp untuk alur pendaftaran PMB.",
        demo: "https://www.figma.com/proto/I16zo0HpI4ARFbphJgwKgI/PRTOTOYPE?node-id=350-5008&starting-point-node-id=350%3A5008", 
      },
      {
        title: "Website Profil Pedukuhan",
        tag: "Digitalisasi Desa",
        desc: "Pengembangan konten, struktur informasi, dan publikasi UMKM lokal di pedukuhan Gesikan III.",
        demo: "https://anisimnida.github.io/Gesikan-3/",
      },
      {
        title: "Profil Web Restoran",
        tag: "Frontend Development",
        desc: "Perancangan dan pembuatan website profil restoran dengan tampilan modern dan responsif menggunakan React dan Tailwind CSS.",
        demo: "https://xinzzu.github.io/TekwebProjectNew/?fbclid=PAZXh0bgNhZW0CMTEAAac7m3nInSBEDeyTkHIz6MLnRHYRJq6Q54dC3OrR_ir9iDKARYR-xyohWwt28A_aem_xGepyoGBNk6qRJr7gP2AMA",
      },
      {
        title: "Redesign Web TBN Alliance",
        tag: "UI/UX Design",
        desc: "Proyek redesign website akademik yang meraih Juara 1 pada Final Project Exhibition Program Studi Sistem Informasi tahun 2024.",
        demo: "https://www.figma.com/proto/puDNMtPYKe7MwGRAEc3N3B/Desain-Web-TBN-Revamp?node-id=2083-1769&t=02Ssero7SJY3sEmG-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=810%3A2432",
      },
      {
        title: "Website Resmi Kalurahan Gilangharjo (Bagian PPID)",
        tag: "Web Development",
        desc: "Penyusunan konten, pengelolaan informasi publik, dan pembuatan tampilan halaman PPID pada website resmi Kalurahan Gilangharjo.",
        demo: "https://anisimnida.github.io/gilangharjo/",
      },
    ].map((p) => (
      <motion.article
        key={p.title}
        whileHover={{ y: -6 }}
        className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700"
      >
        <div className="text-xs text-slate-400">{p.tag}</div>
        <h4 className="font-semibold mt-1">{p.title}</h4>
        <p className="text-slate-300 text-sm mt-3">{p.desc}</p>
        <a
          href={p.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-xs border border-slate-700 px-3 py-1 rounded-lg text-slate-300 hover:bg-slate-700/40 transition"
        >
          Lihat Proyek
        </a>
      </motion.article>
    ))}
  </div>
</section>



      
        {/* Experience */}
<section id="experience" className="mt-10">
  <h3 className="text-xl font-semibold">Experience & Roles</h3>
  <div className="mt-4 grid md:grid-cols-2 gap-6">

    <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
      <div className="text-xs text-slate-400">Student Employee</div>
      <h4 className="font-semibold mt-1">Penerimaan Mahasiswa Baru — Universitas Ahmad Dahlan</h4>
      <p className="text-slate-300 text-sm mt-2">
        Mengelola verifikasi berkas, menyusun pesan verifikasi, dan mengoptimalkan alur pendaftaran agar lebih jelas bagi calon mahasiswa.
      </p>
      <a
        href="/sertifikat/student-employee.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-xs border border-slate-700 px-3 py-1 rounded-lg text-slate-300 hover:bg-slate-700/40 transition"
      >
        Lihat Sertifikat
      </a>
    </div>

    <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
      <div className="text-xs text-slate-400">Sekretaris</div>
      <h4 className="font-semibold mt-1">Komunitas Karawitan Gendhing Bahana UAD</h4>
      <p className="text-slate-300 text-sm mt-2">
        Menjabat sebagai sekretaris selama dua periode (2022–2023), mengelola administrasi, dokumentasi, dan koordinasi kegiatan komunitas seni karawitan.
      </p>
      <a
        href="/sertifikat/karawitan.png"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-xs border border-slate-700 px-3 py-1 rounded-lg text-slate-300 hover:bg-slate-700/40 transition"
      >
        Lihat Sertifikat
      </a>
    </div>

    <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
      <div className="text-xs text-slate-400">Staff</div>
      <h4 className="font-semibold mt-1">Departemen Minat dan Bakat — BEM FAST UAD</h4>
      <p className="text-slate-300 text-sm mt-2">
        Berperan sebagai staff dalam penyelenggaraan kegiatan minat dan bakat mahasiswa, termasuk koordinasi kompetisi dan acara seni budaya.
      </p>
      <a
        href="/sertifikat/bem-fast.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-xs border border-slate-700 px-3 py-1 rounded-lg text-slate-300 hover:bg-slate-700/40 transition"
      >
        Lihat Sertifikat
      </a>
    </div>

    <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700">
      <div className="text-xs text-slate-400">Anggota DPT</div>
      <h4 className="font-semibold mt-1">Dance Movement 2024</h4>
      <p className="text-slate-300 text-sm mt-2">
        Bertugas sebagai DPT (Divisi Perlengkapan & Tata Teknis) dalam acara Dance Movement 2024, mendukung kelancaran teknis dan logistik kegiatan.
      </p>
      <a
        href="/sertifikat/dance-movement.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-xs border border-slate-700 px-3 py-1 rounded-lg text-slate-300 hover:bg-slate-700/40 transition"
      >
        Lihat Sertifikat
      </a>
    </div>

    
  </div>
</section>


        {/* Contact */}
        <section id="contact" className="mt-10 bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-slate-400 mt-2">Hubungi saya untuk kolaborasi, magang, atau peluang kerja.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              const name = form.get("name");
              const email = form.get("email");
              const message = form.get("message");
              const subject = encodeURIComponent(`Pesan dari ${name}`);
              const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `anisimnida@outlook.com?subject=${subject}&body=${body}`;
            }}
            className="mt-4 grid md:grid-cols-2 gap-4"
          >
            <input name="name" required placeholder="Nama" className="bg-slate-900/30 p-3 rounded-md border border-slate-700" />
            <input name="email" type="email" required placeholder="Email" className="bg-slate-900/30 p-3 rounded-md border border-slate-700" />
            <textarea name="message" required placeholder="Pesan kamu..." className="md:col-span-2 bg-slate-900/30 p-3 rounded-md border border-slate-700 min-h-[120px]" />
            <div className="md:col-span-2 flex gap-3 items-center">
              <button type="submit" className="bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg">Kirim Pesan</button>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anisimnida@outlook.com" className="text-slate-300 underline">Atau kirim lewat email</a>
            </div>
          </form>
        </section>

        <footer className="mt-12 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Anisa Nurohmah — Dibuat dengan ❤️</footer>
      </div>
    </div>
  );
}
