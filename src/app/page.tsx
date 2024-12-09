import { HeaderMain } from '@/components/header'
import { UiButton } from '@/components/ui/button'
import { UiLayout } from '@/components/ui/layout'

export default function Home() {
  return (
    <UiLayout>
      <HeaderMain />

      <div className='flex gap-4 items-center flex-col sm:flex-row'>
        <UiButton type='primary'>Deploy now</UiButton>

      </div>
    </UiLayout>
  )
}
