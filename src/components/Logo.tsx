import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/logo2.svg" alt='' width={53} height={17}/>
    </Link>
  )
}

export default Logo