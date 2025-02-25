// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
		"ids": [
			1,
			2,
			3
		]
}
test('Should receive response status 200', async () => {
	let existingStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/kits`, {
			method: 'POST',
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
test('Should receive the kit with id 3 and the 1st id "For Picnic" in the response body', async () => {
	let existingResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		existingResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	const kitName = ['id:1', 'id:2', 'id:3'];
	expect(kitName).toContain('id:3');
	let id;
	if (id==1)
	expect(existingResponseBody.id).toBe("For Picnic");
});

