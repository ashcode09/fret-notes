function findFretsInScale(scale, tuning) {
  var all = {};
  scale.map((e,i) => all[e] = findFretsInStandardTuning(e, tuning));
  return all;
}

function findFrets(note, tuning) {
	var frets = {}, tuning = tuning || ['e', 'a', 'd', 'g', 'b', 'e'];
	tuning.map(e => frets[e] = findFret(e, note))
	return frets;
}

function findFret(string, note) {
	var allNotes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
	return (allNotes.slice(allNotes.indexOf(string)) + ',' + allNotes.slice(0, allNotes.indexOf(string))).split(',').indexOf(note);
}