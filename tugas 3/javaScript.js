const inputValue = document.getElementById("inputTask");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    if (inputValue.value === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }


    const listBaru = document.createElement("li");

    const spanTugas = document.createElement("span");
    spanTugas.innerHTML = inputValue.value;
    spanTugas.className = "teks-tugas";

    const spanTanggal = document.createElement("span");
    spanTanggal.innerHTML = " | " + inputTanggal.value + " | ";
    spanTanggal.className = "teks-tanggal";
    
    const selectStatus = document.createElement("select");

    const optionProgress = document.createElement("option");
    optionProgress.value = "Progress";
    optionProgress.text = "Progress";
    
    const optionDone = document.createElement("option");
    optionDone.value = "Done";
    optionDone.text = "Done";
    
    selectStatus.appendChild(optionProgress);
    selectStatus.appendChild(optionDone);
    
    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.className = "btn-edit";
    btnEdit.addEventListener("click", function() {
        const tugasBaru = prompt("Edit tugas:", spanTugas.innerHTML);
        if (tugasBaru !== null && tugasBaru.trim() !== "") {
            spanTugas.innerHTML = tugasBaru;
        }
    });
    
    const btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.className = "btn-hapus";
    btnHapus.addEventListener("click", function() {
        listBaru.remove();
    });

    listBaru.appendChild(spanTugas);
    listBaru.appendChild(spanTanggal);
    listBaru.appendChild(selectStatus);
    listBaru.appendChild(btnEdit);
    listBaru.appendChild(btnHapus);
    
    daftarTugas.appendChild(listBaru);
    
    inputValue.value = "";
    inputValue.focus();
    inputTanggal.value = "";
});