window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html
}

function fetchQuotes(topic, count) {
   
   let url = "https://wp.zybooks.com/quotes.php?topic=" + encodeURIComponent(topic) + "&count=" + count;

   
   $.get(url, function(data) {
       if (data.error) {
           
           $("#quotes").html(data.error);
       } else {
           
           const ol = $("<ol></ol>");
           data.forEach(quote => {
               const li = $("<li></li>").text(`${quote.quote} - ${quote.source}`);
               ol.append(li);
           });
           
           $("#quotes").empty().append(ol);
       }
   }).fail(function() {
       
       $("#quotes").html("An error occurred. Please try again.");
       console.error("Error fetching quotes");
   });
}

