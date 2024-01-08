/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myNav() {
    var x = document.getElementById("myNavLinks");
    if (x.className === "navLinks") {
      x.className += " active";
    } else {
      x.className = "navLinks";
    }

    window.onscroll = () => {
        x.classList.remove("active");
    };
  }


function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_fvfq7r8";
  const templateID = "template_oh40zwk";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}