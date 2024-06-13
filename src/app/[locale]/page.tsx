import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { Footer } from './components/Footer'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
    <head>
      <title>Home</title>
    </head>
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('Profressional')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Web and Mobile App Development')}
          </span>
          <br />
          {t('for Your Business')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Your Vision, Our Code'
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
          <a
            href='/en/about'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Versatile')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Performant')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
              )}
            </p>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
    </>
  )
}
