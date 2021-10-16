// GSAP Animation
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))

// GSAP TimelineLite Animation
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease:Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease:Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease:Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(55% - 6px)`, ease:Power4.easeOut})

// ScrollMagic Scene
const controller = new ScollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

function showRequiredCategory(event){
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for(i=0; i<categories.length; i++) {
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }
    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}