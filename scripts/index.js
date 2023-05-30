// botões Git e linkedin
let bt_github = document.querySelector('.bt_github');
bt_github.addEventListener('click',()=>{
    window.location.href = "https://github.com/amandadeusilva";
})
let bt_linkedin = document.querySelector('.bt_linkedin');
bt_linkedin.addEventListener('click',()=>{
    window.location.href = "https://linkedin.com/in/amanda-silva-a4729366";
})
window.onload = function(){
  document.querySelector(".navbar__mobile").addEventListener("click", function(){
  if(document.querySelector(".navbar__mobile ul").style.display =='flex') {
      document.querySelector(".navbar__mobile ul").style.display ='none';
  } else{
      document.querySelector(".navbar__mobile ul").style.display ='flex';
  }
  });
};