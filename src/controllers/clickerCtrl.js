let	inp = document.getElementById("clickerInput");
let	butt = document.getElementById("clickerButton");

let game = {
	count: 0,
	start: function(){
		game.count = 0;
		butt.onclick = game.click;
		butt.innerHTML = "!!!PUSH!!!";
		setTimeout( game.finish, 10000)
		
		},

	click: function() {
		console.log("click");
		game.count++;
		inp.value = game.count;
		},

	finish: function() {
		alert(game.count);
		butt.onclick = game.start;
		butt.innerHTML = "Начать";

		}
	}

butt.onclick = game.start;

