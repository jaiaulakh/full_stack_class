var tasks = [];
var currentFilter = "all";

var taskInput = document.getElementById("taskInput");
var prioritySelect = document.getElementById("prioritySelect");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var filterBtns = document.querySelectorAll(".filter-btn");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderTasks();
    });
});

function addTask() {
    var name = taskInput.value.trim();
    if (name === "") return;

    var task = {
        id: Date.now(),
        name: name,
        priority: prioritySelect.value,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
}

function toggleTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    var filtered = tasks.filter(function (task) {
        if (currentFilter === "completed") return task.completed;
        if (currentFilter === "pending") return !task.completed;
        return true;
    });

    filtered.forEach(function (task) {
        var li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        var left = document.createElement("div");
        left.className = "task-left";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
            toggleTask(task.id);
        });

        var span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.name + " (" + task.priority + ")";

        left.appendChild(checkbox);
        left.appendChild(span);

        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            deleteTask(task.id);
        });

        li.appendChild(left);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
