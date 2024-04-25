let slideIndex = 1;

showSlides(slideIndex);
var i = 0;
var text = "Learning Web Development";
introText();

function introText() {
	if (i < text.length) {
		document.getElementById("Hero").innerHTML += text.charAt(i);
		i++;
		setTimeout(introText, 75);
	}
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	const slides = document.getElementsByClassName("slides");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
function SendMail() {
	var params = {
		from_name : document.getElementById("fullName").value,
		email_id : document.getElementById("email_id").value,
		message : document.getElementById("message").value,
	}
	emailjs.send("service_m600hbq","template_2zli3eh", params).then(function (res) {
		alert("Success! " + res.status);
	})
}