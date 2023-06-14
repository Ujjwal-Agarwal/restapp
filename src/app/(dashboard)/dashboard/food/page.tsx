'use client'
import { FC, useRef } from 'react'
import CategoryCard from '@/components/CategoryCard'

interface pageProps {
  
}

const page: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return <section className='mx-auto'>
    <div className='h-full flex flex-col justify-center'>
      <h1 className='mt-5 text-5xl font-semibold mb-5'>Categories</h1>
      <div className='overflow-auto'>
      <div className='grid grid-cols-3 gap-5 m-5 mt-0 px-auto '>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      </div>
    </div>
  </section>
}

export default page