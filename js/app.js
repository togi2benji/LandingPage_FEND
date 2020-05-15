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
  ul.appendChild(createListwithAnchor('Section 4', '#section4','4'));
}
// Add class 'active' to section when near top of
function setActive(){
  window.addEventListener('scroll',(event) =>{
    //menuhighlight();
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    if ((section1.offsetTop - window.pageYOffset) > -100 && (section1.offsetTop - window.pageYOffset) < 200){
      section1.classList.add("your-active-class");
      document.links[0].classList.add("active");
    } else{
      section1.classList.remove("your-active-class");
      document.links[0].classList.remove("active");
    }
    if ((section2.offsetTop - window.pageYOffset) > -100 && (section2.offsetTop - window.pageYOffset) < 200){
      section2.classList.add("your-active-class");
      document.links[1].classList.add("active");
    } else{
      section2.classList.remove("your-active-class");
      document.links[1].classList.remove("active");
    }
    if ((section3.offsetTop - window.pageYOffset) > -100 && (section3.offsetTop - window.pageYOffset) < 200){
      section3.classList.add("your-active-class");
      document.links[2].classList.add("active");
    } else{
      section3.classList.remove("your-active-class");
      document.links[2].classList.remove("active");
    }
    if ((section4.offsetTop - window.pageYOffset) > -100 && (section4.offsetTop - window.pageYOffset) < 200){
      section4.classList.add("your-active-class");
      document.links[3].classList.add("active");
    } else{
      section4.classList.remove("your-active-class");
      document.links[3].classList.remove("active");
    }
  });
};

/*This part of the code was found on the following website:
http://www.javascriptkit.com/javatutors/scrolling-html-bookmark-javascript.shtml
*/
function scrollOnClick(){
  let linksa = document.querySelectorAll('a[href^="#"]');
  //console.log(anchorlinks);
  for (let item of linksa) { // relitere
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
/*
function menuhighlight(){
  var active = 0;
  var activeList = document.links[active];
  for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href === document.URL) {
          active = i;
          activeList.classList.add ("active");
          console.log(activeList);
      }
      else{
          activeList.classList.remove ("active");
      }
  }
};
*/


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
