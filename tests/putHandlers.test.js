// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	
}
test('Status 404 should be received as the kit is not found', async () => {
	let existingStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)	
		});
			existingStatus = response.status;	
	} catch (error) {
		console.error(error);		
	}
	expect(existingStatus).toBe(404);
});
test('404:Not Found should be received while Modifying the kit', async () => {
	let existingResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		existingResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(existingResponseBody).toEqual( { code: 404, message: 'Not Found' });
});

