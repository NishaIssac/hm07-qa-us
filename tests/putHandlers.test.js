// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
		"price" : 10
}
test('Should receive the Status 200 upon modification', async () => {
	let existingStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
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
	expect(existingStatus).toBe(200);
});
test('Should receive "ok":true in the response body upon modifying the product', async () => {
	let existingResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
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
	expect(existingResponseBody).toEqual({"ok": true});
});

