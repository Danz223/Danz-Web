function showDiv() {
    document.getElementById('Content').style.display = "block";
}

async function mulai(){
    await Swal.fire(`Hi! Selamat datang di website saya!`);
    showDiv();
}

mulai();
