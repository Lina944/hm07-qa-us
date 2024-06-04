// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}
let MainStatusCode

test('Status code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/1/complete`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			MainStatusCode = response.status
		});
	} catch (error) {
		console.error(error);
	}

	expect(MainStatusCode).toBe(200)
});


// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}
let actualResponseBody;

test('Response body should contain True', async () => {
	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode.ok).toBe("True");
});