import { Skeleton } from '@mui/material';

export const ProductsSkeletons = () => (
  <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-12 w-full'>
    <Skeleton className='rounded-xl' height={512} variant='rectangular' />
    <Skeleton className='rounded-xl' height={512} variant='rectangular' />
  </article>
)
