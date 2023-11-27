import Image from 'next/image'

export default function Location() {
  return (

    <div className='flex flex-col'>
          <header className=" text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className='flex items-center '>
      <div className="text-2xl text-black font-bold">Logo</div>
      <div className="text-sm text-black ml-2 mt-1">Call Us +22 123 456  7890 </div>
      </div>
    
      <nav className="flex space-x-4 items-center">
        <a href="#" className="text-black">Home</a>
        <a href="#" className="text-black flex items-center">
          <span>Pages</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
        <a href="#" className="text-black">About</a>
        <a href="#" className="text-black">Services</a>
        <a href="#" className="text-black">Contact</a>
        <div className="flex items-center space-x-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/3885/facebook.svg" alt="Facebook Logo" width="19" height="19"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/47722/twitter-black-shape.svg" alt="Twitter Logo" width="19" height="19"/>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZBy1rB-OsrxrBL_aiax6KdYzCoyNEYD_CKl-EI_fuJt6hF-T-X9SNu8y5F_vT_HlEgg&usqp=CAU" alt="LinkedIn Logo" width="19" height="19"/>
          </a>
        </div>
        <button className='bg-[#7A9CA5] text-white px-4 py-2 flex items-center space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-fill" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"></path>
          </svg>
          <span>Reservation</span>
        </button>
      </nav>
    </div>
  </header>

    <div className='relative h-96 flex items-center justify-center md:h-[50vh] ' style={{ backgroundImage: "url('/background.png')" }}>
        <div className='flex flex-col items-center w-[80%] text-white text-center'>
          <span className='text-sm md:text-base'>WHERE ARE HERE!</span>
          <span className='flex text-4xl md:text-6xl h-full w-full md:justify-center items-center'>Our Locations</span>
        </div>
      </div>


      <div className='flex  w-screen h-auto items-center justify-center'>
  <div className='flex md:flex-row flex-col w-[900px] h-auto mt-[200px]'>
    <div className='relative w-1/2 h-[600px]'>
    <div className=' h-[450px] w-[390px] ml-14' style={{ backgroundImage: "url('/Bg.png')"  , position: "absolute"}}></div>
    <div className='relative mt-10 h-[450px] w-[390px] flex items-center justify-center ' style={{ backgroundImage: "url('/Photo.jpg')" }}></div>

    </div>
    <div className='w-1/2 h-full flex flex-col justify-center pl-8'>
      <div className='mt-4 text-xs'>COLUMBIA</div>
      <h1 className='mt-4 text-4xl'>Washington D.C</h1>
      <span className='mt-6 text-xs'>There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, buying to 
         many desktop publishing packages.</span>
      <div >
          <div className='flex mt-4 '><Image  
              src="/home-2502.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Visit Us</div>
                <div className='text-base' >NO.09a, Downtown, SAN DIEAGO, USA</div>
                </div></div>
            <div className='flex mt-4 '><Image  
              src="/mail-2564.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Drop Us</div>
                <div className='text-base' >support@beautyness.com</div>
                </div></div>
            <div className='flex mt-4 '><Image  
              src="/phone-ringing-14.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Call Us</div>
                <div className='text-base' >Call: 1-800-123-9999</div>
                </div></div>

                <button className='h-14 w-[200px] bg-[#7A9CA5] ml-10 mt-5'> MAKE A RESERVATION</button>
                
      </div>
     

    </div>
  </div>
</div>


<div className='flex  w-screen h-auto items-center justify-center'>
  <div className='flex md:flex-row flex-col w-[900px] h-auto mt-[200px]'>
  
    <div className='w-1/2 h-full flex flex-col justify-center pl-8'>
      <div className='mt-4 text-xs'>SAN FRANCISCO</div>
      <h1 className='mt-4 text-4xl'>New York</h1>
      <span className='mt-6 text-xs'>There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, buying to 
         many desktop publishing packages.</span>
      <div >
          <div className='flex mt-4 '><Image  
              src="/home-2502.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Visit Us</div>
                <div className='text-base' >NO.09a, Downtown, SAN DIEAGO, USA</div>
                </div></div>
            <div className='flex mt-4 '><Image  
              src="/mail-2564.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Drop Us</div>
                <div className='text-base' >support@beautyness.com</div>
                </div></div>
            <div className='flex mt-4 '><Image  
              src="/phone-ringing-14.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Call Us</div>
                <div className='text-base' >Call: 1-800-123-9999</div>
                </div></div>

                <button className='h-14 w-[200px] bg-[#7A9CA5] ml-10 mt-5'> MAKE A RESERVATION</button>
                
      </div>
    
     

    </div>
    <div className='relative w-1/2 h-[600px] mt-[50px]'>
    <div className=' h-[450px] w-[390px] ml-14' style={{ backgroundImage: "url('/Bg.png')"  , position: "absolute"}}></div>
    <div className='relative mt-10 h-[450px] w-[390px] flex items-center justify-center ' style={{ backgroundImage: "url('/Photo.jpg')" }}></div>

    </div>
  </div>
</div>


<div className='flex  w-screen h-auto items-center justify-center'>
  <div className='flex md:flex-row flex-col w-[900px] h-auto mt-[200px]'>
    <div className='relative w-1/2 h-[600px]'>
    <div className=' h-[450px] w-[390px] ml-14' style={{ backgroundImage: "url('/Bg.png')"  , position: "absolute"}}></div>
    <div className='relative mt-10 h-[450px] w-[390px] flex items-center justify-center ' style={{ backgroundImage: "url('/Photo.jpg')" }}></div>

    </div>
    <div className='w-1/2 h-full flex flex-col justify-center pl-8'>
      <div className='mt-4 text-xs'>FRANCE</div>
      <h1 className='mt-4 text-4xl'>Paris</h1>
      <span className='mt-6 text-xs'>There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, buying to 
         many desktop publishing packages.</span>
      <div >
          <div className='flex mt-4 '><Image  
              src="/home-2502.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Visit Us</div>
                <div className='text-base' >NO.09a, Downtown, SAN DIEAGO, USA</div>
                </div></div>
            <div className='flex mt-4 '><Image  
              src="/mail-2564.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Drop Us</div>
                <div className='text-base' >support@beautyness.com</div>
                </div></div>
            <div className='flex mt-4 '><Image  
              src="/phone-ringing-14.svg"
              alt="Vercel Logo"
              className="border-2 border-black rounded-sm p-2"
              width={65}
              height={65}/> 
              <div className='flex flex-col ml-4'>
                <div className='text-2xl'>Call Us</div>
                <div className='text-base' >Call: 1-800-123-9999</div>
                </div></div>

                <button className='h-14 w-[200px] bg-[#7A9CA5] ml-10 mt-5'> MAKE A RESERVATION</button>
                
      </div>
     

    </div>
  </div>
</div>



    </div>
  
  )
}