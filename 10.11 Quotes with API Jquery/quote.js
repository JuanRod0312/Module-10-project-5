$(function () {
   $("#fetchQuotesBtn").click(function () {
      
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   
   let url = "https://wp.zybooks.com/quotes.php?topic=" + encodeURIComponent(topic) + "&count=" + count;

   $.get(url, function(response) {
       let html = "<ol>";
       
       
       response.forEach((quote, index) => {
           html += `<li>${quote.text} - ${quote.author || "Anonymous"}</li>`;
       });

       html += "</ol>";

       $("#quotes").html(html);
   })
}

