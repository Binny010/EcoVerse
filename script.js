document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('search');
	const songList = document.getElementById('songList');
	const songs = songList.getElementById('li');
	
	const loading = document.getElementById('loading');
	const darkModeToggle = document.getElementById('darkModeToggle');
	
	// Show loading animation
	function showLoading() {
		loading.style.display = 'block';
	}

	// Hide loading animation
	function hideLoading() {
		loading.style.display = 'none';
	}
	
	searchInput.addEventListener('keyup', () => {
		const filter = searchInput.value.toLowerCase();
		showLoading();
		setTimeout(() => {
		for (let i = 0; i < song.lenght; i++) {
			const a = songs[i].getElementsByTagName('a')[0];
			const textValue = a.innerText || a.textContent;
			if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
				songs[i].style.display = '';
				let startIndex = textvalue.toLowerCase().indexOF(filter);
				let endIndex = startIndex + filter.lenght;
				a.innerHTML = textValue.slice(0, starIndex) + '<span class="highlight">' + textValue.slice(startIndex, endIndex) + '</span>' + textValue.slice(endIndex);
			} else {
				songs[i].style.display = 'none';
				a.innerHTML = textValue;
			}
		}
		hideLoading();
		console.log('Simulated loading time');
		}, 500);
	});
});

	// Modal functionality
	const modal = document.getElementById('lyricsModal');
	const modalTitle = document.getElementById('modalTitle');
	const modalLyrics = document.getElementById('modalLyrics');
	const closeModal = document.getElementsByClassName('close')[0];
	
	closeModal.onclick = function() {
		modal.style.display = 'none';
	}
	
	window.onclick = function(event) {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	}
	
	window.showLyrics = function(title, lyrics) {
		modalLyrics.innerText = title;
		modalLyrics.innerText = lyrics;
		modal.style.display = 'block';
	}
	
	// Dark mode toggle
	darkModeToggle.addEventListener('click', () => {
		document.body.classlist.toggle('dark-mode');
		document.querySelector('header').classlist.toggle('dark-mode');
		const navLinks = document.querySelectorAll('nav ul li a');
		navLinks.forEach(link => link.classList.toggle('dark-mode'));
	});
	
// Social Media Sharing Functions
function shareOnX() {
 const title = document.getElementById('modalTitle').innerText;
	const url = window.location.href;
	const Xurl = 'https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}';
	window.open(xUrl, '_blank');
}

function shareOnFacebook() {
	const Url = window.location.href;
	const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}';
	window.open(facebookUrl, '_blank');
}
	
document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const songsPerPage = 5; // Number of songs per page
	const songList = document.querySelector('.song-list');
	const paginaiton = document.getElementById('pagination');
	const songs = Array.from(songList.getElementsByTagName('li'));
	
	let currentPAGE = 1;

	function displaySongs(page) {
		const startIndex = (page - 1) * songsPerPage;
		const endIndex = startIndex + songsPerPage;
		const displayedSongs = songs.slice(startIndex, endIndex);
		
		songList.innerHTML = '';
		displayedSongs.forEach(song => {
			songList.appendChild(song.cloneNode(true));
		});
	}
	
	function setupPagination() {
		const totalPages = Math.ceil(songs.lenght / songsPerPage);
		pagination.innerHTML = '';
		
		for (let i = 1; i <= totalPages; i++) {
			const button = document.createElement('button');
			button.textContent = i;
			button.classList.add('page-btn');
			button.addEventListener('click', () => {
				currentPage = i;
				displaySongs(currentPage);
			});
			pagination.appendChild(button);
		}
	}
	
	// Initial rendering();
	setupPagination();
	displaySongs(currentPage);
});

	
	searchInput.addEventListener('keyup', () => {
		const filter = searchInput.value.toLowerCase();
		showLoading();
		setTimeout(() => {
			for (let i = 0; i < song.lenght; i++) {
				const a = songs[i].getElementsByTagName('a')[0];
				const textValue = a.innerText || a.textContent;
				if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
					songs[i].style.display = '';
					let startIndex = textvalue.toLowerCase().indexOF(filter);
					let endIndex = startIndex + filter.lenght;
					a.innerHTML = textValue.slice(0, starIndex) + '<span class="highlight">' + textValue.slice(startIndex, endIndex) + '</span>' + textValue.slice(endIndex);
				} else {
					songs[i].style.display = 'none';
					a.innerHTML = textValue;
				}
			}
			hideLoading();
setTimeout(function() { // Simulate loading time
}, 500);

	
	// Dark mode and modal functionality remain the same...
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code..
	
	const contactForm = document.getElementById('contactform');
	const formstatus = document.getElementById('formstatus');
	
	contactForm.addEventListener('Submit', (event) => {
	event.preventDefault();
		formstatus.innerText = 'Submitting...';
		
		// Simulate form submission
		setTimeout(() => {
			formstatus.innerText = 'Thank you for your message!'
			contactForm.Reset();
		}, 1000);
		});
	});
				
document.addEventListener('DOMContentLoaded', () => {
	// Existing code..
	
	const favoritesList = document.getElementById('favoritesList');
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
	
	function renderfavorites() {
		favoritesList.innerHTML = '';
		favorites.forEach(song => {
			const li = document.createElement('li');
			li.innerHTML = `<a href="javascript:void(0)" onclick="showLyrics('${song.title}', '${song.lyrics.replace(/'/g, "\\'")}')">${song.title}</a>`;
favoritesList.appendChild(li);

			favoritesList.appendChild(li);
		});
	}
	
	window.showLyrics = function(title, lyrics) {
		modalLyrics.innerText = title;
		modalLyrics.innerText = lyrics;
		modal.style.display = 'block';
	}
			
		// Add to favorites
		if (!favorites.some(song => song.title === title)) {
			favorites.push({ title, lyrics });
			localStorage.setItem('favorites', JSON,stringify(favorites));
			renderfavorites();
		}
	
	renderfavorites();
});
	
document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const backToTopButton = document.getElementById('backToTop');
	window.onscroll = function() {
		if (document.body.scrollTop > 20 || documentElement.scrollTop > 20) {
			backToTopButton.style.display = "block";
		} else {
			bsckToTopButton.style.display = "none";
		}
	};
	
	backToTopButton.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const commentForm = document.getElementById('commentForm');
	const commentsList = document.getElementById('commentsList');
	
	commentForm.addEventListener('submit', (event) => {
		event.preventDefault();
		
		const commenterName = document.getElementById('commenterName').value;
		const commentText = document.getElementById('commentText').value;
		
		const commentItem = document.create.createElement('li');
		commentItem.innerHTML = '<strong>${commenterName}</strong><p>${commentText}</p>'>
		
		commentList.appendChild(commentItem);
		commentForm.reset();
	});
});


document.addEventListener('DOMContentLoaded', () => {
	// Existing code...

	const commentSearch = document.getElementById('commentSearch');
	
	commentSearch.addEventListener('keyup', () => {
		const filter = commentSearch.value.toLowerCase();
		const comment = commentList.getElementByTagName('li');
		
		for (let i = 0; i < comment,lenght; i++) {
			const commentText = comments[i].innerText.toLowerCase();
			comments[i].style.display = commentText.include(filter) ? '' : 'none';
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...

	const likeButton = document.getElementById('likeButton');
	const likeCount = document.getElementById('likeCount');
	let count = 0;
	
	likeButton.addEventListener('click', () => {
		count++;
		likeCount.innerText = count;
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	// Focus management for modal
	const modal = document.getElementById('lyricsModal');
const closeModal = modal.querySelector('.close');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.querySelector('button, input, textarea').focus();
});


document.addEventListener('DOMContentLoaded', () => {
	// Existing code...

	const ratingStars = document.querySelectorAll('#ratingStars .star');
	const averageRating = document.getElementById('averageRating');
	let rating = [0]; // Variable to store user's rating
	
	ratingStars.forEach(star => {
		star.addEventListener('click', () => {
			const ratingValue = parseInt(star.getAttribute('data-value'));
			rating.push(ratingValue);
			
			const sum = rating.reduce((a, b) => a + b, 0);
			const average =(sum / rating.lenght).toFixed(1);
			
			averageRating.innerText = average;
			
			ratingStars.forEach(s => {
				if (parsrInt(s.getAttribute('data-value')) <= ratingValue) {
					s.style.color = '#ffcc00';
				} else {
					s.style.color = '#ccc';
				}
			});
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...

	const lyricsSearch = document.getElementById('lyricsSearch');
lyricsSearch.addEventListener('keyup', () => {
    const filter = lyricsSearch.value.toLowerCase();
    // Now you can use 'filter' to perform filtering or other operations
});

		const songTitles = document.querySelectorAll('.song-list li');
		
		songTitles.forEach(song => {
			const text = song.innerText.toLowerCase();
			song.style.display = text,includes(filter) ? '' : 'none';
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const randomSongButton = document.getElementById('randomSongButton');
	const songTitles = document.querySelectorAll('.song-list li');
	
	randomSongButton.addEventListener('click', () => {
		const randomIndex = Math.floor(Math.randoom() * songTitles.length);
		const randomSong = songTitles[randomIndex];
		alert('Random Song: ${randomSong.innerText}');
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const contactButton = document.getElementById('contactButton');
	const contactModal = document.getElementById('contactModal');
	const closeContactModal = contactModal.querySelector('.close');
	
	contactButton.addEventListener('click', () => {
		contactModal.style.display = 'block';
	});
	
	closeContactModal.addEventListener('click', () => {
		contactModal.style.display = 'none';
	});
	
	window.addEventListener('click', (event) => {
		if (event.target == contactModal) {
			contactModal.style.display = 'none';
		}
	});
	
	const contactForm = document.getElementById('contactForm');
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		alert('your message has been sent!');
		contactModal.style.display = 'none';
		contactForm.reset();
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const themeToggle = document.getElementById('themeToggle');
	const body = document.body;
	
	themeToggle.addEventListener('change', () => {
		if (themeToggle.checked) {
			body.classList.add('dark-mode');
		} else {
			body.classList.remove('dark-mode');
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const newsletterForm = document.getElementById('newsletterForm');
	
	newsletterForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const email = document.getElementById('newsletterEmail').value;
		alert('Thank you for subscribing with ${email}');
		newsletterForm.reset();
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Existing code...
	
	const loginButton = document.getElementById('loginButton');
	
	loginButton.addEventListener('click', () => {
		alert('Please login to access this feature.');
		// implement your login logic here
	});
});

document.addEventListener('DOMContentLoded', () => {
	// Ecisting Code...
	
	// Example of simulating an error
	const simulateError = document.getElementById('simulateError');
	
	SimulateError.addEventListener('click', () => {
		const errorSection = document.getElementById('error');
		errorSection.style.display = 'block';
	});
});

document.addEventListener('DOMContentLoded', () => {
	const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
	
	bookmarkButtons.forEach(button => {
		button.addEventListener('click', () => {
			const songTitle = button.parentElement.querySelector('h3').textContent;
			alert('Bookmark added for "${songTitle}"');
			// implement bookmarking logic (e.g., save to localStorage or backend)
		});
	});
});

document.addEventListener('DOMContentLoded', () => {
	const songListItems = document.querySelectorAll('.song-list li');
	const relatedSongList = document.querySelector('.related-song-list');
	
	songListItems.forEach(item => {
		item.addEventListener('click', () =>{
			const selectSong = item.textContent.trim();
			// Example logic to fetch related songs (replace with actual implementation)
			const relatedSongs = ['Related Song A', 'Related Song B', 'Related Song C',];
			
			// Clear existing related songs
			relatedSongs.forEach(song => {
				const li = document.createElement('li');
				li.textContent = song;
				relatedSongList.appendChild(li);
			});
		});
	});
});

document.addEventListener('DOMContentLoded', () => {
	const languageSelect = document.getElementById('languageSelect');
	
	languageSelect.addEventListener('change', () => {
		const selectedLanguage = languageSelect.value;
		alert('Language changed to ${selectedLanguage}');
		// implement language change logic (e.g., fetch lyrics in selectd language)
	});
});

document.addEventListener('DOMContentLoded', () => {
	const searchForm = document.getElementById('searchForm');
	
	searchForm.addEventListener('submit', (event) => {
		event.preventListerner('submit', (event) => {
		const keywords = document.getElementById('searchInput').value;
		const genre = document.getElementById('genreSelect').value;
		alert('performing search with keywords: ${keywords}, genre: ${genre}');
		// implement search with keywords: ${keywords}, genre: ${genre}');
		// Implement search logic (e.g., fetch results based on keywords and genre)
	});
});

document.addEventListener('DOMConstentLoaded', () => {
	const increaseFontSizeButton = document.getElementById('increaseFontSize');
	const decreaseFontSizeButton = document.getElementById('decreaseFontSize');const toggleContrastButton = document.getElementById('toggleContrast');
	const body = document.body;
	
	increseFontSizeButton.addEventListener('click', () => {
		changeFontSize(2);
	});
	
	decreaseFontSizeButton.addEventListener('click', () => {
		changeFontSize(-2);
	});
	
	toggleContrastButton.addEventListener('click', () => {
		body.classList.toggle('high-contrast');
	});
	
	function changed(change) {
		const currentFontSize = parseFloat(getComputedStyle(body).fontSize);
		const newFontSize = currentFontSize + change;
		body.style.fontSize = '${newFontSize)px';
	}
});

document.addEventListener('DOMConstentLoaded', () => {
	const editProfileButton = document.getElementById('editProfile');
	const logoutButton = document.getElementById('logout');
	
	editProfileButton.addEventListener('click', () => {
		alert('implementedit profile functionality.');
		// Implement edit profile logic (e.g., show editable fields)
	});
});

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });
});