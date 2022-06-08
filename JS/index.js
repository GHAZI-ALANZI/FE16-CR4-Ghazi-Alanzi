//convert json to js

let myTask = JSON.parse(cardsInfo);
console.log(myTask);

//Add Cards to div

function myCards(items) {
    document.getElementById("cont").innerHTML = "";
    //Change color of importance button throu class name
    let btColor = "";
    for (let y of items) {
        if (y.importance < 2) {
            btColor = "success";
        } else if (y.importance < 4) {
            btColor = "warning";
        } else {
            btColor = "danger";
        }
        document.getElementById("cont").innerHTML += `
        <div class="col-lg-3 col-md-5 col-sm-10 col-xs-12">
            <div class="card shadow-lg mb-5 bg-body rounded" style="width: 18rem;">
            <div class="m-3 d-flex justify-content-between">
                <div>
                    <button type="button" class="btn btn-info text-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .6rem; --bs-btn-font-size: .75rem;">Task</button>
                </div>
                </div>
                <img src="${y.img}" class="card-img-top img-thumbnail">
                <div class="card-body">
                <h5 class="card-title text-center">${y.task}</h5>
                <p>${y.y}</p>
                <hr>
                <p class="card-text"> 
                <i class="fa-solid fa-triangle-exclamation"></i> Priority level: <a class="btn btn-sm btn-${btColor} btn-1   " id="gyy"><span class="result">${y.importance}</span></a></p>
                <p><i class="fa-solid fa-calendar-days"></i> Deadline: ${y.deadLine}</p>
                <hr>
                <div class="d-flex d-flex justify-content-end gap-2">
                    <a href=" " class="btn btn-danger"> <i class="fa-solid fa-trash-can"></i> Delete</a>
                    <a href=" " class="btn btn-success"> <i class="fa-solid fa-circle-check"></i> Done</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    btImportance();
}

//creat function for increase numbers when click on button importance

function btImportance() {
    let btn = document.getElementsByClassName("btn-1");
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            myTask[i].importance++;

            myCards(myTask);
        });
    }
}

//creat function to order cards and update myCards()
myCards(myTask);

function order() {
    myTask.sort(function(a, b) {
        return a.importance - b.importance;
    });
}
document.querySelector(".order").addEventListener("click", function() {
    order();
    myCards(myTask);
});