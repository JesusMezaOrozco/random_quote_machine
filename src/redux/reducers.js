export const messageReducer = (state = { message: '', author: '' }, action) => {
	switch (action.type) {
		case 'CHANGE_MESSAGE':
			return {
				message: action.message,
				author: action.author,
			}
			break
		default:
			return state
			break
	}
}
