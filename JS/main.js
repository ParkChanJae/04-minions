window.addEventListener("DOMContentLoaded", function() {
	setTimeout(showAfterLoad, 3000);// 3초(=3000ms) 뒤 showAfterLoad 함수 호출
	
	const POPUP = document.querySelector("#popup");
	const BODY = document.querySelector("body");
	const CLOSE = document.querySelector("#close");
	function showAfterLoad() {  // 자바 메소드처럼 선언!
		POPUP.style.display = "block";
		BODY.style.overflow = "hidden";
	}
	CLOSE.addEventListener("click", function() {
		POPUP.style.display = "none";
		BODY.style.overflow = "auto";
	})

})