function handleClick() {
  const myDiv = document.getElementById('myDiv');
  myDiv.style.backgroundColor = "yellow";
  myDiv.style.color = "red";
  myDiv.style.backgroundColor = "red";
}

function handleChangeContent() {
  const myDiv2 = document.getElementById('myDiv2');
  myDiv2.innerHTML = "ContentChanged";
}

function handleAddElement() {
  const menuInput = document.getElementById('menuInput').value;
  const menuList = document.getElementById("menuList");
  const li = document.createElement("li");
  const liText = document.createTextNode(menuInput);
  li.appendChild(liText);

  menuList.appendChild(li);
  document.menuInput.value = "";
}
const arraySkillInput = [];

function handleAddSkills() {
  const skillInput = document.getElementById('skillInput').value;
  arraySkillInput.push(skillInput);
  console.log(arraySkillInput)
  const liElement = arraySkillInput.map((skill) => {
    return (
      `<li>${skill}</li>`
    )
  }).join('');
  const skillList = document.getElementById("skillList");
  skillList.innerHTML = liElement
}
//array of obj
const skills = [{
  id: 1,
  topic: "HTML",
},
{
  id: 2,
  topic: "css",
},
{
  topic: 3,
  topic: "js",
}
];

function handleSkill() {
  const liElements = skills.map((skill) => {
    return (
      `<li>${skill.topic}</li>`
    )
  }).join('');
  const skillList = document.getElementById("skillListArray");
  skillList.innerHTML = liElement;
}

let locateMe = document.getElementById('locationBtn');
let latitude = document.getElementById('latitude');
let longitude = document.getElementById('longitude');
locateMe?.addEventListener('click', () => {
  locateMe.disabled = true;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude.innerText = position.coords.latitude;
      longitude.innerText = position.coords.longitude;
      locateMe.disabled = false;
    },
    () => {
      document.getElementById("locationDisable").innerHTML = " ";
      //alert('you are not allowed');
    }
  );
});

document.getElementById('savePincodeBtn')?.addEventListener('click', (event) => {
  let pincodeInput = document.getElementById('pincodeInput').value;
  console.log(event);
  localStorage.setItem('Pincode', pincodeInput);
  event.target.innerText = "Saved";
})
document.getElementById('removePincodeBtn')?.addEventListener('click', (event) => {
  localStorage.removeItem('Pincode');
  event.target.innerText = "Removed";
})


// function a(x){
//     return function b(y){
//         return function c(){
//             return x+y;
//         }
//     }
// }
// a(10)(20)