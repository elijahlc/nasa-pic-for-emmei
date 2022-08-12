const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', async () => {
	const config = {
		params: { api_key: 'gYwfDAePsJCg6hg52CFQbZ21jXCCcv4zJNGAei6T' },
	};

	const response = await axios.get(
		'https://api.nasa.gov/planetary/apod',
		config
	);

	const { url, explanation, date, title } = response.data;

	const img = document.createElement('IMG');
	img.src = url;

	const h2 = document.createElement('h2');
	h2.innerHTML = title;

	const h3 = document.createElement('h3');
	h3.innerHTML = `Daily image on ${date.split('-')[1]}/${date.split('-')[2]}/${
		date.split('-')[0]
	}`;

	const p = document.createElement('p');
	p.innerHTML = explanation;

	div.appendChild(img);
	div.appendChild(h2);
	div.appendChild(h3);
	div.appendChild(p);
});
