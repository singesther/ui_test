function displaySideBar(){
  document.querySelector('#sidebar').style.display = "block";


} 
function closebtn(){
  document.querySelector('#sidebar').style.display = "none";
  document.querySelector('#btntoggle').style.display = "block";

}


function showMoremaids(){
  document.querySelector('.viewMore').style.display = "none";
  document.querySelector('.moremaid').style.display = "flex";
  document.querySelector('#othermaids').style.display = "flex";
}
function lessmaids(){
  document.querySelector('.moremaid').style.display = "none";
  document.querySelector('.viewMore').style.display = "block";
  document.querySelector('#othermaids').style.display = "none";
}


function displayReview(){
  document.querySelector('.reviewmaidship').style.display = 'flex';
  document.querySelector('.maids').style.opacity = '0.2';
  document.querySelector('.containerIndex').style.opacity = '0.2';
  
}
