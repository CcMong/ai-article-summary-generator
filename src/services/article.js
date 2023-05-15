import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey); 
            headers.set('X-RapidAPI-Host', "article-extractor-and-summarizer.p.rapidapi.com");

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        }) // use encodeURIComponent to wrap the URL in case it has unusual characters and symbols that might cause issues if misinterpreted by the server
    }),
});

export const { useLazyGetSummaryQuery } = articleApi; // only want this to come into effect after the URL has been typed in and searched for, not once the app loads. So we use "lazy"

