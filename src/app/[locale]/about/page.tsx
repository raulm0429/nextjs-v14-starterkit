import { useTranslations } from 'next-intl'
import { Footer } from '../components/Footer'

export default function About() {
  const t = useTranslations('')
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-32 py-24 text-center text-2xl">
        {t(
          'This_is_a_simple_about_page_just_to_show_how_you_can_use_test_different_pages'
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
