//convert json to js

let myTask = JSON.parse(cardsInfo);
console.log(myTask);

//Add 3 Cards to div with className Container and I know there are easy way to do that but I like the hard way just for the learning

function updateHTML() {
    document.querySelector(".container").innerHTML = `
<div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 mt-5 mb-5shadow p-4 gap-3 ms-5">
<div class="card shadow p-4 ">
<div class="card-header bg-transparent border-success"><button type="button" class="btn btn-primary">Task</button>
</div>

  <img src="${myTask[0].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${myTask[0].task}</h5>
    <p class="card-text">Doing my CR befor 18:00 pm</p><hr>
    <button button type="button" class="btn-1 "><i class="fa-solid fa-triangle-exclamation"></i>priority level :</button> <span class="prio">${myTask[0].importance}</span><br>
    <i class="fa-solid fa-calendar-days"></i> &nbsp;
  </div>
  <div class="card-footer">
  <button type="button" class="btn btn-danger "><i class="fa-solid fa-trash-can"></i> delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-check"></i> done</button>

  </div>
</div>
<div class="card shadow p-4">
<div class="card-header bg-transparent border-success"><button type="button" class="btn btn-primary">Task</button>
</div>

  <img src="${myTask[1].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${myTask[1].task}</h5>
    <p class="card-text">Make a Tour in the city </p><hr>
    <button button type="button" class="btn-1 "><i class="fa-solid fa-triangle-exclamation"></i>priority level :</button> <span class="prio">${myTask[1].importance}</span><br>
    <i class="fa-solid fa-calendar-days"></i>


  </div>
  <div class="card-footer">
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-check"></i> done</button>

  </div>
</div>
<div class="card shadow p-4">
<div class="card-header bg-transparent border-success"><button type="button" class="btn btn-primary">Task</button>
</div>

  <img src="${myTask[2].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${myTask[2].task}</h5>
    <p class="card-text">Going to SCS for buy Clothes</p><hr>
    <button button type="button" class="btn-1 "><i class="fa-solid fa-triangle-exclamation"></i>priority level :</button> <span class="prio">${myTask[2].importance}</span><br>
    <i class="fa-solid fa-calendar-days"></i>

  </div>
  <div class="card-footer">
  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> delete</button>
  <button type="button" class="btn btn-success"><i class="fa-solid fa-check"></i> done</button>

  </div>
</div>
</div>`;
}
updateHTML();

//Clone 2 copies of div cards and append to div container by use for loop

function copyOfDiv(n, x, y) {
    for (var i = 0; i < n; i++) {
        var divCopy = x.cloneNode(true);
        y.appendChild(divCopy);
    }
}

var myDiv = document.querySelector(".row ");
copyOfDiv(2, myDiv, document.querySelector(".container"));

//add the name of task ,information,img ...to other cards with i cioned

document.getElementsByClassName("card-img-top")[3].src = myTask[3].img;
document.getElementsByClassName("card-img-top")[4].src = myTask[4].img;
document.getElementsByClassName("card-img-top")[5].src = myTask[5].img;
document.getElementsByClassName("card-img-top")[6].src = myTask[6].img;
document.getElementsByClassName("card-img-top")[7].src = myTask[7].img;
document.getElementsByClassName("card-img-top")[8].src = myTask[8].img;

document.getElementsByClassName("card-title")[3].innerHTML = myTask[3].task;
document.getElementsByClassName("card-title")[4].innerHTML = myTask[4].task;
document.getElementsByClassName("card-title")[5].innerHTML = myTask[5].task;
document.getElementsByClassName("card-title")[6].innerHTML = myTask[6].task;
document.getElementsByClassName("card-title")[7].innerHTML = myTask[7].task;
document.getElementsByClassName("card-title")[8].innerHTML = myTask[8].task;

document.getElementsByClassName("card-text")[3].innerHTML = myTask[3].info;
document.getElementsByClassName("card-text")[4].innerHTML = myTask[4].info;
document.getElementsByClassName("card-text")[5].innerHTML = myTask[5].info;
document.getElementsByClassName("card-text")[6].innerHTML = myTask[6].info;
document.getElementsByClassName("card-text")[7].innerHTML = myTask[7].info;
document.getElementsByClassName("card-text")[8].innerHTML = myTask[8].info;

document
    .getElementsByClassName("fa-calendar-days")[0]
    .after("  " + myTask[0].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[1]
    .after("  " + myTask[1].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[2]
    .after("  " + myTask[2].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[3]
    .after("  " + myTask[3].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[4]
    .after("  " + myTask[4].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[5]
    .after("  " + myTask[5].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[6]
    .after("  " + myTask[6].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[7]
    .after("  " + myTask[7].deadLine);
document
    .getElementsByClassName("fa-calendar-days")[8]
    .after("  " + myTask[8].deadLine);

// use function with condition and counter to creat “Importance” button and make delete button as rest button

function ImportanceButton(i) {
    var button = document.getElementsByClassName("btn-1")[i],
        count = 0;
    button.onclick = function() {
        count += 1;
        document.getElementsByClassName("prio")[i].innerHTML = count;
        if (count > 4) {
            button.disabled = true;
        }
        if (count <= 1) {
            document.getElementsByClassName("prio")[i].style.backgroundColor =
                "green";
        } else if (count <= 3) {
            document.getElementsByClassName("prio")[i].style.backgroundColor =
                "Yellow";
        } else if (count <= 5) {
            document.getElementsByClassName("prio")[i].style.backgroundColor = "red";
        }

        document.getElementsByClassName("btn-danger")[i].onclick = function() {
            count = 0;
            document.getElementsByClassName("prio")[i].style.backgroundColor =
                "green";
            button.disabled = false;
            document.getElementsByClassName("prio")[i].innerHTML = count;
        };
    };
}
for (let i = 0; i < 9; i++) {
    ImportanceButton(i);
}