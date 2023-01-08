import { useEffect, useState, useCallback } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { ImQuotesLeft } from 'react-icons/im'
import axios from 'axios'
import './App.css'

const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
const apiKey = 'EuIYu1IzkDhyQbB7Il0ftQ==EUtdRlj78A6xD4ca'

function App() {
	const [quote, setQuote] = useState({
		quote: '',
		author: '',
	})

	const getNewQuote = async () => {
		const { data } = await axios.get(apiUrl, {
			headers: {
				'X-Api-Key': apiKey,
			},
		})
		setQuote({
			quote: data[0].quote,
			author: data[0].author,
		})
	}

	return (
		<div className='vw-100 vh-100 d-flex align-items-center justify-content-center flex-column'>
			{quote.quote ? (
				<>
					<div id='quote-box' className='quoteContainer'>
						<div id='text'>
							<p className='text-center'>
								<ImQuotesLeft className='quoteIcon' />
								{quote.quote}
							</p>
						</div>
						<div id='author' className='d-flex justify-content-end'>
							<span className='fst-italic' style={{ fontSize: 12 }}>
								- {quote.author}
							</span>
						</div>
						<div className='d-flex justify-content-between mt-2'>
							<a
								className='btn'
								href='http://www.twitter.com/intent/tweet'
								id='tweet-quote'
							>
								<AiOutlineTwitter />
							</a>
							<button id='new-quote' className='btn' onClick={getNewQuote}>
								New Quote
							</button>
						</div>
					</div>
					<div>
						<p style={{ color: 'white', fontSize: 10 }}>by Jesus Meza</p>
					</div>
				</>
			) : (
				<button
					id='new-quote'
					className='btn btn-primary'
					onClick={getNewQuote}
				>
					Get Quote
				</button>
			)}
		</div>
	)
}

export default App
