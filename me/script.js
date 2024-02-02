function showPage(pageId) {
  // Hide all pages
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';

  // Show the selected page
  document.getElementById(pageId).style.display = 'block';
}
