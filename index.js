function addRow() {
    var tBody = document.getElementById("tbody");
    let newRow = document.createElement("tr");
    let newColumn1 = document.createElement("td");
    let newMoveField = document.createElement("input");
    let newColumn2 = document.createElement("td");
    let removeMoveField = document.createElement("input");

    Object.assign(newMoveField, {
        className: "move-container",
        type: "text",
        placeholder: "Enter move here"
    })

    Object.assign(removeMoveField, {
        className: "button-container",
        type: "button",
        value: "Remove Move",
        onclick: removeRow
    })

    newColumn1.appendChild(newMoveField);
    newColumn2.appendChild(removeMoveField);
    newRow.appendChild(newColumn1);
    newRow.appendChild(newColumn2);
    tBody.appendChild(newRow);

}

function removeRow() {
    let td = event.target.parentNode;
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}