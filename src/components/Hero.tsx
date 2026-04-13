import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[819px] flex items-center px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDXDrqP7McC5DCq3a1N9iOPfDrq8zKn6CmvvG3bqWDUesvqmb-3R59p_NrfF6SU-Rfvt5Wy35hXTqmjaCwPVvjUItDx1cvRDYOqYGC17IO_n_aAwrb2Ic7ciwOJK8tpICNlMy0nhBV266s3-psQSU_iqymnuA-opNfJcS413-T2Yz6NeyL07bwpePQ9V_VEBIM7oUoe9RByZVEl9LeUMkgO-6-JqmjrYx_FO0BaeAhhO_g5-ZXmFUgmQ8Hcw6nZf5ilTusRajTfMYh"
          alt="Hero image of premium sushi platter"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20 max-w-2xl">
        <p className="font-label text-secondary uppercase tracking-[0.2em] mb-4">Exclusivo por Encomenda</p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.9]">Requinte em Cada <span className="text-primary italic">Peça.</span></h1>
        <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
          Experiência Omakase premium entregue em sua casa. Peixe fresco selecionado diariamente, técnica milenar e exclusividade em cada peça.
        </p>
        <div className="flex gap-4">
          <a
            href="#menu"
            className="px-8 py-4 bg-secondary text-on-secondary rounded-md font-bold hover:scale-[1.02] transition-transform flex items-center gap-2"
          >
            Explorar Menu
            <span className="material-symbols-outlined">arrow_downward</span>
          </a>
        </div>
      </div>
    </section>
  )
}