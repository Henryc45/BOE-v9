// Filtering buttons
$("#weld").click(function(){
  $("br.tradespace").before($("#weld").text(), "   ")
})
$("#hvac").click(function(){
  $("br.tradespace").before($("#hvac").text(), "   ")
})
$("#miami").click(function(){
  $(".resetfilters").before($("#miami").text(), "   ")
})
$("#tampa").click(function(){
  $(".resetfilters").before($("#tampa").text(), "   ")
})
$(".submitfilters").click(function(){

})
$(".resetfilters").click(function(){

})

// var numberOfFilterButtons = document.querySelectorAll(".tradefilterbtn").length;
            // for (var i = 0; i < numberOfFilterButtons; i++)
            //   {
            //   document.querySelectorAll(".tradefilterbtn")[i].addEventListener("click", FilterTrades);
            //   function FilterTrades(){
            //     alert("I got clicked");
            //   }};

// Search Bar
function searchbarfunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gallery1");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Create variables for left side gallery
function basicListItem (organization, trade, category, location){
  this.organization= organization;
  this.trade= trade;
  this.category= category;
  this.location= location;
}

// Create variables for right side gallery
function inDepthListItem (organization, trade, category, location, acceptanceRate, pointOfContact, website){
  this.organization= organization;
  this.trade= trade;
  this.category= category;
  this.location= location;
  this.acceptancerate= acceptanceRate;
  this.pointofcontact= pointOfContact;
  this.website= website;
}
var basicListItem1= new basicListItem("Florida Career College", "HVAC", "Technical School", "Miami, FL");
var inDepthListItem1= new inDepthListItem("Florida Career College", "HVAC", "Technical School", "Miami, FL",
"75%","Steven Smith","https://www.floridacareercollege.edu/");
