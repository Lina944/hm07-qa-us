// eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('response should come true', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse.ok).toBe(true);
});
