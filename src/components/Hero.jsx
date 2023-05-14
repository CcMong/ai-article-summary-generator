import React from 'react';
//import { logo } from "../assets";
import logo from "../../src/assets/oppsum-logo.png";

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="oppsumm logo"
            className='w-5 object-contain'
            />

            <button type="button"
            onClick={() => window.open("https://github.com/CcMong")}
            className='black_btn'
            >
                GitHub

            </button>

        </nav>

        <h1 className='head_text mb-4'>
            Summarise Articles Quickly Using The Power Of <br className='min-md:hidden'/> <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            No more &ldquo;TL;DR&rdquo; - Get the low-down of any article effortlessly! <br /> <br />
            <span className='font-bold'>OppSumm</span> is an open-source summariser tool that simplifies your reading by quickly converting long articles into concise, &ldquo;no-fluff&rdquo; summaries. <br />
              


        </h2>
        
    </header>
  )
}

export default Hero