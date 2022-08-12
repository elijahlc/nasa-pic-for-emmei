const button = document.querySelector('button');
const div = document.querySelector('div');
const footer = document.querySelector('footer');

button.addEventListener('click', async () => {
	try {
		const config = {
			params: {
				api_key: 'gYwfDAePsJCg6hg52CFQbZ21jXCCcv4zJNGAei6T',
				date: `${randomDate()}`,
			},
		};

		const response = await axios.get(
			'https://api.nasa.gov/planetary/apod',
			config
		);

		const { url, explanation, date, title } = response.data;

		const img = document.querySelector('img');
		const h2 = document.querySelector('h2');
		const h3 = document.querySelector('h3');
		const p = document.querySelector('p');

		img.src = url;
		h2.innerHTML = title;
		h3.innerHTML = `Daily image on ${date.split('-')[1]}/${
			date.split('-')[2]
		}/${date.split('-')[0]}`;
		p.innerHTML = explanation;
	} catch (err) {
		console.log(err);
	}
});

footer.addEventListener('click', () => {
	footer.innerHTML = 'love you kiddo';
	footer.style.color = '#64dfdf';
});

function randomDate() {
	const days = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
	];

	const months = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
	];

	const month = months[Math.floor(Math.random() * 12)];
	const day = days[Math.floor(Math.random() * 28)];
	const year = Math.floor(Math.random() * 22 + 2000).toString();
	return `${year}-${month}-${day}`;
}
