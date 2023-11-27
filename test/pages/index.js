import Image from 'next/image'

export default function Contact() {
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
          <span className='text-sm md:text-base'>GET IN TOUCH WITH US</span>
          <span className='flex text-4xl md:text-6xl h-full w-full md:justify-center items-center'>We Are Ready To Assist You In 24x7</span>
        </div>
      </div>

<div className='flex  w-screen h-auto items-center justify-center'>
  <div className='flex md:flex-row flex-col w-[900px] h-auto mt-[200px]'>
    <div className='relative w-1/2 h-[600px]'>
    <div className=' h-[450px] w-[390px] ml-14' style={{ backgroundImage: "url('/Bg.png')"  , position: "absolute"}}></div>
    <div className='relative mt-10 h-[450px] w-[390px] flex items-center justify-center ' style={{ backgroundImage: "url('/Photo.jpg')" }}></div>

    </div>
    <div className='w-1/2 h-full flex flex-col justify-center pl-8'>
      <div className='mt-4 text-xs'>GET IN TOUCH!</div>
      <h1 className='mt-4 text-4xl'>We are here to help 
        you always...</h1>
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
                
      </div>
     

    </div>
  </div>
</div>

<div className='bg-[#EBF3F5] flex relative w-full min-h-screen justify-center items-center flex-col mt-[300px]'>
  <div className='flex items-center text-center flex-col max-w-[550px] mt-8 md:mt-24'>
    <span className='text-sm text-[#7A9CA5]'>SCHEDULE YOUR PRESENCE</span>
    <div className='text-4xl mt-4'>Make an Appointment</div>
    <div className='text-sm mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</div>
  </div>
  <div className='flex flex-col max-w-[550px] w-full md:w-[500px] h-auto mt-8 md:mt-[50px] items-center justify-center'>

    <form className=" mt-5">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-6 h-6 text-[#7A9CA5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
          </svg>
        </div>
        <input type="text" id="name" className="w-full md:w-[500px] h-[50px] pl-10 border border-[#7A9CA5]" placeholder="Name"/>
      </div>
    </form>

    <form className="mt-5">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-[#7A9CA5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input type="text" id="email-address-icon" className="w-full md:w-[500px] h-[50px] pl-10 border border-[#7A9CA5]" placeholder="Email"/>
      </div>
    </form>

    <form className=" mt-5">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-6 h-6 text-[#7A9CA5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
          </svg>
        </div>
        <input type="text" id="phone-icon" className="w-full md:w-[500px] h-[50px] pl-10 border border-[#7A9CA5]" placeholder="Phone"/>
      </div>
    </form>

    <form className=" mt-5">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-6 h-6 text-[#7A9CA5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"/>
          </svg>
        </div>
        <input type="text" id="service-icon" className="w-full md:w-[500px] h-[50px] pl-10 border border-[#7A9CA5]" placeholder="Service You Need"/>
      </div>
    </form>

    <form className=" mt-5">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-6 h-6 text-[#7A9CA5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-.571-.309-1.139-.777l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/>
          </svg>
        </div>
        <input type="text" id="note-icon" className="w-full md:w-[500px] h-[100px] pl-10 border border-[#7A9CA5]" placeholder="Any Note For Us"/>
      </div>
    </form>
  </div>
</div>
     
    </div>
  )
}
