

$('#shorten').click(function (){

    var inputUrl = $('#link').val()
    $.ajax({
        url: "https://jutify.000webhostapp.com/api/shorten",
        type: "POST",
        data: {
          actual_link: inputUrl,
          custom_password: "Tite_ni_IshowSpeed_lumitaw",
        },
        dataType: "JSON",
        success: function (response) {
          const tempInput = document.createElement("input");
          tempInput.style.position = "absolute";
          tempInput.style.left = "-1000px";
          tempInput.value =  response.shortened_url;
          document.body.appendChild(tempInput);
  
          // Select and copy the link
          tempInput.select();
          document.execCommand("copy");
  
          // Remove the temporary input element
          document.body.removeChild(tempInput);
  
          Swal.fire({
            title: "Shortened Link",
            text:
              response.shortened_url +
              "Link copied to clipboard!",
            icon: "success",
          });
        },
      });
})