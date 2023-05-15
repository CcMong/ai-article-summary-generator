import React from 'react';
import { useState, useEffect } from 'react';
import { copy, loader, linkIcon, tick } from "../assets";
import submitIcon from "../assets/submit-icon.png"

const Demo = () => {

  const [article, setArticle] = useState({
    url: "",
    summary: ""
  })

  // We will be making the API request on submit. So create an async function to do this:

  const handleSubmit = async (event) => {

    alert("Submitted");

  }

  return (
    <section className='mt-16 w-full max-w-xl '>
      {/*Search Bar */}
      <div className='flex flex-col w-full gap-2'>
        <form 
        className='relative flex justify-center items-center'        
        onSubmit={handleSubmit}
        >
          <img src={linkIcon} 
          alt="link icon"
          className='absolute left-0 my-2 ml-3 w-5 '
          />

          <input
          className='url_input peer'
          type="url"
          placeholder="Enter the Article URL"
          value={article.url}
          onChange={(event) => setArticle({ ...article, url: event.target.value })}
          required
          />

          <button
          type="submit"
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
          >
           <img src={submitIcon}
           className='w-4'
           />
          </button>          
        </form>

        {/*Article URL History for easy access for the user */}

      </div>

      {/*Search Results Displayed */}
      
    </section>
  )
}

export default Demo