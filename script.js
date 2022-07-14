const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const highPriorityEl = document.querySelector(".highP");
const medPriorityEl = document.querySelector(".mediumP");
const lowPriorityEl = document.querySelector(".lowP");

const $button = document.querySelector("button");
const $button2 = document.querySelector(".button2");

//quando button è cliccato, button 2 si "unclicka" e viceversa

$button.addEventListener("click", () => {
  if ($button2.click) {
    $button2 = disabled;
  }
});

fetch(BASE_URL)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const dataPriority = json.map((object) => {
      return { ...object, priority: Math.floor(Math.random() * 6) };
    });
    const filteredPriorityHigh = dataPriority.filter(
      (object) => object.priority == 5 || object.priority == 4
    );

    const filteredPriorityMed = dataPriority.filter(
      (object) => object.priority == 3 || object.priority == 2
    );
    const filteredPriorityLow = dataPriority.filter(
      (object) => object.priority == 1 || object.priority == 0
    );

    console.log(dataPriority);
    console.log(filteredPriorityHigh);
    console.log(filteredPriorityMed);
    console.log(filteredPriorityLow);

    filteredPriorityHigh.forEach((object) => {
      const liEl = document.createElement("li");
      liEl.innerText = object.title;
      if (object.completed) {
        liEl.classList.add("completedStyle");
        $button2.addEventListener("click", () => {
          if (liEl.style.display === "none") {
            liEl.style.display = "block";
          } else {
            liEl.style.display = "none";
          }
        });
      } else {
        liEl.classList.add("notCompletedStyle");
        $button.addEventListener("click", () => {
          if (liEl.style.display === "none") {
            liEl.style.display = "block";
          } else {
            liEl.style.display = "none";
          }
        });
      }
      highPriorityEl.appendChild(liEl);
    });

    filteredPriorityMed.forEach((object) => {
      const liEl2 = document.createElement("li");
      liEl2.innerText = object.title;
      if (object.completed) {
        liEl2.classList.add("completedStyle");
        $button2.addEventListener("click", () => {
          if (liEl2.style.display === "none") {
            liEl2.style.display = "block";
          } else {
            liEl2.style.display = "none";
          }
        });
      } else {
        liEl2.classList.add("notCompletedStyle");
        $button.addEventListener("click", () => {
          if (liEl2.style.display === "none") {
            liEl2.style.display = "block";
          } else {
            liEl2.style.display = "none";
          }
        });
      }

      medPriorityEl.appendChild(liEl2);
    });

    filteredPriorityLow.forEach((object) => {
      const liEl3 = document.createElement("li");
      liEl3.innerText = object.title;
      if (object.completed) {
        liEl3.classList.add("completedStyle");
        $button2.addEventListener("click", () => {
          if (liEl3.style.display === "none") {
            liEl3.style.display = "block";
          } else {
            liEl3.style.display = "none";
          }
        });
      } else {
        liEl3.classList.add("notCompletedStyle");
        $button.addEventListener("click", () => {
          if (liEl3.style.display === "none") {
            liEl3.style.display = "block";
          } else {
            liEl3.style.display = "none";
          }
        });
      }
      lowPriorityEl.appendChild(liEl3);
    });

    const filteredComplete = dataPriority.filter(
      (object) => object.completed == true
    );

    console.table(filteredComplete);
  });

// function showComplete(filteredPriorityHigh) {
//   if (filteredPriorityHigh.completed == true) {
//     liEl.style.display = "block";
//   } else {
//     liEl.style.display = "none";
//   }
// }
