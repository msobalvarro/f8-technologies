import { FormContact } from '@/components/contact';
import { UiLayout } from '@/components/ui/layout';

export default function ContactView() {
  return (
    <UiLayout>
      <h1 className='text-3xl'>Contactanos</h1>
      
      <FormContact />
    </UiLayout>
  )
}