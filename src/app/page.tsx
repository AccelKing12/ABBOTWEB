import Link from 'next/link';
import TypingText from './components/TypingText';
import Navbar from './components/navbar';
import Image from 'next/image';
import { BsDot,BsGithub,BsWhatsapp,BsFillBookFill } from 'react-icons/bs';
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
  <div className="flex flex-col md:flex-row  px-4 md:px-40 pt-10 justify-between mt-12  items-center">
    <div className='flex flex-col justify-between w-full xl:w-1/2 items-center md:items-start'>
      <h6 className='relative text-5xl pb-7 hidden md:block'>My Work<span className="absolute inset-x-1/2 bottom-0 left-0 h-0.5 origin-left bg-red-500 transform scale-x-50 "/></h6>
      <div className=' my-10 block md:hidden'>
          <h6 className='relative text-5xl pb-7'>My Work<span className="absolute inset-x-1/2 bottom-0 left-0 h-0.5 origin-left bg-red-500 transform scale-x-50 "/></h6>
        <Image className='pt-7' src="/slow.jpg" width={520} height={280} alt='slow'/>
      </div>
      <div className='mb-20 p-10'>
        <h6 className='text-4xl my-6'>Portfolio</h6>
        <p className='md:w-[70%] '>
          I&apos;m Abraham Dwamena, a passionate web developer with expertise in web and software development. I&apos;m dedicated to creating innovative solutions to help your business grow online.
        </p>
        <div className='mt-8'>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>HTML</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>SCSS</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>JavaScript</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>Parcel</p>
        </div>
        <div className='mt-8 flex md:flex-row flex-col   items-center md:gap-12 gap-4'>
          <p className='flex items-center my-2 '>Visit my Site<span className='text-2xl ml-3'><FiLink/></span></p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3 text-purple-500'><BsGithub/></span>GitHub</p>
        </div>
      </div>
    </div>
    <div className=' hidden md:block'>
      <Image src="/slow.jpg" width={520} height={280} alt='slow'/>
    </div>
  </div>
  <div className="flex flex-col md:flex-row px-4 md:px-20 pt-10 justify-between md:mt-40">
    <div className='flex flex-col justify-center w-full md:w-1/2 order-2 md:order-1 '>
      <div className='mb-20'>
        <h6 className=' text-5xl pb-7 text-center md:text-start'>Calculator</h6>
        <p className='text-center md:text-start  md:w-[70%] text-slate-300'>
          I CAN BUILD A CALCULATOR FOR U WITH SIMPLE C++ CODES🤪
        </p>
        <div className='mt-8 flex flex-wrap justify-center md:justify-normal text-slate-300'>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>React</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>Next.js</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>Node</p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3'><BsDot/></span>Mongo</p>
        </div>
        <div className='flex flex-col mt-10'>
          <p className='text-center md:text-start  md:w-[70%] mt-10'>
            Connect With Me and My Team 👇
          </p>
          <div className='mt-8 flex flex-col md:flex-row items-center gap-5 justify-center text-center p-2'>
            <p className='flex items-center my-2 bg-green-600 p-2 rounded'><span className='text-2xl mr-3'><BsWhatsapp/></span> Contact ABRAHAH</p>
            <p className='flex items-center my-2 bg-green-600 p-2 rounded'><span className='text-2xl mr-3'><BsWhatsapp/></span>Contact Philemon</p>
          </div>
        </div>
      </div>
    </div>
    <div className=' w-full items-center order-1 md:order-2 '>
      <Image src="/kick.jpg" className='w-full h-auto' width={520} height={280} alt='slow'/>
    </div>
  </div>
  <div className="flex flex-row md:max-w-[1034px] mx-4 sm:mx-40 xl:mx-auto pt-10 md:mt-20 justify-between text-center md:text-start">
    <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
      <div className='mb-20 w-full p-10'>
        <h6 className=' text-5xl pb-7'>Notificator</h6>
        <p className='text-slate-300'>
          Services Website development Complete web solutions with hosting and maintenance. Graphics design Designs for social media and branding. software development Custom software solutions for your business.
        </p>
        <div className='mt-8 flex md:flex-row flex-col items-center md:gap-12 gap-4 justify-center md:justify-normal'>
          <p className='flex items-center my-2'>Visit my Site<span className='text-2xl ml-3'><FiLink/></span></p>
          <p className='flex items-center my-2'><span className='text-2xl mr-3 text-purple-500'><BsGithub/></span>GitHub</p>
        </div>
      </div>
      <div className=''>
        <h6 className='relative text-5xl pb-7 text-center  md:text-right'>My services<span className="absolute inset-x-0 bottom-0 left-0  md:origin-right h-1 bg-red-500 transform scale-x-[20%] "/></h6>
        <div className='grid text-center  lg:grid-cols-2 lg:text-left gap-10 mt-10'>
          <section className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.02] duration-300        bg-gray-700 rounded p-4     '>
            <div className="text-sm break-words">
              <h1 className="text-xl font-semibold ">Website Developement</h1>
              <p className="  mt-4">Complete Website with hosting and domain and maintanance includes.</p>
              <div className='flex flex-row gap-4 mt-4 underline underline-offset-2 justify-center lg:justify-start'>
              </div>
            </div>
          </section>
          <section className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.02] duration-300           bg-gray-700 rounded p-4   '>
            <div className="text-sm break-words">
              <h1 className="text-xl font-semibold ">Graphics Design</h1>
              <p className="mt-4">Instagram post design, youtube thumbnail and any type of design you want.</p>
            </div>
          </section>
          <section className='transition ease-in-out delay-150 hover:scale-[1.02] duration-300         bg-gray-700 rounded p-4     '>
            <div className="text-sm break-words">
              <h1 className="text-xl font-semibold  ">Software Developement</h1>
              <p className="  mt-4">Personal software for your business and store with lifetime support.</p>
            </div>
          </section>
          <section className='transition ease-in-out delay-150 hover:scale-[1.02] duration-300         bg-gray-700 rounded p-4     '>
            <div className="text-sm break-words">
              <h1 className="text-xl font-semibold  ">Bot Management</h1>
              <p className="  mt-4">blocking undesired or malicious Internet bot traffic while still allowing useful bots to access web propertie.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col md:flex-row  px-4 md:px-40 pt-10 justify-between mt-12  items-center ">
    <div className=''>
       <h6 className='relative text-5xl pb-7'>About Me<span className="absolute inset-x-1/2 bottom-0 left-0 h-0.5 origin-left bg-red-500 transform scale-x-50 "/></h6>
      <Image className="mt-10" src="/im.jpg" width={520} height={280} alt='slow'/>
    </div>
    <div className='flex flex-col w-full xl:w-1/2 justify-center p-10 '>
      <div className='mb-20'>
        <div className='md:w-[100%]'>
          <p className='mt-3'>
          Skills:  
          </p>
          <p>
          - WhatsApp Bot Development
          </p>
          <p>
          - App Development
          </p>
          <p>
          - Website Development
          </p>
          <p className='mt-8'>
            I am Abraham Dwamena a 19-year-old undergraduate student at Takoradi Technical University with a strong passion for development. My expertise includes WhatsApp bot development, app development, and website development. I am dedicated to creating innovative and user-friendly solutions in the digital realm.
          </p>
          <p className='flex items-center my-2 border border-red-500 px-9 py-4 rounded w-fit mt-8'><span className='text-2xl mr-3'><BsFillBookFill/></span> My Resume</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-row  px-4 md:px-40 pt-40 justify-between items-center  md:max-w-[1034px]   xl:mx-auto">
      <div className='mb-20'>
       <h6 className='relative text-5xl pb-7'>Get in Touch<span className="absolute inset-x-1/2 bottom-0 left-0 h-0.5 origin-left bg-red-500 transform scale-x-50 "/></h6>
        <p className=' mt-12 text-slate-400'>
        Are you looking for a fast-performing and user-friendly website to represent your product or business? or looking for any kind of consultation? or want to ask questions? or have some advice for me or just want to say &quot;Hi 👋&quot; in any case feel free to Let me know. I will do my best to respond back. 😊 The quickest way to reach out to me is via an email.
        </p>
        <p className='flex items-center my-2 border border-red-500 px-9 py-4 rounded w-fit mt-8'>abrahamdw882@gmail.com</p>
      </div>
  </div>
  </>
  )
}
