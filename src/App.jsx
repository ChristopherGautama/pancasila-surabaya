import SmoothScroll from './components/SmoothScroll'
import ScrollThread from './components/ScrollThread'
import Navbar from './components/Navbar'
import SectionDivider from './components/SectionDivider'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import Pendahuluan from './sections/Pendahuluan'
import Metode from './sections/Metode'
import Peta from './sections/Peta'
import Sila from './sections/Sila'
import Data from './sections/Data'
import Perbandingan from './sections/Perbandingan'
import Temuan from './sections/Temuan'
import Solusi from './sections/Solusi'
import Kesimpulan from './sections/Kesimpulan'
import Tim from './sections/Tim'

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

        {/* Lima Sila — owns its leading (white→dark) & trailing (krem→dark)
            SectionDividers; the trailing one flows into the dark Data section. */}
        <Sila />

        <Data />

        {/* Wave: dark Data → krem Perbandingan */}
        <SectionDivider color="#FBF7F0" className="bg-gelap" />

        <Perbandingan />

        {/* Wave between two krem sections — subtle gold accent line */}
        <SectionDivider color="#FBF7F0" className="bg-krem" />

        <Temuan />

        {/* Wave: krem Temuan → bright Solusi (subtle gold accent) */}
        <SectionDivider color="#FBF7F0" className="bg-krem" />

        <Solusi />

        {/* Wave: bright Solusi → red Kesimpulan */}
        <SectionDivider color="#CE1126" className="bg-krem" />

        <Kesimpulan />

        {/* Wave: red Kesimpulan → dark Tim footer */}
        <SectionDivider color="#14080A" className="bg-merah-tua" />

        <Tim />
      </main>

      <BackToTop />
    </SmoothScroll>
  )
}
