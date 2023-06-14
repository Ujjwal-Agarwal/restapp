import { FC } from 'react'
import Image from 'next/image'

interface CategoryCardProps {
  
}

const CategoryCard: FC<CategoryCardProps> = ({}) => {
  return <div className='w-72 h-72 bg-secondary-custom rounded-2xl drop-shadow-xl'>
    <div className='h-3/4 w-3/4 relative mx-auto mt-5'><Image src="/banner_images/signup.jpg" fill alt="Food Image" className='rounded-full' /></div>
    <p className='text-center text-extrabold text-xl mt-5'>FoodName</p>
    </div>
}

export default CategoryCard