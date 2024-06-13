import { useTranslations } from 'next-intl'
import { Footer } from '../components/Footer'

export default function Contact() {
  const t = useTranslations('')
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow px-32 py-24 text-center text-2xl">
      {t(
        'Experience page'
      )}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}
