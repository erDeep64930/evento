import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'

const loading = () => {
  return (
    <div className='flex flex-warp max-w-[1100px] mx-auto py-24 gap-20 justify-center'>
     {
        Array.from({length:6}).map((item,i)=>(<SkeletonCard key={i}/>))
     }
    </div>
  )
}

export default loading

