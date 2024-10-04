"use client";
import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { Footer } from './components/Footer'
import { Link } from '@/src/navigation'
import LogoIcon from '../icons/logo'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
    <head>
      <title>Home</title>
      <link rel="icon" href="../favicon.ico" />
    </head>
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('Professional')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Web/Mobile App Development and')}
          </span>
          <br></br>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Cyber Security')}
          </span>
          <br />
          {t('for Your Business')}
        </h1>
        {/* <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Your Vision, Our Code'
          )}
        </div> */}
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Securing Your Digital Future, Building Your Online Success'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          {/* <a
            href='/en/contact'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Use_Template')}
            </Button>
          </a> */}
          {/* <a
            href='/en/about'
            target='_blank'
          > */}
          <Link href={`/contact`}>
          <Button rounded size='large' variant='secondary'>
              {t('Contact')}
            </Button>
          </Link>
            
          {/* </a> */}
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Comprehensive Cybersecurity Solutions')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Protect your business from evolving threats with our advanced cybersecurity solutions. From threat detection and response to comprehensive penetration test, we ensure your digital assets are safeguarded against potential breaches. Our proactive approach and cutting-edge technologies provide peace of mind, allowing you to focus on your core business activities.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Innovative Web Development Services')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Transform your online presence with our tailored web development services. Whether you’re looking to build a stunning new website or enhance an existing one, our team delivers custom solutions designed to meet your unique needs. We combine the latest technologies with creative design to create user-friendly, high-performance websites that drive engagement and growth.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('End-to-End Digital Solutions')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Streamline your operations with our end-to-end digital solutions that integrate cybersecurity and web development expertise. From securing your online platforms to developing robust applications, we offer a holistic approach to solving your digital challenges. Partner with us to benefit from seamless, secure, and scalable solutions that support your business’s long-term success.'
              )}
            </p>
          </div>
        </div>
      </section>
      <section>
      <div className="w-full max-w-3xl mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">{t('About Me')}</h2>
        <p className="text-text-secondary text-center">
          {t(
            "Hello! My name is Raul Marin. I'm a cybersecurity and web development professional with 3 years of experience in the industry. I currently work as a web and mobile app developer for a freight brokerage company. I started my career as an IT technician and then transitioned into the world of cybersecurity and software development. I'm a self-taught developer and cybersecurity enthusiast. I'm passionate about building secure and scalable solutions to help businesses thrive in the digital age. My current credentials include the CompTIA A+ and Network+ certifications. I also have the certified red team operator certification from Zero Point Security. Several languages and frameworks I'm proficient in include: PHP, JavaScript, React/React Native, Node.js, HTML, CSS, SQL, Swift/SwiftUI, Kotlin, C/C++, and more. "
          )}
        </p>
      </div>
      </section> 
      <section>
      <div className="w-full max-w-3xl mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">{t('Services')}</h2>
        <p className="text-text-secondary text-center">
          {t(
            "The services I offer include: cybersecurity assessments, web/mobile app development, and custom software solutions. My cybersecurity assessments are comprehensive and include a penetration test by a certified red team operator followed by a report with actionable recommendations to mitigate the risks found. Build your online presence with custom web/mobile apps and streamline your operations with custom software solutions. Anything from a simple website to a complex web app or mobile app, I've got you covered. My expertise in the iOS and Android ecosystems allows you to have a native experience on both platforms."
          )}
        </p>
      </div>
      </section> 
      <section>
      <div className="w-full max-w-3xl mx-auto p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">{t('Promotions and Discounts')}</h2>
        <p className="text-text-secondary text-center">
          {t(
            "To kickstart my business and gather testimonials, I'm offering a 35% discount on all services for the first 5 clients. This includes cybersecurity assessments, web development, and custom software solutions. Don't miss out on this opportunity to secure your business's future. My website is built, hosted, secured, and maintained by me, in hopes of giving you a firsthand experience of my services."
          )}
        </p>
      </div>
      </section> 
      <section>
        <Footer/>
      </section>
    </div>
    </>
  )
}
