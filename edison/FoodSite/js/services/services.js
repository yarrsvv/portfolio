async function postData(url, data) {
	const res = await fetch(url, {
		method: "POST",
		body: data,
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		}
	});
	
	if (!res.ok) {
		throw new Error('post failed');
	}

	return res.json();
}

async function getResource(url) {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return res.json();
}

export { postData, getResource };