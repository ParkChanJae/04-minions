window.addEventListener("DOMContentLoaded", function() {
	setTimeout(showAfterLoad, 3000);// 3초(=3000ms) 뒤 showAfterLoad 함수 호출
	
	const POPUP = document.querySelector("#popup");
	const BODY = document.querySelector("body");
	const CLOSE = document.querySelector("#close");
	const POSTS = document.querySelector("#posts");
	function showAfterLoad() {  // 자바 메소드처럼 선언!
		POPUP.style.display = "block";
		BODY.style.overflow = "hidden";
	}
	CLOSE.addEventListener("click", function() {
		POPUP.style.display = "none";
		BODY.style.overflow = "auto";
	})
	const NEXT = document.querySelector(".next");
	let postIndex = 0;
	NEXT.addEventListener("click", function(){
		postIndex ++;
		// console.log("인덱스 : " +postIndex);
		if(postIndex >= 3) postIndex = 0;
		let coords = -920 * postIndex;
		POSTS.style.marginLeft = coords+"px";
	})
	
	const PREV = document.querySelector(".prev");
	PREV.addEventListener("click", function(){
		postIndex --;
		// console.log("인덱스 : " +postIndex);
		if(postIndex < 0) postIndex = 2;
		let coords = -920 * postIndex;
		POSTS.style.marginLeft = coords+"px";
	})
})