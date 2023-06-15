
import axios from 'axios';
import { isEmpty } from 'lodash';
import { API_URL } from '../component/common/constant';

describe('Check if its poke api is working', () => {
	it('should return a 200 response', async () => {
		// Make a request to your API endpoint
		const response = await axios.get(`${API_URL}/pokemon`);

		if (!isEmpty(response.data.results)) {
			// Assert the response status code
			expect(response.status).toBe(200);
		}
	});

	it('should return a length value', async () => {
		// Make a request to your API endpoint
		const response = await axios.get(`${API_URL}/pokemon`);

		if (!isEmpty(response.data.results)) {
			// Assert the response status code
			expect(response.data.results.length).toBeGreaterThan(0);
		}
	});
});
