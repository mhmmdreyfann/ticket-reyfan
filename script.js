alert("Welcome to TIcket App \n yang bisa masuk hanya umur 17 tahun keatas")
const umur = prompt("Masukkan Umur Anda");
if (umur >= 17) {
const studio = prompt("Masukkan Studio yang ingin anda pesan \n A : studio A \n B : stuido B \n C : studio C");
if (studio == "A","a" || studio == "B","b" || studio == "C","c") {
    const film = prompt("Pilih film \n 1 : Agak Laen \n 2 : Ancika \n 3 : Siksa Neraka");

    let namaFilm
    if (film == "1") {
        namaFilm = "Agak Laen";
    } else if (film == "2") {
        namaFilm = "Ancika";
    } else if (film == "3") {
        namaFilm = "Siksa Neraka";
    }
    if (film == "1" || film == "2" || film == "3") {
        const nama = prompt("Masukkan Nama Anda");
        alert(`Berikut tiket anda! \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`);
    } else {
        alert("Maaf film yang anda pilih tidak tersedia");
    }
    } else {
        alert("Anda harus memilih studio")
    }


}else {
    alert("Maaf tidak bisa masuk, umur anda dibawah 17 tahun");
}