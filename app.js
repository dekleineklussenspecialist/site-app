



let reviewIndex = 0;

for(review of reviews){

	let stars = `<img width="30px" src="star_full.svg">`.repeat(Math.floor(review.rank));
	if(review.rank % 1 !== 0){
		stars += `<img width="30px" src="star_half.svg">`;
	}

	const reviewItem = 
	`<div class="accordion-item bg-transparent">

		<button class="accordion-button bg-transparent ${reviewIndex === 0 ? 'true' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#review${reviewIndex}" aria-expanded="${reviewIndex === 0 ? 'true' : 'false'}" aria-controls="review${reviewIndex}">
			<div class="row text-center w-100 pt-2 pb-1">
				<div class="star-container col-12">${stars}</div>
				<span class="quote mt-2 col-12">"${review.quote}"</span>
			</div>
		</button>

		<div class="accordion-collapse ${reviewIndex === 0 ? 'show' : ''} collapse" data-bs-parent="#reviews" id="review${reviewIndex}">
			<div class="text-white pt-3 accordion-body">${review.text}</div>
		</div>
	</div>`;

	reviewIndex++;
	document.querySelector('#reviews').innerHTML += reviewItem;
}


for(card of cards){

	const mobileCard = 
	`<div class="card mb-3">
	<div class="row">
		<div class="col-sm-5 col-xs-6 mobile-card-img" style="background-size: cover; background-image:url('${card.image}');"></div>
		<div class="col-sm-7  col-xs-6">
			<div class="card-body d-block h-100">
				<table style="height: 100%; width: 100%;">
					<td class="align-middle">
						<h5 class="card-title">${card.title}</h5>
						<p class="card-text">${card.subtitle}</p>
					</td>
				</table>
			</div>
		</div>
	</div>
	</div>`;

	const desktopCard = `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
	<div class="card">

		<div class="col-sm-5 col-xs-6 card-img card-img-top" style="background-size: cover; background-image:url('${card.image}');"></div>
		<div class="card-body">
			<h5 class="card-title">${card.title}</h5>
			<p class="card-text">${card.subtitle}</p>
		</div>
	</div>
	</div>`;


	document.querySelector('#cardsMobile').innerHTML += mobileCard;
	document.querySelector('#cardsDesktop').innerHTML += desktopCard;


}

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
