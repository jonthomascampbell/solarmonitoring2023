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

/**
*	Adds an event handler that runs when the multi-state box moves to a new state.
	[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#onChange)
*	 @param {$w.Event} event
*/
export function multiStateBox3_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}