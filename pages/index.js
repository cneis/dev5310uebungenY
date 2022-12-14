import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image'
import profile_pic from '../public/chris_portrait.svg'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import web7 from '../public/web7.png'
import web8 from '../public/web8.jpg'
import web9 from '../public/web9.png'
import web10 from '../public/web10.png'
import auf1 from '../public/aufgabe1_bild.jpg'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>cneis für dev5310</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='px-10 py-10  flex justify-between sticky top-0 z-10 backdrop-blur-lg dark:bg-gray-900 z-5'>
          <h1 className='text-xl font-burtons dark:text-gray-100'>cneis für dev5310</h1>
          <a href="#aufgaben" className=" bg-gradient-to-r from-cyan-500 to bg-cyan-700 text-white px-4 py-2 rounded-md ml-8" >Aufgaben</a>
          
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-300'/>
          </nav>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
    
        {/* <section className=' min-h-screen'> */}
        <section>

       

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Christopher Neis</h2>
            <h3 className='text-2xl py-2 md:text-4xl dark:text-gray-100'>Developer und designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300'>Lösungen der Programmieraufgaben für dev5310.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <a href="https://www.twitter.com"><AiFillTwitterCircle size={30} /></a>
              <a href="https://www.linkedin.com"><AiFillLinkedin size={30} /></a>
              <a href="https://www.youtube.com"><AiFillYoutube size={30} /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={profile_pic}  alt="profile" style={{zIndex:1}}/>
          </div>
        </section>

        {/* cards aufgaben */}
        <div>
            <h3 className='text-3xl py-1 mt-12 dark:text-gray-100'>Aufgaben</h3>
           
          </div>
        <section id="aufgaben" className='mt-3 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          
           {/* card 1*/}
          <div className='lg:flex gap-10 basis-1/3 flex-1'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} alt="design" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Aufgabe 1 und 5</h3>
              <p className='py-2'>
                In der Mobilansicht übereinander, in der Desktopansicht nebeneinander.
              </p>
              <h4 className='py-4 text-teal-600'>Bild-Text-Komponente</h4>
              <p className='text-gray-800 py-1'>Flex</p>
              <p className='text-gray-800 py-1'>40:60 Verhältnis</p>
              <p className='text-gray-800 py-1'>responsive</p>
     
            </div>
          

        


              {/* card 2*/}
          
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white basis-1/3 flex-1'>
              <Image src={code} alt="code" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Aufgabe 2</h3>
              <p className='py-2'>
                Header und Footer
              </p>
              <h4 className='py-4 text-teal-600'>Header und Footer</h4>
              <p className='text-gray-800 py-1'>sticky</p>
              <p className='text-gray-800 py-1'>Positionierung</p>
              <p className='text-gray-800 py-1'>Funktionierende Anchors und Links</p>
            </div>
          

              {/* card 3*/}
          
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white basis-1/3 flex-1'>
              <Image src={consulting} alt="consulting" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Aufgabe 4</h3>
              <p className='py-2'>
                Bilderbox mit 4 Bildern, große und kleine
              </p>
              <h4 className='py-4 text-teal-600'>Bildergalerie</h4>
              <p className='text-gray-800 py-1'>Eine Reihe</p>
              <p className='text-gray-800 py-1'>Große am Rand</p>
              <p className='text-gray-800 py-1'>Kleine in der Mitte übereinander</p>
              
            </div>
          </div>

</section>

    {/* cards lösungen */}
    <div>
            <h3 className='text-3xl py-1 mt-12 dark:text-gray-100'>Lösungen</h3>
           
          </div>

 <section className='mt-3 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center'>
   {/* bild-text-komponente */}
           
   
  


  <div className="flex flex-col my-10 md:flex-row shadow-lg w-full md:max-w-5xl bg-white rounded-xl overflow-hidden">
	<img
		 className="object-cover md:w-2/5 w-full h-full"
		 
		 src="aufgabe1_bild.jpg"
     alt="Flower and sky"
		 />

	<div className="relative p-4">
	  <h3 className="text-lg font-medium pt-8 pb-2">
		Lösung Aufgabe 1
	  </h3>

	  <p className="mt-4 text-gray-600">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	  </p>
	</div>
  </div>

{/* bildergalerie */}


  <div className="inline-flex flex-col my-10 gap-x-2 md:flex-row shadow-lg w-full md:max-w-5xl bg-white rounded-xl overflow-hidden ">
      <img
        className="object-fill md:w-1/3 my-1 md:my-0 w-full md:h-1/1 
        hover:scale-105 hover:border-2 hover:origin-bottom hover:rotate-6 hover:transition-ease-in-out delay-150 duration-500"
        
        src="quad1.jpg"
        alt="Flower and sky"
        />

        <div className=" inline-flex flex-row my-1 md:my-0 gap-y-2 md:w-2/6 md:flex-col w-full">
            <img
            className="object-cover w-1/2 md:w-full md:h-1/2
            hover:border-2 hover:rotate-6 hover:transition-ease-in-out delay-150 duration-500"
            
            src="quad2.jpg"
            alt="Flower and sky"
            />
             <img
            className="object-cover ml-2 md:ml-0 w-1/2 md:w-full md:h-1/2
                      hover:scale-125 hover:border-2 hover:grayscale hover:-translate-y-10 hover:transition-ease-in-out delay-150 duration-500"
            
            src="quad3.jpg"
            alt="pyramid"
            />
        </div>
        <img
        className="object-cover mt-1 md:mt-0 md:w-1/3 w-full md:h-1/1 
                    hover:scale-125 hover:border-2 hover:origin-bottom hover:-rotate-12 hover:transition-ease-in-out delay-150 duration-500"
        
        src="quad4.jpg"
        alt="dia de los muertos"
        />
	
  </div>

  </section> {/* ende lösungen */}

        <section>
          <div>
          <h3 className='text-3xl py-1 mt-12 dark:text-gray-100'>Portfolio</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>Hier noch ein paar Projekte, an denen ich meine <span className='text-cyan-300'> Skills </span>weiterentwickle.</p>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200'>Die <span className='text-cyan-300'> Herausforderungen </span> umfassen Datenzugriff auf verschiedene Datenbanken, Zugriff auf APIs, ansprechendes Design, Animationen, Responsiveness.</p>         
         
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
           
            <div className='basis-1/3 flex-1'>
              <a href="https://css-creditcard.vercel.app/"><Image src={web7} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" /></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://tero3-website.vercel.app/"><Image src={web8} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" /></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://tailwind-profilecard-two.vercel.app/"><Image src={web9} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" /></a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href="https://wo-ist-gurki-vercel.vercel.app/"><Image src={web10} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className='px-10 py-10 mb-12 flex gap-8 justify-between text-gray-600 dark:bg-gray-800 dark:text-gray-100 text-md sm:text-xl'>
        <div className='text-5xl flex justify-center gap-8 sm:gap-16 py-3'>
          <a href="https://www.twitter.com"><AiFillTwitterCircle size={30} /></a>
          <a href="https://www.linkedin.com"><AiFillLinkedin size={30} /></a>
          <a href="https://www.youtube.com"><AiFillYoutube size={30} /></a>
        </div>
        <div className='text-center text-md'>
          <p>Avinguda Cala Agulla 53</p>
          <p>07590</p>
          <p>Mallorca, Spanien</p>
        </div>
  
        <div className='text-center text-md'>
          <p>CHRISTOPHER PUNKT NEIS AT POSTEO PUNKT DE</p>
        </div>

</footer>
     
    </div>
  )
}
