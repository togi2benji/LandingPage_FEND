/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');

//var a = document.getElementByTagname('a');
//var section = document.getElementByTagname('section');
//var theParent = document.getElementByID("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function createListwithAnchor(text,link,classNumber){
  var list = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.href = link;
  anchor.innerText = text;
  anchor.class = classNumber;
  list.appendChild(anchor);
  console.log(list);
  return list;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
function buildMenu(){
  ul.appendChild(createListwithAnchor('Section 1', '#section1','1'));
  ul.appendChild(createListwithAnchor('Section 2', '#section2','2'));
  ul.appendChild(createListwithAnchor('Section 3', '#section3','3'));
}
// Add class 'active' to section when near top of
function setActive(){
  window.addEventListener('scroll',(event) =>{
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    if ((section1.offsetTop - window.pageYOffset) > -15 && (section1.offsetTop - window.pageYOffset) < 100){
      section1.classList.add("your-active-class");
    } else{
      section1.classList.remove("your-active-class");
    }
    if ((section2.offsetTop - window.pageYOffset) > -15 && (section2.offsetTop - window.pageYOffset) < 100){
      section2.classList.add("your-active-class");
    } else{
      section2.classList.remove("your-active-class");
    }
    if ((section3.offsetTop - window.pageYOffset) > -15 && (section3.offsetTop - window.pageYOffset) < 100){
      section3.classList.add("your-active-class");
    } else{
      section3.classList.remove("your-active-class");
    }
  });
};

/*This part of the code was found on the following website:
http://www.javascriptkit.com/javatutors/scrolling-html-bookmark-javascript.shtml
*/
function scrollOnClick(){
  let links = document.querySelectorAll('a[href^="#"]');
  //console.log(anchorlinks);
  for (let item of links) { // relitere
      item.addEventListener('click', (e)=> {
          let hash = item.getAttribute('href');
          //console.log(hash);
          let target = document.querySelector(hash);
          //console.log(target);
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          history.pushState(null, null, hash);
          e.preventDefault();
      });
  };
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildMenu();
// Scroll to section on link click
scrollOnClick();
// Set sections as active
setActive();
