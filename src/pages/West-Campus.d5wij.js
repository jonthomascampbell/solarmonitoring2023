// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	var states = ['box28', 'box31', 'box34', 'box37', 'box40', 'box43', 'box46'];
	var stateNumber = 0; 

	function slideShow( ) {
		$w('#multiStateBox3').changeState(states[stateNumber]);
		if (stateNumber<states.length - 1) {
			stateNumber++;
		} else {
			stateNumber = 0;
		}
		setTimeout(slideShow, 6000);
	}
	slideShow();


});