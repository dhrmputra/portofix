import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DataImage from './data';
import { listTools, listProyek } from './data';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
      <div className="max-w-7xl mx-auto px-4 lg:px-4">
            <Navbar />
            <section
                id="hero"
                className="hero grid md:grid-cols-2 items-center xl:gap-0 gap-6 grid-cols-1">
                {/* LEFT CONTENT */}
                <div className='animate__animated animate__fadeInUp animate__delay-2s'>
                    <div className="flex items-center gap-3 mb-6 bg-neutral-800 w-fit p-4 rounded-2xl">
                        <img src={DataImage.HeroImage} alt="tentang" className='w-6 rounded-md' loading='lazy'/>
                        <span className="text-sm font-medium text-white">
                            Code The Chaos
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-emerald-500 flex">Hi, Saya</span>
                        <span className="text-slate-100 text-4xl lg:text-5xl font-bold mt-4">I Made Dharma Putra</span>
                    </h1>

                    <p className="text-justify lg:text-lg mb-6 opacity-70 text-white">
                        Saya adalah junior programmer dengan minat pada basic pengembangan aplikasi, DevOps, dan
                        cloud computing. Terbiasa bekerja secara mandiri maupun dalam tim, serta mampu beradaptasi
                        dengan lingkungan kerja yang dinamis. Aktif mengembangkan keterampilan teknis melalui proyek,
                        magang, dan pembelajaran mandiri untuk meningkatkan kualitas solusi yang dibangun.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://drive.google.com/file/d/159NY3BQRG9Wn3g2ATr1wF28FybgRGwhA/view?usp=sharing"  target="_blank" rel="noopener noreferrer" className="flex bg-emerald-600 p-4 rounded-2xl text-white hover:bg-emerald-500 transition"
                        >
                            Download CV <i className="ri-download-line ri-lg ml-1 my-auto"></i>
                        </a>
                        <a
                            href="#project"
                            className="flex bg-neutral-800 p-4 rounded-2xl text-white hover:bg-neutral-700 transition"
                        >
                            Lihat Proyek <i className="ri-arrow-down-line ri-lg ml-1 my-auto"></i>
                        </a>
                    </div>
                </div>

                <div
                    className="
                      w-full
                      flex
                      justify-center
                      md:justify-center
                      lg:justify-end
                    "
                >

                    <div
                        className="
                            relative
                            flex
                            items-end
                            justify-center
                            mt-5

                            lg:ml-auto
                            w-[300px]
                            sm:w-[340px]
                            md:w-[380px]
                            lg:w-[420px]
                            xl:w-[460px]

                            h-[420px]
                            sm:h-[460px]
                            md:h-[500px]
                            lg:h-[540px]
                            xl:h-[580px]


                            rounded-b-[150px]
                            overflow-hidden
                          ">
                        <img
                            src={DataImage.HeroImage}
                            alt="fotocv"
                            className="
                              w-full
                              h-full
                              object-contain
                              scale-105
                            "
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section id="about" className="tentang mt-32 py-10">
                <div className='xl:w-2/3 mx-auto bg-neutral-800 p-7 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
                    <img src={DataImage.HeroImage} alt="tentang" className='w-12 rounded-md mb-10 sm:hidden' loading='lazy' />
                    <p>
                        Saya adalah seorang junior programmer yang memiliki minat besar dalam pengembangan aplikasi, DevOps, dan cloud computing. Saya terbiasa bekerja secara mandiri maupun dalam tim, serta mampu beradaptasi dengan lingkungan kerja yang dinamis. Saya aktif mengembangkan keterampilan teknis melalui proyek, magang, dan pembelajaran mandiri untuk meningkatkan kualitas solusi yang saya bangun.
                    </p>
                    <div className='flex items-center justify-between mt-10'>
                        <img src={DataImage.HeroImage} alt="tentang" className='w-12 rounded-md sm:block hidden' loading='lazy' />
                        <div className='flex items-center gap-6'>
                            <div>
                                <h1 className='text-4xl mb-1'>
                                    4<span className='text-emerald-500'>+</span>
                                </h1>
                                <p>Proyek Selesai</p>
                            </div>
                            <div>
                                <h1 className='text-4xl mb-1'>
                                    1<span className='text-emerald-500'>+</span>
                                </h1>
                                <p>Tahun Pengalaman Magang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tools" className="tools mt-32">
                <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang Saya Gunakan</h1>
                <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w=3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut adalah beberapa tools yang sering saya gunakan dalam pembuatan Website ataupun Design</p>
                <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

                    {listTools.map((tool, index) => (
                        <div className='flex items-center gap-2 p-3 border border-emerald-600 rounded-md hover:bg-emerald-600 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                            <img src={tool.gambar} alt="tools" className='w-14 bg-neutral-700 p-1 group-hover:bg-neutral-900' loading='lazy' />
                            <div>
                                <h4 className='font-bold'>{tool.nama}</h4>
                                <p className='opacity-60'>{tool.ket}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="project" className="proyek mt-32">
                <h1 className="text-4xl text-center font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Project Saya</h1>
                <p className="text base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut adalah beberapa proyek yang pernah saya kerjakan, baik itu proyek pribadi maupun proyek kolaborasi dengan tim.</p>
                <div className='proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {listProyek.map((proyek) => (
                        <div key={proyek.id} className='p-4 rounded-md bg-neutral-800' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                            <img src={proyek.gambar} alt="proyek image" className='w-full h-50 object-cover rounded-md' loading='lazy' />
                            <div>
                                <h1 className='font-bold text-2xl my-4'>{proyek.nama}</h1>
                                <p className='text-sm/loose mb-4 text-justify'>{proyek.desk}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {proyek.tools.map((tool, index) => (
                                        <p key={index} className='border border-neutral-500 bg-neutral-700 px-3 py-1 rounded-md'>{tool}</p>
                                    ))}
                                </div>
                                <div className='mt-8 text-center'>
                                    <a href='#' className='bg-emerald-600 p-3 rounded-lg block border border-emerald-600 hover:bg-emerald-500 '>Lihat Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="kontak mt-32 p-10 sm:p-10 p-0">
                <h1 className="text-4xl text-center font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
                <p className="text base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.</p>
                <form action="https://formsubmit.co/dharma.putra2003@gmail.com" method="POST" className="bg-neutral-800 p-10 rounded-md w-fit mx-auto sm:w-fit w-full" autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Nama Lengkap</label>
                            <input type="text" name='nama' placeholder='Masukan Nama' className='border border-emerald-500 p-2 rounded-md' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Email</label>
                            <input type="email" name='email' placeholder='Masukan Email' className='border border-emerald-500 p-2 rounded-md' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='pesan' className='font-semibold'>Pesan</label>
                            <textarea name="pesan" id='pesan' placeholder='Pesan' cols="45" rows="7" className='border border-emerald-500 p-2 rounded-md' required></textarea>
                        </div>
                        <div className='flex flex-col gap-2 text-center'>
                            <button type='submit' className='bg-emerald-600 p-3 rounded-lg w-full cursor-pointer border border-neutral-600 hover:bg-emerald-500'>Kirim Pesan</button>
                        </div>
                    </div>
                </form>
            </section>

            <Footer />

        </div>
  )
}

export default App
