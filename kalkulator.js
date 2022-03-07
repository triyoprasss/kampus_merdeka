function hitung1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function hitung2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kali() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(a1) || a1 == '') {
        alert("Data Harga Salah/Kosong");
    } else if (isNaN(a2) || a2 == '') {
        alert("Data Jumlah Salah/Kosong");
    }
    else {
        let total = a1 * a2;
    frm.hasil.value = total;
    }
}

function tambah() {
    let frm = document.getElementById("formulir");
    a=eval(frm.a1.value);
    b=eval(frm.a2.value);
    c = a + b;
    frm.hasil.value = c;
}

function kurang() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(a1) || a1 == '') {
        alert("Data Harga Salah/Kosong");
    } else if (isNaN(a2) || a2 == '') {
        alert("Data Jumlah Salah/Kosong");
    }
    else {
        let total = a1 - a2;
    frm.hasil.value = total;
    }
}

function bagi() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(a1) || a1 == '') {
        alert("Data Harga Salah/Kosong");
    } else if (isNaN(a2) || a2 == '') {
        alert("Data Jumlah Salah/Kosong");
    }
    else {
        let total = a1 / a2;
    frm.hasil.value = total;
    }
}

function pangkat() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(a1) || a1 == '') {
        alert("Data Harga Salah/Kosong");
    } else if (isNaN(a2) || a2 == '') {
        alert("Data Jumlah Salah/Kosong");
    }
    else {
        let total = a1 ** a2;
    frm.hasil.value = total;
    }
}

function clear() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}