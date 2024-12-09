import { UiButton } from '@/components/ui/button'
import { UiLayout } from '@/components/ui/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <UiLayout>
      <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
        <li className='mb-2'>
          Get started by editing{' '}
          <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className='flex gap-4 items-center flex-col sm:flex-row'>
        <UiButton type='primary'>
          <>
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy now
          </>
        </UiButton>

      </div>
    </UiLayout>
  )
}
