import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center
    items-center flex-col">
        <nav className="flex justify-between 
        items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" 
            className='w-28 object-contain'/>

            <button type='button' 
            onClick={() => window.open('https://github.com/KINYENJE')}
            className='black_btn'>
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>GPT-4</span>
        </h1>

        <h2 className='desc'>
            Simplify your reading with <span 
            className='font-satoshi font-bold text-gray-600 text-xl orange_gradient'
            >SUMZ.</span> <br/>
            This summarizer App transforms lengthy articles into 
            short clear summaries.
        </h2>

    </header>
  )
}

export default Hero