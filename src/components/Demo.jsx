import React from 'react';
import { useState, useEffect } from 'react';
import { copy, loader, linkIcon, tick } from "../assets";
import submitIcon from "../assets/submit-icon.png";
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {

  const [article, setArticle] = useState({
    url: "",
    summary: ""
  });

  // In order to be able to list and display user historical article searches, we define a new state. articleHistory will be an array which will contain the article data:

  const [articleHistory, setArticleHistory] = useState([])

  // State to manage copying the URL:

  const [copiedUrl, setCopiedUrl] = useState("second")

  // Having created the getSummary hook, we will now call it here. First parameter is a function that needs to execute (as we are using lazy), second parameter gives us information on the status. The useLazyGetSummaryQuery basically brings our state from the article.js in services all the way into the application. This is what we need within the handleSubmit function:

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // To enable the article history to persist:

  useEffect(() => {

    const articlesFromLocalStorage = JSON.parse(localStorage.getItem("article_summaries"));

    // If there are articles already stored in local storage, use them to populate the article history

    if(articlesFromLocalStorage) {
      setArticleHistory(articlesFromLocalStorage);
    }

  }, [])



  // We will be making the API request on submit. So create an async function to do this:

  const handleSubmit = async (event) => {

    event.preventDefault(); // Prevents the default behaviour of the browser, which is to reload the application

    const { data } = await getSummary({ articleUrl: article.url });

    // If there is any value for articleUrl, then we want to obtain the corresponding summary and use what we get to set the article that is displayed
    if(data?.summary) {

      const newArticle = { ...article, summary: data.summary };

      // Whenever we get a new article summary, we also want to unshift it into the articleHistory array:

      const updatedArticleHistory = [newArticle, ...articleHistory];

      setArticle(newArticle);
      setArticleHistory(updatedArticleHistory);

      // Then we can set the current article history into local storage

      localStorage.setItem("article_summaries", JSON.stringify(updatedArticleHistory));
    }  
  }

  // To be able to copy the URL to the clipboard:

  const handleCopy = (copyUrl) => {
    setCopiedUrl(copyUrl);
    navigator.clipboard.writeText(copyUrl);

    // Then to reset the copy after a given amount of time to show the successful animation:

    setTimeout(() => setCopiedUrl(false), 3000)


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
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto mt-8'>
          {articleHistory.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
            >
              <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                <img 
                src={copiedUrl === item.url ? tick : copy} 
                alt="copy icon" 
                className='w-[40%] h-[40%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>

            </div>
          ))}
          
        </div>

      </div>

      {/*Search Results Displayed */}
      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt="loader" className='w-20 h-20'/>
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Hmmm... That wasn't supposed to happen... <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className='blue_gradient'>Summary</span>
              </h2>

              {/*Article Summary Box */}
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>{article.summary}</p>

              </div>

            </div>
          )
        )}

      </div>
      
    </section>
  )
}

export default Demo