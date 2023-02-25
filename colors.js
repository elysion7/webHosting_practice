var Links = {
  setColor:function(color){
    // v/ar alist = document.querySelectorAll('a'); // 줄주석 추가 [Ctrl+K, Ctrl+C], 줄주석 해제 [Ctrl+K, Ctrl+U]
    /* var i = 0;     
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    } */ 
    // 블록주석 추가 [블록선택후 Shift+Alt+A 또는 Ctrl+/]
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body'); 
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}

// 자바스크림트 커뮤니티에서 가장 중요한 라이브러리중에 하나인 jQuery라는것을 사용하는 방법을 알아봤다.
// jQurey란 자바스크립트 라이브러리중 하나이며, 가장 중요한 라이브러리에 속한다.
// 시스템을 제어하기 위한 조작장치를 User Interface라고 하며, 줄여서 UI라고 한다.
// 어플리케이션을 만들기 위해서 프로그래밍을 할때, 사용하는 조작장치를 Application Interfcace라고 하며, 
// 줄여서 API라고 한다. 
// API를 어플리케이션에 맞추어 순서에 맞게 배치하는 것을 프로그래밍한다라고 부르는 것이다.
// 예를들어 기계조립에 비유한다면, 기계조립에 사용할 부품을 API라고 하고
// 부품을 조립하는 방법을 프로그래밍이라고 한다.
// 웹브라우저 프로그래머란, 웹브라우저의 UI와 API를 결합하여주어 사용자가 이용할 수 있도록 프로그래밍 하는 사람을 말한다.
// UI와 API를 연결하는 한 방법으로 자바스크립트가 있다.
// UI와 API를 연결하는 다양한 자바스크립트를 모아 정리해놓은 라이브러리 중 하나인 jQuery++


// 만약 웹페이지에 어떤 태그를 삭제하고 싶거나 어떤태그에 자식태그를 추가하고 싶다면,
// document 객체를 좀더 자세히 살펴보면, 필요한 메소드가 그안에 포함되어 있을 것이다.
// 만약 document객체를 통해서도 찾을 수 없다면 DOM(Document Object Model)객체로 수색범위를 넓여 보아야 한다.
// document 객체는 DOM객체의 일부분이기 때문이다.
// 또 웹페이지가 아닌 웹브라우저 자체를 제어해야 한다면, window객체를 조사해야 한다.
// 이를테면, 현재 열려있는 웹페이의 주소를 알아내야 할수도 있고, 새창을 열어야 할 수도 있고, 웹브라우저의 화면크기를
// 자바스크립트를 통해서 알아야 한다면, window객체에 속한 property 나 Method가 도와 줄 수 있다.
// 웹페이지를 리로드하지 않고 정보를 변경하고 싶다면 ajax가 필요할 것이다.
// 현대적인 웹앱을 만드는데 필수적인 테크닉이다.
// 또 웹페이지가 리로드되어도 현재상태를 유지하고 싶다면 cookie를 배워야 한다.
// cookie와 함께라면, 사용자를 위한 개인화된 서비스를 제공할 수 있다.
// 인터넷이 끊겨도 동작하는 웹페이지를 만들고 싶다면 offline web application을 찾아보세요
// 화상통신 웹앱을 만들고 싶다면 webRTC라는 것이 있다.
// 사용자의 음성을 인식하고 음성으로 정보를 전달하고 싶다면 speech API가 잇다.
// 또한 3차원으로 게임을 만들고 싶다면 webGL API가 있다.
// 가상현실에 관심이 많다면 webVR API가 있다.
