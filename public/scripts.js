const button = document.querySelector('button');
const footer = document.querySelector('footer');

button.addEventListener('click', async () => {
	try {
		const config = {
			params: {
				api_key: 'gYwfDAePsJCg6hg52CFQbZ21jXCCcv4zJNGAei6T',
				date: `${randomDate(new Date(2000, 0, 1), new Date())}`,
			},
		};

		const response = await axios.get(
			'https://api.nasa.gov/planetary/apod',
			config
		);

		const { url, explanation, date, title } = response.data;
		const month = date.split('-')[1];
		const day = date.split('-')[2];
		const year = date.split('-')[0];

		const img = document.querySelector('img');
		const h2 = document.querySelector('h2');
		const h3 = document.querySelector('h3');
		const p = document.querySelector('p');

		img.src = url;
		h2.innerHTML = title;
		h3.innerHTML = `Daily image on ${month}/${day}/${year}`;
		p.innerHTML = explanation;

		footer.style.color = '#3B037A';
		ufo.style.transform = 'translateY(-100px)';
		ufo.style.transform += 'translateX(100px)';
	} catch (err) {
		console.log(err);
	}
});

footer.addEventListener('click', () => {
	if (footer.innerHTML === 'secrets') {
		footer.innerHTML = 'love you kiddo';
		footer.style.color = '#64dfdf';
	} else {
		footer.innerHTML = 'secrets';
		footer.style.color = '#3B037A';
	}
});

function randomDate(start, end) {
	const date = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);

	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
