import axios from "axios";
import { useState } from "react";

export const Url = ()=>{
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = ()=>{
        // console.log(originalUrl);
        axios.post('http://localhost:3000/api/short', {originalUrl})
        .then((res)=>{
            setShortUrl(res.data.url.shortUrl)
            console.log('ApI response:', res.data.url.shortUrl);
            setOriginalUrl("");
        })
        .catch((err)=> console.log(err)
        )
        
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-center mb-6 text-green-400">URL Shortener</h1>
                <div onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input 
            value={originalUrl}
            onChange={(e)=> setOriginalUrl(e.target.value)}
            type="text"
            placeholder="Enter URL to shorten"
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            <button 
            onClick={handleSubmit}
            type="button"
            className="bg-green-400 text-white rounded-lg p-2 hover:bg-green-600 transition duration-200">
                Shorten
            </button>
            {
                shortUrl && 
                <div className="mt-6 text-center">
                    <p className="text-lg font-medium">Shortened URL:</p>
                    <a href={`http://localhost:3000/${shortUrl}`} target="_blank" rel="noopener noreferrer" className="text-green-700 font-medium hover:underline">
                        {shortUrl}
                    </a>
                </div>
            }
            </div>
            </div>
        </div>
    )
}