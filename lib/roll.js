export function roll(sides, dice, rolls) {

	const outcomes = [];

	for(var i = 0; i < rolls; i++) {
		var dicesum = 0;
		for(var j = 0; j < dice; j++) {
			dicesum += dice_roll(sides);
		}

		outcomes.push(dicesum);
	}
	
	return JSON.stringify({sides: sides, dice: dice, rolls: rolls, results: outcomes})
}

function dice_roll(sides) {
	return Math.floor(Math.random() * sides) + 1;
}
