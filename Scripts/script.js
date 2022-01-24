// particulas background
function createBox() {

    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 80;

    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
	span.style.borderRadius = "50%"
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.gradient-background').appendChild(span);

    setTimeout(() =>{
        span.remove();
    },5000)

}

setInterval(createBox, 400);



const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
	if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
});

// portifolio popup

document.addEventListener("click", (e)=>{
	if(e.target.classList.contains("view-project-btn")){
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
})
function togglePortfolioPopup(){
	document.querySelector(".portfolio-popup").classList.toggle("open");
	document.body.classList.toggle("hide-scrolling");
	document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

// esconder popup

document.addEventListener("click", (e)=>{
	if(e.target.classList.contains("pp-inner")){
		togglePortfolioPopup();
		document.querySelector(".portfolio-popup").scrollTo(0,0)
		portfolioItemDetails(e.target.parentElement)
	}
})

function portfolioItemDetails(portfolioItem){
	document.querySelector(".pp-thumbnail img").src=
	portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
	
	document.querySelector(".pp-header h3").innerHTML = 
	portfolioItem.querySelector(".portfolio-item-title").innerHTML

	document.querySelector(".pp-body").innerHTML = 
	portfolioItem.querySelector(".portfolio-item-details").innerHTML
}