import Link from 'next/link';
import TypingText from './components/TypingText';
import Navbar from './components/navbar';
import Image from 'next/image';
import { BsDot,BsGithub } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';

export default function Home() {
  return (
  <>
  <div className="flex flex-col HoreBackGround px-4 md:px-40 pt-10">
    <Navbar/>
    <div className="flex flex-col justify-between min-h-screen ">
      <div className="mt-10">
        <TypingText/>
      </div>
      <div className='mb-48 flex flex-col gap-5 md:gap-10 items-center md:items-start text-center md:text-start'>
        <h4 className='text-5xl md:text-7xl'>Abraham Dwamena</h4>
        <p className='text-lg md:text-2xl text-slate-300'>A Web Developer based in Ghana, Tema community 25.</p>
        <Link href="/" className='rounded px-10 w-fit py-4 text-white bg-red-500 text-2xl'>Get in touch</Link>
      </div>
    </div>
  </div>
  <div className="flex flex-row  px-4 md:px-40 pt-10 justify-between mt-12">
    <div className='flex flex-col justify-between w-full md:w-1/2'>
      <h6 className='relative text-5xl pb-7'>My Work<span className="absolute inset-x-1/2 bottom-0 left-0 h-0.5 origin-left bg-red-500 transform scale-x-50 "/></h6>
      <div className=' my-10 block md:hidden'>
        <Image src="/slow.jpg" width={520} height={280} alt='slow'/>
      </div>
      <div className='mb-20'>
        <h6 className='text-4xl mb-6'>Portfolio</h6>
        <p className='md:w-[70%] '>
          I'm Abraham Dwamena, a passionate web developer with expertise in web and software development. I'm dedicated to creating innovative solutions to help your business grow online.
        </p>
        <div className='mt-8'>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>HTML</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>SCSS</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>JavaScript</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>Parcel</p>
        </div>
        <div className='mt-8 flex items-center gap-12'>
          <p className='flex items-center my-2'>Visit my Site<span className='text-2xl ml-3'><FiLink/></span></p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3 text-purple-500'><BsGithub/></span>GitHub</p>
        </div>
      </div>
    </div>
    <div className='mr-20 hidden md:block'>
      <Image src="/slow.jpg" width={520} height={280} alt='slow'/>
    </div>
  </div>
  </>
  )
}
