// JavaScript code for YouTube clone interactivity

document.addEventListener('DOMContentLoaded', function () {
	const searchButton = document.getElementById('search-button')
	const searchInput = document.getElementById('search-input')
	const videoContainer = document.getElementById('video-container')

	// Sample video data

    

	// Function to display videos
	function displayVideos(videoList) {
		videoContainer.innerHTML = '' // Очищаем контейнер
		videoList.forEach(video => {
			const videoElement = document.createElement('div')
			videoElement.className = 'video-item'
			videoElement.innerHTML = `
				<a href="${video.url}">
					<img class="video-thumb" src="${video.thumbnail}" alt="${video.title}">
					<h3>${video.title}</h3>
				</a>
			`
			videoContainer.appendChild(videoElement)
		})
	}

	// Initial display of videos


	// Search functionality
	searchButton.addEventListener('click', function () {
		const query = searchInput.value.toLowerCase()
		const filteredVideos = videos.filter(video =>
			video.title.toLowerCase().includes(query)
		)
		displayVideos(filteredVideos)
	})
})
const buttonInto = {
    text: 'buy',
}
const buttonStyle = {
    color: 'green',
    backgroundColor: 'white',
    width: '200px',
    height: '100px',
}
const button = {
    ...buttonInto,
    ...buttonStyle,
}
console.table(button)