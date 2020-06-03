function money() {localStorage.clickcount = 9999999999999;}

var damprice;


function reset() {
    localStorage.clickcount = 0;
    localStorage.damage = 1;
    localStorage.timer = 0;
    localStorage.level = 1;
	document.getElementById("mainimg").src="images/Discord.png"
    alert("EVERYTHING HAS BEEN RESET");
	location.reload();
}

if(localStorage.timer == 1) {
window.setInterval(function(){
clickCounter()
}, 3000);
}



function level(){
if (typeof(Storage) !== "undefined") {
    if (localStorage.level) {
	if (localStorage.clickcount > 499) {localStorage.level = 2;}
    	if (localStorage.clickcount > 1999) {localStorage.level = 3;}

		if (localStorage.level == 1) {document.getElementById("mainimg").src="images/Discord.png";}
		if (localStorage.level == 2) {document.getElementById("mainimg").src="images/mee6.png";}
    } else {
      localStorage.level = 1;
    }
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
  }

function getTimer(){
 if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount > 199) {
    if (localStorage.timer) {
      localStorage.timer = 1;
      localStorage.clickcount = Number(localStorage.clickcount)-200;
if(localStorage.timer == 1) {
window.setInterval(function(){
clickCounter()
}, 3000);
}    } else {
      localStorage.timer = 0;
    }
          } else { return; }
    document.getElementById("money").innerHTML = localStorage.clickcount + "$";
    document.getElementById("money2").innerHTML = localStorage.clickcount + "$";
    document.getElementById("result").innerHTML = "Auto Click Purchased";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function lessautotime() {
  if (typeof(Storage) !== "undefined") {
  if(localStorage.clickcounter > 1) {
    if (localStorage.autotime) {
      localStorage.autotime = Number(localStorage.autotime) + 1;
    } else {
      localStorage.clickcount = 3;
    }
	} else { 
	document.getElementById("result").innerHTML = "NOT ENOUGH MONEY!";
	return; }
    document.getElementById("money").innerHTML = localStorage.clickcount + "$ &times;";
    document.getElementById("money2").innerHTML = localStorage.clickcount + "$";
  } else {
    document.getElementById("money").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+Number(localStorage.damage);
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("money").innerHTML = localStorage.clickcount + "$ &times;";
    document.getElementById("money2").innerHTML = localStorage.clickcount + "$";
  } else {
    document.getElementById("money").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function buyMoreClick() {
      if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount > (damprice - 1)) {
    if (localStorage.damage) {
      localStorage.damage = Number(localStorage.damage)+1;
      localStorage.clickcount = Number(localStorage.clickcount)-damprice;
    } else {
      localStorage.damage = 1;
    }
          } else {
		   document.getElementById("result").innerHTML = "NOT ENOUGH MONEY! THIS COST'S " + damprice + "$";
		   return;
		  }
    document.getElementById("money").innerHTML = localStorage.clickcount + "$";
    document.getElementById("money2").innerHTML = localStorage.clickcount + "$ &times;";
    document.getElementById("result").innerHTML = localStorage.damage + "$ Per Click";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

/* Open the sidenav */
function openNav() {
  document.body.style.background = "#B68F40";
  document.getElementById("stats").style.width = "0";
  document.getElementById("mySidenav").style.width = "40%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.body.style.background = "#BD9A53";
  document.getElementById("stats").style.width = "20%";
  document.getElementById("mySidenav").style.width = "0";
}




window.setInterval(function(){
level();


damprice = 48 + (Number(localStorage.damage*3)) ;
	document.getElementById("clickdam").innerHTML = damprice + " | Quicker Auto Clicks";
    document.title = localStorage.clickcount + " | Discord Clickers";
	document.getElementById("clickamm").innerHTML = localStorage.clickcount + "$";
	document.getElementById("damageamm").innerHTML = localStorage.damage + "$ Per Click";
	
	if(localStorage.timer == 1) {
		document.getElementById("autoupp").innerHTML = "500$ | Quicker Auto Clicks";
		document.getElementById("autobuy").innerHTML = "";
} else{
document.getElementById("autobuy").innerHTML = "200$ | Get Auto Clicks";
document.getElementById("autoupp").innerHTML = "";
}

   		

}, 1);