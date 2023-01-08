import { AiOutlineTwitter } from 'react-icons/ai'
import { ImQuotesLeft } from 'react-icons/im'
import './App.css'

function App() {
	const getNewQuote = () => {}

	return (
		<div className='vw-100 vh-100 d-flex align-items-center justify-content-center flex-column'>
			<div id='quote-box' className='quoteContainer'>
				<div id='text'>
					<p className='text-center'>
						<ImQuotesLeft className='quoteIcon' />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						minima dolorem ex. Accusantium, quibusdam expli
					</p>
				</div>
				<div id='author' className='d-flex justify-content-end'>
					<span className='fst-italic' style={{ fontSize: 12 }}>
						- Mark Twain
					</span>
				</div>
				<div className='d-flex justify-content-between mt-2'>
					<a className='btn' href='http://www.google.com' id='tweet-quote'>
						<AiOutlineTwitter />
					</a>
					<button id='new' className='btn' onClick={getNewQuote}>
						New Quote
					</button>
				</div>
			</div>
			<div>
				<p style={{ color: 'white', fontSize: 10 }}>by Jesus Meza</p>
			</div>
		</div>
	)
}

export default App
