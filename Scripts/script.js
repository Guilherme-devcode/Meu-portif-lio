// particulas background
// function createBox() {

//     let span = document.createElement('span');

//     span.classList.add('animated-box');

//     let size = Math.random() * 50;

//     span.style.height = 20 + size + 'px';
//     span.style.width = 20 + size + 'px';

//     span.style.top = Math.random() * innerHeight + 'px';
// 	span.style.borderRadius = "50%"
//     span.style.left = Math.random() * innerWidth + 'px';

//     document.querySelector('.gradient-background').appendChild(span);

//     setTimeout(() =>{
//         span.remove();
//     },5000)

// }

// setInterval(createBox, 400);



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
	document.querySelector(".pp-thumbnail img").src =
	portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
	
	document.querySelector(".pp-header h3").innerHTML = 
	portfolioItem.querySelector(".portfolio-item-title").innerHTML

	document.querySelector(".pp-body").innerHTML = 
	portfolioItem.querySelector(".portfolio-item-details").innerHTML
}

// Navegação

const navToggler = document.querySelector(".nav-toggler")
navToggler.addEventListener("click", ()=>{
	hideSection();
	toggleNavbar();
	document.body.classList.toggle("hide-scrolling")
})
function toggleNavbar(){
	document.querySelector(".header").classList.toggle("active");
	
}
function hideSection(){
	document.querySelector("section.active").classList.toggle("fade-out")
	
}

// Sessao ativa

document.addEventListener("click", (e)=>{
	if(e.target.classList.contains("link-item") && e.target.hash !== ""){
		// ativar overlay
		document.querySelector(".overlay").classList.add("active");	
		navToggler.classList.add("hide")
		if(e.target.classList.contains("nav-item")){
			toggleNavbar();
		}
		else{
			hideSection();
			document.body.classList.add("hide-scrolling")

		}
		setTimeout(()=>{
			document.querySelector("section.active").classList.remove("active", "fade-out")
			document.querySelector(e.target.hash).classList.add("active");
			window.scrollTo(0,0)
			document.body.classList.remove("hide-scrolling")
			navToggler.classList.remove("hide")
			document.querySelector(".overlay").classList.remove("active");	
		},500)
	}
})