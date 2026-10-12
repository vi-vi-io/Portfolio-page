// === IMAGE SLIDER ======== >
// Scrolling and snapping are native CSS (scroll-snap); this adds the arrow
// buttons, dots and keyboard support, and keeps the active dot in sync.
document.querySelectorAll('.image-slider').forEach(function (slider) {
	var track = slider.querySelector('.image-slider-track');
	var slides = slider.querySelectorAll('.image-slider-slide');
	var dots = slider.querySelectorAll('.image-slider-dots button');
	var prev = slider.querySelector('.prev');
	var next = slider.querySelector('.next');

	function current() {
		return Math.round(track.scrollLeft / track.clientWidth);
	}

	function goTo(index) {
		index = Math.max(0, Math.min(slides.length - 1, index));
		track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
	}

	function update() {
		var index = current();
		dots.forEach(function (dot, i) {
			dot.classList.toggle('active', i === index);
			dot.setAttribute('aria-current', i === index ? 'true' : 'false');
		});
		prev.disabled = index === 0;
		next.disabled = index === slides.length - 1;
	}

	prev.addEventListener('click', function () { goTo(current() - 1); });
	next.addEventListener('click', function () { goTo(current() + 1); });
	dots.forEach(function (dot, i) {
		dot.addEventListener('click', function () { goTo(i); });
	});
	track.addEventListener('keydown', function (e) {
		if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current() - 1); }
		if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current() + 1); }
	});

	var ticking = false;
	track.addEventListener('scroll', function () {
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(function () { update(); ticking = false; });
	});
	window.addEventListener('resize', update);
	update();
});
