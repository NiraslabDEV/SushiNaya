export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-primary py-16 px-8 mt-32 border-t border-outline-variant/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="text-xl font-bold text-primary mb-6">Sushi da Naya</div>
          <p className="text-on-surface-variant text-sm leading-relaxed opacity-60">
            Elevando o conceito de delivery em Maputo e Matola através da arte do Omakase. Ingredientes sazonais, técnica rigorosa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-primary">Contactos</h4>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a href="https://instagram.com/sushi_da_naya" className="flex items-center gap-2 opacity-50 hover:opacity-100 hover:text-secondary transition-all">
                  <span className="material-symbols-outlined text-sm">camera</span>
                  Instagram @sushi_da_naya
                </a>
              </li>
              <li>
                <a href="https://wa.me/258846889389" className="flex items-center gap-2 opacity-50 hover:opacity-100 hover:text-secondary transition-all">
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp +258 84 688 9389
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-primary">Localização</h4>
            <div className="flex items-start gap-2 opacity-50">
              <span className="material-symbols-outlined text-sm mt-1">location_on</span>
              <p className="text-sm">Maputo - Matola,<br />Moçambique</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-primary opacity-40">© 2024 Sushi da Naya. The Omakase Canvas.</p>
        <div className="flex gap-8">
          <span className="text-[10px] uppercase tracking-widest text-primary opacity-40">Termos & Privacidade</span>
          <span className="text-[10px] uppercase tracking-widest text-primary opacity-40">Crafted with Soul</span>
        </div>
      </div>
    </footer>
  )
}