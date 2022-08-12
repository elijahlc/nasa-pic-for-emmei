const button = document.querySelector('button');
const div = document.querySelector('div');

const randDate = () => {
	console.log(new Date());
};

button.addEventListener('click', async () => {
	randDate();

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

	div.appendChild(img);

	console.log(response);
});
