// event mouse = terjadi ketika mouse mendekati komponen
document.getElementById('btn').addEventListener("mouseenter", function() {
  document.getElementById('key_2').style.background = "blue"
})

// event mouse = terjadi ketika tombol diklik
document.getElementById('clickMe').addEventListener("click", function() {
  document.getElementById('key_2').style.background = "purple";
});

// event keyboard = terjadi ketika keyboard ditekan
document.getElementById('key').addEventListener("keypress", function() {
  document.getElementById('key_2').style.background = "red"
})

// event change = terjadi ketika sesuatu berubah
document.getElementById('warna').addEventListener("change", function(){
  document.getElementById('key_2').style.background = document.getElementById('warna').value
})