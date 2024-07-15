import React from "react";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className=' flex justify-between items-center w-full mb-10 pt-3'>
        <a href='#' className='orange_gradient tracking-widest '>
          <span className='text-5xl italic font-extrabold '>Pa</span>

          <span className='italic'>AI</span>
        </a>
        <button
          type='button'
          onClick={() => window.open("https://github.com/haile-paa")}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className=' max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Pa AI , an open-source article summarizer
        that transform lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
