const inputValue = document.getElementById("inputTask");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    if(inputValue.value === "") {
        alert("Input tidak boleh kosong");
        return;
    }

    const spanTugas = document.createElement("span");
    spanTugas.innerHTML = inputValue.value;
    spanTugas.className = "teks-tugas";

    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    listBaru.appendChild(span);
    daftarTugas.appendChild(listBaru);
    inputValue = "";
    inputValue.focus();
});