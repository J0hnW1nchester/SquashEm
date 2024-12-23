const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const userLocation = document.querySelector('.location');

// * If you want to add more testimonials you have to update this array here:
const testimonials = [
  {
    name: 'Pinkianca',
    location: 'Pufftown, Brazil',
    photo: '/img/BiancaTestimonial.webp',
    text: "If you're having problems with mosquitoes, John is the right guy! His exterminator services are high quality! I was tired of those mosquitoes in my house and now they're all gone! John is also very friendly and attentive, what makes his visit a real pleasure. I am very satisfied with what that man can do, and will definitely ask for his services again in the future. Highly recommended!",
  },
  {
    name: 'Juonis',
    location: 'Vilnius, Lithuania',
    photo: '/img/JonasEMO.webp',
    text: 'Yeah I write reviews for my own company so what!',
  },
  {
    name: 'Lily',
    location: 'Hong Kong',
    photo: '/img/LilyTestimonial.webp',
    text: 'I am a mum of three and I was looking for a "mosquito hunter" as my children are very young and they cannot inhale electric mosquito repellent. Luckily, God brought me John, who is an excellent hunter with a well-deserved reputation. Now, my children and I can sleep peacefully. I cannot tell you how much I appreciate John and wish he could help more people!',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, location, photo, text } = testimonials[idx];

  testimonial.innerHTML = text; /* The paragraph (p) in the HTML */
  userImage.src = photo; /* The user-image class in the HTML */
  username.innerHTML = name; /* The username class in the HTML */
  userLocation.innerHTML = location; /* The location class in the HTML */

  idx++;

  // * This function here will make the testimonials start running from the beginning when they reach the end
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

// * The milliseconds have to match the CSS .progress-bar class animation seconds (100000 = 10s)
setInterval(updateTestimonial, 10000);
