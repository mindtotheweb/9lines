$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();

	// настройки скрипта
	var fisrt = 515; // c какого числа 
	var last = 797; // до какого числа
	var speed = 0.0000001; // с какой скоростью (Чем меньше, тем быстрее )

	setInterval(function() {

			if (fisrt < last) {

			$('span.jssjil__counter-count').html("<span class='jssjil__counter-count'>"+fisrt+"</span>");

			fisrt = fisrt + 1;

			$("#arrow").css({transition:'all 1.6s',transform:'rotate(-8deg) translateX(-33px) translateY(-3px)'});

			}else {
			      clearInterval();
	      	}	
	    }, speed);
});