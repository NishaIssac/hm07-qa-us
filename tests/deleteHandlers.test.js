// eslint-disable-next-line no-undef
const config = require('../config');
test('Should receive the Status 200 upon deleting a kit', async () => {
	let existingStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		existingStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(existingStatus).toBe(200);
});
test('Should receive "OK":true when deleting a kit in the response body', async () => {
	let existingResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`,{
			method: 'DELETE'
		});
		existingResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
		expect(existingResponseBody).toEqual({ ok: true });	
});

