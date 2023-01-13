export const changeMessage = ({ message, author }) => {
	return {
		type: 'CHANGE_MESSAGE',
		message,
		author,
	}
}
