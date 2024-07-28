AOS.init();

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// nav

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
        
    } else{
        navbar.classList.remove('bg')
        
    }
})



// contact form

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
    };
  
    const serviceID = "service_yeokr4q";
    const templateID = "template_v44v7yr";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("phone").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  


// boonow page


function multiplyBy()

{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        var total = parseInt(num1)  * parseInt(num2);
        // var totalprice= (total*5/100)+total;
        console.log("Rs."+total)
}

// client pictures



// client pictures

document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
      { src: './image/img85.jpg'},
      { src: './image/img91.jpg'},
      { src: './image/img86.jpg'},
      { src: './image/img87.jpg'},
      // { src: './image/img81.jpg'},
      // { src: './image/img82.jpg'},
      // { src: './image/img83.jpg'},
     
        { src: './image/img92.jpg'},
        { src: './image/img93.jpg'},
        { src: './image/img94.jpg'},
      { src: './image/img84.jpg'},
     
      // { src: './image/img88.jpg'},
      { src: './image/img89.jpg'},
      { src: './image/img90.jpg'},
      // { src: './image/img71.jpg'},
      { src: './image/img72.jpg'},
      { src: './image/img73.jpg'},
      { src: './image/img74.jpg'},
      { src: './image/img75.jpg'},
      { src: './image/img76.jpg'},
      { src: './image/img77.jpg'},
      { src: './image/img78.jpg'},
      { src: './image/img79.jpg'},
      { src: './image/img80.jpg'},
      { src: './image/img51.jpg'},
        // { src: './image/img52.jpg'},
        { src: './image/img53.jpg'},
        { src: './image/img54.jpg'},
        { src: './image/img55.jpg'},
        { src: './image/img56.jpg'},
        { src: './image/img57.jpg'},
        { src: './image/img58.jpg'},
        { src: './image/img59.jpg'},
        { src: './image/img60.jpg'},
        { src: './image/img61.jpg'},
        // { src: './image/img62.jpg'},
        { src: './image/img63.jpg'},
        { src: './image/img64.jpg'},
        { src: './image/img65.jpg'},
        { src: './image/img66.jpg'},
        // { src: './image/img67.jpg'},
        { src: './image/img68.jpg'},
        { src: './image/img69.jpg'},
        { src: './image/img70.jpg'},
      { src: './image/img31.jpg'},
      { src: './image/img32.jpg'},
      // { src: './image/img33.jpg'},
      { src: './image/img34.jpg'},
      { src: './image/img35.jpg'},
      { src: './image/img36.jpg'},
      // { src: './image/img37.jpg'},
      { src: './image/img38.jpg'},
      { src: './image/img39.jpg'},
      { src: './image/img40.jpg'},
      { src: './image/img41.jpg'},
      { src: './image/img42.jpg'},
      { src: './image/img43.jpg'},
      { src: './image/img44.jpg'},
      { src: './image/img45.jpg'},
      { src: './image/img46.jpg'},
      { src: './image/img47.jpg'},
      { src: './image/img48.jpg'},
      { src: './image/img49.jpg'},
      { src: './image/img50.jpg'},
      { src: './image/img16.jpg'},
      { src: './image/img17.jpg'},
      { src: './image/img18.jpg'},
      { src: './image/img19.jpg'},
      { src: './image/img20.jpg'},
      { src: './image/img21.jpg'},
      { src: './image/img22.jpg'},
      { src: './image/img23.jpg'},
      { src: './image/img24.jpg'},
      { src: './image/img25.jpg'},
      { src: './image/img26.jpg'},
      { src: './image/img27.jpg'},
      { src: './image/img28.jpg'},
      { src: './image/img29.jpg'},
      { src: './image/img30.jpg'},
      { src: './image/img10.jpg'},
      { src: './image/img11.jpg'},
      { src: './image/img12.jpg'},
      { src: './image/img13.jpg'},
      { src: './image/img14.jpg'},
      { src: './image/img15.jpg'},
      { src: './image/img1.jpg'},
        { src: './image/img2.jpg'},
        { src: './image/img3.jpg'},
        { src: './image/img4.jpg'},
        { src: './image/img5.jpg'},
        { src: './image/img6.jpg'},
        { src: './image/img7.jpg'},
        { src: './image/img8.jpg'},
        { src: './image/img9.jpg'},
    ];
  
    const carouselTrack = document.querySelector('.carousel-track');
  
    const createSlide = ({ src, description }) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide2';
  
      const imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.alt = description;
  
      const overlayElement = document.createElement('div');
      overlayElement.className = 'overlay';
      overlayElement.textContent = description;
  
      slideElement.append(imgElement, overlayElement);
  
      return slideElement;
    };
  
    const populateCarouselTrack = (slides) => {
      const fragment = document.createDocumentFragment();
      slides.forEach(slide2 => fragment.appendChild(createSlide(slide2)));
  
      // Duplicate slides to create a seamless loop effect
      slides.forEach(slide2 => fragment.appendChild(createSlide(slide2)));
  
      carouselTrack.appendChild(fragment);
  
      const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
      const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
      const totalWidth = (slideWidth + gapWidth) * slides.length;
      const duplicatedTotalWidth = totalWidth * 2;
      const halfTotalWidth = duplicatedTotalWidth / 2;
  
      carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);
  
      const baseDuration = 40; // secondes | default = 40
      const baseWidth = 5000; // px | default = 5000
      const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;
  
      carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };
  
    populateCarouselTrack(slidesData);
  });
  







