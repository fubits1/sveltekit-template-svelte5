/**
 * Converts an array of objects into an keyed object
 * @param {Array<Object>} array - The array of objects to convert.
 * @param {string} [key='id'] - The key to use from each object as the key for the new object.
 * @returns {Object} The resulting object with keys from the specified key in each object.
 */

export function to_object(array, key = 'id') {
	return array.reduce((object, item) => ({ ...object, [item?.[key] || 'error']: item }), {})
}
