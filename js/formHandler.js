const message = document.querySelector('.messageSec')
const nameSec = document.querySelector('.nameSec')
const email = document.querySelector('.email')
const submitbtn = document.querySelector('.submitbtn')
const form = document.querySelector('form')
const formFeedback = document.querySelector('.formFeedback')
console.log(submitbtn);

submitbtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (nameSec.value === '' || email.value === '' || message.value === '') {
    formFeedback.innerHTML = "Please enter all credentials";
    form.reset();
  } else {
    formFeedback.innerHTML = "Sending email...";
    fetch("https://formsubmit.co/ajax/isaaclumato10@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          nameSec: nameSec.value,
          email: email.value,
          message: message.value
        })
      })
      .then(response => response.json())
      .then(data => (formFeedback.innerHTML = data.message))
      .catch(error => formFeedback.innerHTML = error.message);

    form.reset();
  }
})