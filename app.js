var count = new Date('Sep 03, 2020 00:00:00').getTime();
const daysView = document.querySelector('#days');
const hoursView = document.querySelector('#hours');
const minutesView = document.querySelector('#minutes');
const secondsView = document.querySelector('#seconds');
const displayAnimation = document.querySelector('.flex-container');
displayAnimation.style.display = 'none';
var x = setInterval(() => {
  var now = new Date().getTime();
  var d = count - now;
  if (d <= 0) {
    clearInterval(x);
    document.querySelector('.count').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h1').textContent = 'Happy Birth Day';
    document.querySelector('h1').className = 'lato';
    document.querySelector('.flex-container').style.display = 'flex';
    let flag = false;
    document.querySelector('.gift').addEventListener('click', function () {
      if (flag === false) {
        alert(
          'Vậy là Tú 19 rồi đó, lớn rồi thì yêu bản thân thật nhiều lên nha Túuuu. Mong là tuổi 19 của Tú chỉ có toàn là niềm vui và may mắn thôi. Mà lỡ có chuyện gì thì tui cũng sẽ ở bên Tú như cách Tú ở bên cạnh tui vậy đó. Thêm nữa, dù bà có 4 nhân cách Tú, Tsu, Tua hay Tí đi chăng nữa thì tui vẫn yêu hết 4 nhân cách đó của bà, chụt chụt chụttttttt'
        );
        document.getElementById('my_audio').muted = false;
        document.getElementById('my_audio').play();
        flag = true;
      } else if (flag === true) {
        document.getElementById('my_audio').muted = true;
        flag = false;
      }
    });
  } else {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let days = Math.floor(d / day),
      hours = Math.floor((d % day) / hour),
      minutes = Math.floor((d % hour) / minute),
      seconds = Math.floor((d % minute) / second);
    daysView.textContent = days;
    hoursView.textContent = hours;
    minutesView.textContent = minutes;
    secondsView.textContent = seconds;
  }
}, 1000);
