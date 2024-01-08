const reviews = [
    {
        id:1,
        image:'woman2.png',
        name: 'Susan Jane Smith',
        designation: 'Web Developer',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi ad facilis cupiditate quibusdam consectetur autem eligendi unde quidem voluptas corporis expedita doloribus corrupti, itaque qui reiciendis, eos delectus. Neque?"
    },
    {
        id:2,
        image:'man.png',
        name: 'John Doe',
        designation: 'Customer Consultant',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi ad facilis cupiditate quibusdam consectetur autem eligendi unde quidem voluptas corporis expedita doloribus corrupti, itaque qui reiciendis, eos delectus. Neque?"
    },
    {
        id:3,
        image:'man2.png',
        name: 'Brian Lara',
        designation: 'Cricketer',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi ad facilis cupiditate quibusdam consectetur autem eligendi unde quidem voluptas corporis expedita doloribus corrupti, itaque qui reiciendis, eos delectus. Neque?"
    },
    {
        id:4,
        image:'woman.png',
        name: 'Serena Williams',
        designation: 'Graphic Designer',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi ad facilis cupiditate quibusdam consectetur autem eligendi unde quidem voluptas corporis expedita doloribus corrupti, itaque qui reiciendis, eos delectus. Neque?"
    }
];
let current = 0;
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

let avatar = document.getElementById('avatar'); 
let nameOfPerson = document.getElementById('nameOfPerson'); 
let designation = document.getElementById('designation'); 
let words = document.getElementById('review'); 
window.addEventListener('DOMContentLoaded',()=>{
    setReviews(reviews[current]);
    console.log(reviews[current]);
    // alert(designation);
})



next.addEventListener('click',()=>{
    // console.log('click)
    current++;
    if(current > reviews.length -1 ){
        current = 0;
    }
    setReviews(reviews[current]);

})

const setReviews = (data)=>{
    avatar.src = `images/${data.image}`;
    nameOfPerson.textContent = data.name;
    designation.textContent = data.designation;
    words.textContent = data.review;
}