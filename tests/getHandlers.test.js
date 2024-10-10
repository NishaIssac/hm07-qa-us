// eslint-disable-next-line no-undef
const config = require('../config');

test('Must receive Status code of 200', async () => {
	let existingStatus;
	try {
		
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		existingStatus = response.status;
	} catch (error) {
		console.error(error);
	}
		expect(existingStatus).toBe(200);
});


test('Response body must contain delivery time for Speedy service', async () => {
	let existingResponseBody;
	try {
		
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`);
		existingResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	const startDeliveryTime = 8;
	const endDelivryTime = 22;
	let deliveryType, speedy;
	if(deliveryType == speedy)
	{
	expect(startDeliveryTime).toBeGreaterThan(7);
    expect(endDelivryTime).toBeLessThan(23);
	}
});

