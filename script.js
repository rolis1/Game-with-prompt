var ulang = true;
while(ulang) {
    var chance = 3
    var com = Math.floor(Math.random() * 10) + 1;
    var hasil = "";
    
    alert("Mainkan permainan ini dengan " + chance + " kesempatan");
    while( chance >= 1) {
        var p = parseInt(prompt("Tebak dan masukkan angka dari 1-10"));
        if(p === com ) {
            hasil = "BENAR";
            alert("SELAMAT!! tebakan anda " + hasil + " \nangka yang anda tebak adalah " + com);
            break;
        } else if( p > com) {
            hasil = "TINGGI";
            chance -= 1;
            alert("Angka yang anda masukkan terlalu " + hasil + ". angka yang anda masukkan adalah " + p + "\nsisa " + chance + " kesempatan lagi.");
        } else if(p < com ) {
            hasil = "RENDAH";
            chance -= 1;
            alert("Angka yang anda masukkan terlalu " + hasil + ". angka yang anda masukkan adalah " + p + "\nsisa " + chance + " kesempatan lagi.");
        }

        if(chance === 0) {
            alert("Anda gagal \nangka yang dicari adalah " + com );
        }
        
    }
  ulang = confirm("Mau coba lagi?");
}
alert("Terima kasih sudah meluangkan waktunya :)");