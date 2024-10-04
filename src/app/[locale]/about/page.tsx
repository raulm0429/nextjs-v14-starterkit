import { useTranslations } from 'next-intl'
import { Footer } from '../components/Footer'
import { MantineProvider } from '@mantine/core';
import UserInfoIcons from '../components/userInfoCard';


export default function About() {
  const t = useTranslations('')
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-col max-w-50">
      <h2 className="text-4xl font-bold ml-20 mt-10 justify-center"><strong>WHOAMI?</strong></h2>
      <MantineProvider>
        <UserInfoIcons/>
      </MantineProvider>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
