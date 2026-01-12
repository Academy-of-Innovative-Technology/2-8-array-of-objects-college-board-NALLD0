const colleges = [
    {
        rank: 1,
        name: "Baruch College",
        address: "55 Lexington Avenue (at 24th Street)",
        website: "https://www.baruch.cuny.edu/",
        maps: "https://maps.google.com?q=55+Lexington+Avenue+NY",
        image: "Baruch.jpg"
    },
    {
        rank: 2,
        name: "City College of New York",
        address: "160 Convent Ave, New York, NY 10031",
        website: "https://www.ccny.cuny.edu/",
        maps: "https://maps.app.goo.gl/zvfdPg1boesusTSQA",
        image: "cc.jpeg"
    },
    {
        rank: 3,
        name: "Hunter College",
        address: "695 Park Ave, New York, NY",
        website: "https://www.hunter.cuny.edu/",
        maps: "https://maps.app.goo.gl/VncpWk1ZvR3dKu7k6",
        image: "Hunter.avif"
    },
    {
        rank: 4,
        name: "Cooper Union ",
        address: "7 East 7th Street, New York, NY",
        website: "https://cooper.edu/",
        maps: "https://maps.app.goo.gl/zftXrwCqH4wsR8vV6",
        image: "Cooper.png"
    },
    {
        rank: 5,
        name: "Barnard College",
        address: "3009 Broadway, New York, NY 10027",
        website: "https://barnard.edu/",
        maps: "https://maps.app.goo.gl/ngxRoyXcC69bCtK96",
        image: "B.webp"
    }
];



const collegeList = document.querySelector("#collegeList");

colleges.forEach(college => {
    const collegeHTML =`
    <div class="list-group-item college-card">
     <div class="row">
      <div class="col-2">
       <img class="college-image" src="${college.image}" alt="${college.name}">
      <div/> 
      <div class="col-7 college-info">
       <h5>${college.rank}. ${college.name}</h5>
       <p><strong>Address:</strong> ${college.address}</p>
       <p><strong>Website:</strong>
        <a href="${college.website}" target="_blank">${college.website}</a>
        </p>
        <p><strong>Google Maps:</strong>
         <a href="${college.maps}" target="_blank">View on Google Maps</a>
         </p>
         </div>
         </div>
         </div>
     `;

     collegeList.insertAdjacentHTML("beforeend", collegeHTML);
});