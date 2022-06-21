const reducer = (state = { count: 0, count1: 0 }, action) => {
	switch (action.type) {
		case 'INCREASE':
			return {
				count: state.count + 1,
			};
		case 'DECREASE':
			return {
				count1: state.count1 - 1,
			};
		default:
			return state;
	}
};

export default reducer;
