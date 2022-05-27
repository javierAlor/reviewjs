const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  


document.addEventListener("DOMContentLoaded", function(){
  let btn_random = document.querySelector("#btn_random");
  let currentItem = 0;
  let item = reviews[currentItem];
  let person_img = document.querySelector("#person-img");
  let autor = document.querySelector("#autor");
  let profesion = document.querySelector("#job");
  let text = document.querySelector("#info");
  let btn_prev = document.querySelector("#prev-button");
  let btn_next = document.querySelector("#next-button");
  
    showReview(currentItem);

  btn_random.addEventListener('click', function(){
    let random = getRandom();
    console.log(random);
    currentItem = random;
    showReview()
  })

  btn_prev.addEventListener("click", () =>{
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length -1; 
    }

    showReview();

  })
  btn_next.addEventListener("click", () =>{
    currentItem++;  
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }


showReview(currentItem);


})
  function showReview () {
    item = reviews[currentItem];
    person_img.src = item.img;
    autor.textContent = item.name;
    profesion.textContent = item.job;
    text.textContent =  item.text;
  }

  function getRandom() {
    return Math.floor(Math.random() * (4 - 0) + 0);
  }
})

