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


test('response body should contain confirmation that the kit has been deleted', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true);
});
