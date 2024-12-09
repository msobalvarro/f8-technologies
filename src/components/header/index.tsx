import { NavbarUi } from '../navbar'
import { UiButton } from '../ui/button'

export const HeaderMain = () => {
  return (
    <section className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full p-10 min-h-80 flex flex-col gap-10'>
      <NavbarUi />

      <div className='flex flex-col text-center gap-8'>
        <h1 className='text-white text-5xl font-bold mx-10'>Especialistas en instalación de CCTV e infraestructura informática.</h1>
        <p className='text-xl'>
          Lideres en tecnlogīa, servicios integrales de control y monitoro
        </p>

        <UiButton type='secondary' className='self-center'>Cotiza</UiButton>
      </div>
    </section>
  )
}
