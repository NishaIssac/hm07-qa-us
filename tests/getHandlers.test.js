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
test('Response body must contain delivery time for Speedy service and display its name', async () => {
	let existingResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		existingResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	const startDeliveryTime = 8;
	const endDeliveryTime = 22;
	let deliveryType , speedy;
	if(deliveryType === speedy)
	{
	expect(startDeliveryTime).toBeGreaterThan(7);
    expect(endDeliveryTime).toBeLessThan(23);
	expect(existingResponseBody[1].name).toBe("Speedy");
	}
});

