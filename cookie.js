cookies = 0
passive_income = 0

lvl1s = 0
lvl2s = 0
lvl3s = 0
lvl4s = 0
lvl5s = 0
lvl6s = 0
lvl7s = 0
lvl8s = 0
lvl9s = 0
lvl10s = 0
lvl11s = 0
lvl12s = 0
lvl13s = 0

setInterval(function () {
  document.getElementById('counter').innerHTML = "Cookies: " + cookies.toLocaleString().toString()
}, 100)
setInterval(function () {
  document.getElementById('lvl1c').innerHTML = lvl1s.toLocaleString().toString()
  document.getElementById('lvl2c').innerHTML = lvl2s.toLocaleString().toString()
  document.getElementById('lvl3c').innerHTML = lvl3s.toLocaleString().toString()
  document.getElementById('lvl4c').innerHTML = lvl4s.toLocaleString().toString()
  document.getElementById('lvl5c').innerHTML = lvl5s.toLocaleString().toString()
  document.getElementById('lvl6c').innerHTML = lvl6s.toLocaleString().toString()
  document.getElementById('lvl7c').innerHTML = lvl7s.toLocaleString().toString()
  document.getElementById('lvl8c').innerHTML = lvl8s.toLocaleString().toString()
  document.getElementById('lvl9c').innerHTML = lvl9s.toLocaleString().toString()
  document.getElementById('lvl10c').innerHTML = lvl10s.toLocaleString().toString()
  document.getElementById('lvl11c').innerHTML = lvl11s.toLocaleString().toString()
  document.getElementById('lvl12c').innerHTML = lvl12s.toLocaleString().toString()
  document.getElementById('lvl13c').innerHTML = lvl13s.toLocaleString().toString()
}, 100)
setInterval(function () {
  cookies += passive_income
  document.getElementById('cps').innerHTML = "Cookies Per Second: " + passive_income.toLocaleString().toString()
}, 1000)

function cookieclicked () {
  cookies += 1
  document.getElementsByTagName('img')[0].style.width = '220px'
  document.getElementsByTagName('img')[0].style.height = '220px'
  setTimeout(function () {
    document.getElementsByTagName('img')[0].style.width = '200px'
    document.getElementsByTagName('img')[0].style.height = '200px'
  }, 100)
}
function spawn_generator(x) {
  passive_income += x
}
function buy_generator(x, y) {
  if (cookies >= y) {
    spawn_generator(x)
    cookies -= y
  }
  else {
    alert('Not enough cookies!')
  }
}
document.getElementsByTagName('img')[0].onclick = cookieclicked
document.getElementById('lvl1').onclick = function () { buy_generator(10, 25); if (cookies >= 25) { lvl1s += 1; } }
document.getElementById('lvl2').onclick = function () { buy_generator(50, 125); if (cookies >= 125) { lvl2s += 1; } }
document.getElementById('lvl3').onclick = function () { buy_generator(100, 250); if (cookies >= 250) { lvl3s += 1; } }
document.getElementById('lvl4').onclick = function () { buy_generator(500, 650); if (cookies >= 650) { lvl4s += 1; } }
document.getElementById('lvl5').onclick = function () { buy_generator(1000, 2500); if (cookies >= 2500) { lvl5s += 1; } }
document.getElementById('lvl6').onclick = function () { buy_generator(2500, 5000); if (cookies >= 5000) { lvl6s += 1; } }
document.getElementById('lvl7').onclick = function () { buy_generator(5000, 15000); if (cookies >= 15000) { lvl7s += 1; } }
document.getElementById('lvl8').onclick = function () { buy_generator(10000, 40000); if (cookies >= 40000) { lvl8s += 1; } }
document.getElementById('lvl9').onclick = function () { buy_generator(50000, 100000); if (cookies >= 100000) { lvl9s += 1; } }
document.getElementById('lvl10').onclick = function () { buy_generator(1000000, 1500000); if (cookies >= 1500000) { lvl10s += 1; } }
document.getElementById('lvl11').onclick = function () { buy_generator(5000000000, 10000000000); if (cookies >= 10000000000) { lvl11s += 1; } }
document.getElementById('lvl12').onclick = function () { buy_generator(50000000000, 100000000000); if (cookies >= 100000000000) { lvl12s += 1; } }
document.getElementById('lvl13').onclick = function () { buy_generator(10000000000, 500000000000); if (cookies >= 500000000000) { lvl13s += 1; } }
