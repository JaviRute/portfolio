// Initialize fullPage.js on the #fullpage element
new fullpage('#fullpage', {
    // Enable auto scrolling
    autoScrolling: true,
    // Set the background color of each section
    sectionsColor: ['#07131F', '#014751', '#016F80', '#014751', '#07131F'],
    // Define anchors for each section
    anchors: ['intro', 'about', 'projects', 'skills', 'contact'],
    // Show navigation
    navigation: true,
    // Show active tooltip
    showActiveTooltip: true,
    slidesNavigation: true,
});