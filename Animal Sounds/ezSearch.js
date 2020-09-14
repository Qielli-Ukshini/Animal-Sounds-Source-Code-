function ezSearch()
{
  var prefix = "https://google.com/search?q=";
  var search = prompt("EZSearch");
  var encoded_search = encodeURIComponent(search);
  var url = prefix + encoded_search;
  open(url)
}
document.onkeydown = function(e) {
  if (e.keyCode == 45)
  {
    ezSearch();
  }
}
document.onkeyup = function(e) {
}
