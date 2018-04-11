# Fret Notes
This is a small program written in javascript that returns the location of a note or notes on a guitar string or across all the strings.

For example, if you want to find which fret the 'A' note is on the 'E' string, you'd use the function:

```findFret('e', 'a');```

If you wanted to find where the 'A' note is on all the strings in standard tuning, you'd use:

```findFrets('a');```

And if you want to find the location of all the notes in the G Major Pentatonic scale (G A B D E) across all the strings in standard tuning, you'd use:

```findFretsInScale(['g', 'a', 'b', 'd', 'e']);```

If you want, you can specifiy a different tuning in ```findFrets(note, tuning)``` and ```findFretsInScale(scale, tuning)``` where tuning is an array of the string notes. Otherwise, the tuning variable is set to ```['e', 'a', 'd', 'g', 'b', 'e']``` by default (standard tuning E A D G B E).

Note to self: Need to clean up the return object of findFretsInScale() function.
--------
