const reviews = [
    {
        employee: 'John Smith',
        role: 'UX Designer',
        image: 'imgs/foto1.jpg',
        testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati autem et aperiam facere ipsam quis consequuntur quae temporibus nostrum necessitatibus libero, saepe labore voluptatibus debitis perspiciatis, minima nam mollitia.',
    },

    {
        employee: 'Lily Johnson',
        role: 'Copywriter',
        image: 'imgs/foto2.jpg',
        testimonial: 'Bacon ipsum dolor amet boudin shankle corned beef landjaeger meatball ham hock turkey porchetta t-bone short ribs. Shank ribeye brisket cupim tri-tip jowl spare ribs cow picanha tongue sausage venison. Pig beef ribs filet mignon drumstick.',
    },

    {
        employee: 'Marcus James',
        role: 'Fullstack Developer',
        image: 'imgs/foto3.jpg',
        testimonial: 'T-bone cupim swine pork chop ground round, boudin leberkas brisket sausage chuck pork belly sirloin ribeye pork meatloaf. Flank corned beef chislic pig capicola, shoulder pork chop prosciutto swine sausage. Prosciutto t-bone tenderloin chislic. Brisket jowl pig sausage ribeye.',
    },

    {
        employee: 'Susan Chang',
        role: 'Team Manager',
        image: 'imgs/foto4.jpg',
        testimonial: 'Jerky boudin drumstick short ribs shankle. T-bone bacon frankfurter tongue tri-tip pork loin cupim, brisket tail biltong chuck boudin. Chislic sausage leberkas jerky bacon. Pancetta flank pig pork loin t-bone pork chop frankfurter biltong.',
    }
]

//select elements
const img = document.getElementById('foto1');
const name = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

//set initial item
let currentItem = 0;

//show person function
function showPerson() {
    const person = reviews[currentItem];
    img.src = person.image;
    name.textContent = person.employee;
    job.textContent = person.role;
    info.textContent = person.testimonial;
}

//Load initial person (currentItem = 0)
window.addEventListener('DOMContentLoad', () => {
    showPerson();
})

//Change person
prevBtn.addEventListener('click', () => {
    currentItem--;
    //go to last person if currentItem is negative
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

nextBtn.addEventListener('click', () => {
    currentItem++;
    //reset people based on currentItem value
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})