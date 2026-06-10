import SmoothScroll from './components/SmoothScroll'
import ScrollThread from './components/ScrollThread'
import Navbar from './components/Navbar'
import SectionDivider from './components/SectionDivider'
import Hero from './sections/Hero'
import Pendahuluan from './sections/Pendahuluan'
import Metode from './sections/Metode'
import Peta from './sections/Peta'
import Sila from './sections/Sila'
import { IMG } from './data/assets'

export default function App() {
  return (
    <SmoothScroll>
      <ScrollThread />
      <Navbar />

      <main>
        <Hero />

        {/* Wave: dark hero → krem Pendahuluan (wave fill = section below) */}
        <SectionDivider color="#FBF7F0" className="-mt-1" />

        <Pendahuluan />

        {/* Wave between two krem sections — krem container + krem fill leaves
            just the decorative gold accent line as a subtle separator */}
        <SectionDivider color="#FBF7F0" className="bg-krem" />

        <Metode />

        {/* Wave: krem Metode → white Peta (wave fill = section below) */}
        <SectionDivider color="#FFFFFF" className="bg-krem" />

        <Peta />

        {/* Lima Sila — owns its own leading (white→dark) & trailing (dark→dark)
            SectionDividers, so none is needed here. */}
        <Sila />

        {/* Phase 1 teaser — replaced by the full narrative in later phases.
            Gives the scroll thread + progress bar real scroll distance. */}
        <section
          id="bersambung"
          className="section-shell relative flex min-h-[70svh] items-center justify-center bg-gelap"
        >
          <div
            className="batik-overlay"
            style={{ backgroundImage: `url(${IMG.batikOrnament})` }}
          />
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <p className="pull-quote text-2xl text-emas-terang sm:text-3xl">
              &ldquo;Pancasila bukan sekadar dasar negara, melainkan denyut yang
              hidup di nadi kota.&rdquo;
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-krem/50">
              Bersambung &middot; Narasi lima kawasan segera hadir
            </p>
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}
