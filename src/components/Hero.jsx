import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex items-center justify-between w-full mb-1 pt-0'>
          <div className='flex items-center'>
            <img src={logo} alt="sumz_logo" className='w-36 h-36' />
          </div>

          <div className='flex'>
            <button 
              type="button"
              onClick={() => window.open('https://github.com/1165CHETAN')}
              className="black_btn"
            >
              GitHub
            </button>
           
          </div>
</nav>

<h2 className='head_text'>
  <span className='orange_gradient'>Quickgist - Article Summarizer</span>
</h2>


<h2 className='desc'>
  Simplify your reading with Quickgist, an open-source article summarizer
  that transforms lengthy articles into clear and concise summaries...
</h2>


      
    </header>
  )
}

export default Hero