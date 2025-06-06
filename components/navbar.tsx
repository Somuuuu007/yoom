import Link from 'next/link'
import Image from 'next/image'
import MobileNavbar from './mobileNavbar'
import { SignedIn, UserButton } from '@clerk/nextjs'

const navbar = () => {
  return (
        <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
          <Link href='/' className='flex gap-8'>
            <Image src="/icons/logo.svg"
            width={32}
            height={32}
            alt='Yoom logo'
            className='max-sm:size-10'
            />
            <p className='text-[26px] font-extrabold text-black max-sm:hidden '>Yoom</p>
          </Link>

          <div className='flex-between gap-5'>
            <SignedIn />
            <UserButton />
            <SignedIn />
          <MobileNavbar />
          </div>
          
        </nav>
  )
}

export default navbar