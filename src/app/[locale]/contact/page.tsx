import { useTranslations } from 'next-intl'
import { Footer } from '../components/Footer'
import { MantineProvider } from '@mantine/core';
import '@radix-ui/themes/styles.css'
import * as radixUI from '@radix-ui/themes';
import UserInfoIcons from '../components/userInfoCard';

export default function Contact() {
  const t = useTranslations('')
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow px-32 py-24 text-center text-2xl">
      {/* {t(
        'Contact page'
      )} */}
      <div>
      <MantineProvider>
        <UserInfoIcons/>
      </MantineProvider>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}
