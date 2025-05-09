import { useTranslations } from 'next-intl'
import { Footer } from '../components/Footer'


export default function About() {
  const t = useTranslations('')
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow px-32 py-24 text-center text-2xl">
      {t(
        'Services page'
      )}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}
