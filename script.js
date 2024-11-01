// // popup for page

// document.addEventListener('DOMContentLoaded', function() {
//     const popupContainer = document.getElementById('popupContainer');
//     const closeBtn = document.getElementById('closeBtn');

//     // Function to show the popup after 3 seconds
//     function showPopup() {
//         popupContainer.style.display = 'block';
//     }

//     // Delay the popup by 3 seconds after the page loads
//     setTimeout(showPopup, 2000);

//     // Close the popup when close button is clicked
//     closeBtn.addEventListener('click', function() {
//         popupContainer.style.display = 'none';
//     });

//     // Prevent scrolling when the popup is open
//     popupContainer.addEventListener('click', function(event) {
//         if (event.target === popupContainer) {
//             popupContainer.style.display = 'none';
//         }
//     });

//     // Add class to body to prevent scrolling when popup is open
//     document.body.classList.add('popup-open');
// });



// form submission
const form = document.getElementById('form');
        const result = document.getElementById('result');
        
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const formData = new FormData(form);
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
          result.innerHTML = "Please wait..."
        
            fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = "Form submitted successfully";
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                    }
                })
                .catch(error => {
                    console.log(error);
                    result.innerHTML = "Something went wrong!";
                })
                .then(function() {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 3000);
                });
        });


/* CAROUSEL  */

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlides() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides();
}

setInterval(nextSlide, 5000);


/*  OUR MISSION FUNCTION & GOAL */

function mission(){
    document.getElementById('mission').style.visibility = "visible" ;
    document.getElementById('vision').style.visibility = "hidden" ;
    document.getElementById('goal').style.visibility = "hidden" ;
}

function vision(){
    document.getElementById('vision').style.visibility = "visible" ;
    document.getElementById('goal').style.visibility = "hidden" ;
    document.getElementById('mission').style.visibility = "hidden" ;
}

function goal(){
    document.getElementById('goal').style.visibility = "visible" ;
    document.getElementById('mission').style.visibility = "hidden" ;
    document.getElementById('vision').style.visibility = "hidden" ;
}


/*  NUMBER COUNTER BAR */


let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    } , duration)

})

/*   STUDENT CORNER NOTIFICATIONS */

document.addEventListener('DOMContentLoaded', function() {
    const notificationColumn = document.getElementById('notificationColumn');

    const notifications = [
        { type: 'info', message: 'Admission Open for Session 2024-25', image: 'https://via.placeholder.com/40' },
        { type: 'success', message: 'Exam Results are out', image: 'https://via.placeholder.com/40' },
        { type: 'error', message: 'Exam Forms for BCA  are Out collect it from Office', image: 'https://via.placeholder.com/40' },
        { type: 'info', message: 'workshop on Python on 1/7/24', image: 'https://via.placeholder.com/40' },
        { type: 'error', message: '1/7/24 will be holiday', image: 'https://via.placeholder.com/40' },
        { type: 'success', message: 'Today is halfday', image: 'https://via.placeholder.com/40' },
        { type: 'info', message: '1/7/24 will be holiday', image: 'https://via.placeholder.com/40' }
    ];

    let index = 0;

    function displayNotification(notification) {
        const notificationElement = document.createElement('div');
        notificationElement.className = `notification ${notification.type}`;
        notificationElement.innerHTML = `<img src="${notification.image}" alt="Notification Image"><p>${notification.message}</p>`;
        notificationColumn.appendChild(notificationElement);

        setTimeout(() => {
            notificationElement.classList.add('show');
        }, 100); // Wait for the element to be added to the DOM

        // Remove notification after 5 seconds
        setTimeout(() => {
            notificationElement.classList.remove('show');
            setTimeout(() => {
                notificationColumn.removeChild(notificationElement);
            }, 500); // Wait for the transition to complete before removing the element
        }, 7000); // 5000ms for display + 500ms transition time
    }

    function showNotifications() {
        const currentNotification = notifications[index];
        displayNotification(currentNotification);

        index = (index + 1) % notifications.length; // Loop through notifications

        // Schedule next notification
        setTimeout(showNotifications, 1500); // Display each notification for 6 seconds and wait 1 second before the next
    }

    // Start the loop
    showNotifications();
});



/*  FOR TABLET VIEW NAVBAR */

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



//downloaded animation



function downloading1(){
      document.getElementById('downloaded1').style.display = "initial";
      document.getElementById('download-text1').style.display = "none";
      document.getElementById('download-sign1').style.display = "none";
      document.getElementById('download-button1').style.backgroundColor = "white";
      document.getElementById('download-button1').style.border = "none";
}

function downloading2(){
    document.getElementById('downloaded2').style.display = "initial";
    document.getElementById('download-text2').style.display = "none";
    document.getElementById('download-sign2').style.display = "none";
    document.getElementById('download-button2').style.backgroundColor = "white";
    document.getElementById('download-button2').style.border = "none";
}

function downloading3(){
    document.getElementById('downloaded3').style.display = "initial";
    document.getElementById('download-text3').style.display = "none";
    document.getElementById('download-sign3').style.display = "none";
    document.getElementById('download-button3').style.backgroundColor = "white";
    document.getElementById('download-button3').style.border = "none";
}

function downloading4(){
    document.getElementById('downloaded4').style.display = "initial";
    document.getElementById('download-text4').style.display = "none";
    document.getElementById('download-sign4').style.display = "none";
    document.getElementById('download-button4').style.backgroundColor = "white";
    document.getElementById('download-button4').style.border = "none";
}

function downloading5(){
    document.getElementById('downloaded5').style.display = "initial";
    document.getElementById('download-text5').style.display = "none";
    document.getElementById('download-sign5').style.display = "none";
    document.getElementById('download-button5').style.backgroundColor = "white";
    document.getElementById('download-button5').style.border = "none";
}

function downloading6(){
    document.getElementById('downloaded6').style.display = "initial";
    document.getElementById('download-text6').style.display = "none";
    document.getElementById('download-sign6').style.display = "none";
    document.getElementById('download-button6').style.backgroundColor = "white";
    document.getElementById('download-button6').style.border = "none";
}







