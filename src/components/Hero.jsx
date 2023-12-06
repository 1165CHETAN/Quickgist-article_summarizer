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
              onClick={() => window.open('https://github.com')}
              className="black_btn"
            >
              GitHub
            </button>
            <button 
              type="button"
              onClick={() => window.open('https://example.com')}
              className="black_btn"
            >
              Other Projects
            </button>
          </div>
</nav>


      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>Quickgist Rapid-API</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Quickgist, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries...
      </h2>
      
    </header>
  )
}

export default Hero