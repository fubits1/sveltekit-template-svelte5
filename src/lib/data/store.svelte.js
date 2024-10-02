const counter = () => {
	let _count = $state(0)

	return {
		get count() {
			return _count
		},
		increment() {
			_count += 1
		},
		decrement() {
			_count -= 1
		},
		reset(value = 0) {
			_count = value
		}
	}
}

export const count = counter()
