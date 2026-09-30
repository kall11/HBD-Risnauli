const message = `Hai Risnauli,

Selamat ulang tahun, Risnauli ❤️

Semoga di umur kamu yang sekarang, semua hal baik yang kamu harapkan bisa satu per satu terwujud. Semoga kamu selalu diberikan kesehatan, kebahagiaan, dimudahkan dalam segala urusan, dan selalu dikelilingi orang-orang yang sayang sama kamu.

Aku juga mau bilang sesuatu yang mungkin selama ini nggak selalu bisa aku ungkapin dengan baik. Aku sayang sama kamu. Mungkin caraku menunjukkan rasa sayang belum selalu benar, bahkan kadang justru bikin kamu kecewa.

Aku mau minta maaf kalau selama ini aku sering tiba-tiba menghilang ketika sedang ada masalah atau sedang banyak pikiran. Bukan karena aku nggak peduli atau nggak sayang sama kamu. Kadang aku memang punya kebiasaan memilih diam dan menjauh ketika sedang menghadapi masalah. Tapi aku sadar, itu bukan cara yang baik, apalagi kalau akhirnya bikin kamu bingung, khawatir, atau merasa nggak dianggap.

Aku nggak mau cuma bilang "maaf", tapi aku benar-benar mau belajar memperbaiki itu. Kalau nanti ada masalah, aku akan berusaha untuk tetap komunikasi dan nggak langsung menghilang. Aku tahu mungkin perubahan itu nggak bisa langsung sempurna, tapi aku akan berusaha.

Terima kasih karena sudah menjadi seseorang yang berarti buat aku. Semoga di hari ulang tahun kamu ini, kamu tahu kalau ada seseorang yang benar-benar sayang sama kamu dan selalu mendoakan yang terbaik buat kamu.

Sekali lagi, selamat ulang tahun, Risnauli. ❤️
Semoga kamu selalu bahagia. Dan semoga aku juga bisa menjadi seseorang yang lebih baik untuk kamu ke depannya. 🫶

Bales pesan teks ini di wa aja ya ku tunggu. ga di bales berarti aku di tolak huhuhu.`;

const messageText = document.getElementById('messageText');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const speed = 20;

function typeWriter() {
  if (index < message.length) {
    messageText.textContent += message.charAt(index);
    index++;
    messageText.parentElement.scrollTop = messageText.parentElement.scrollHeight;
    setTimeout(typeWriter, speed);
  } else {
    nextBtn.disabled = false;
  }
}

window.onload = typeWriter;