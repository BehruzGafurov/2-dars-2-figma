const body= document.body
const div1= document.createElement("div")
const img1= document.createElement("img")
img1.src="./img/blogimage (1).png"
const div2= document.createElement("div")
const h2= document.createElement("h2")
const p= document.createElement("p")
const div3= document.createElement("div")
const img2= document.createElement("img")
img2.src="./img/userpic.svg"
const span= document.createElement("span")


div1.classList.add("card")
img1.classList.add("img")
div2.classList.add("tag")
div3.classList.add("author")


body.append(div1)
div1.append(img1,div2,h2,p,div3)
div3.append(img2,span)


div2.textContent = "Learning"
h2.textContent = "HTML & CSS Foundations"
p.textContent = "These languages are the backbone of every website, defining structure, content, and presentation."
span.textContent = "Greg Hooper"

{/* <div class="card">
<img class="img" src="./img/blogimage (1).png" alt="">
<div class="tag">Learning</div>
<h2>HTML & CSS Foundations</h2>
<p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
<div class="author">
  <img src="./img/userpic.svg" alt="Author">
  <span>Greg Hooper</span>
</div>
</div> */}