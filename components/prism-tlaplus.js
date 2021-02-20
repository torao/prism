Prism.languages.tlaplus = {
	'comment': [
		{
			pattern: /\(\*[\s\S]*?(?:\*\)|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /\\\*.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'keyword': /\b(?:ACTION|ASSUME|ASSUMPTION|AXIOM|BOOLEAN|BY|CASE|CHOOSE|CONSTANT|CONSTANTS|COROLLARY|DEF|DEFINE|DEFS|DOMAIN|ELSE|ENABLED|EXCEPT|EXTENDS|HAVE|HIDE|IF|IN|INSTANCE|LAMBDA|LEMMA|LET|LOCAL|MODULE|NEW|OBVIOUS|OMITTED|ONLY|OTHER|PICK|PROOF|PROPOSITION|PROVE|QED|RECURSIVE|STATE|STRING|SUBSET|SUFFICES|TAKE|TEMPORAL|THEN|THEOREM|UNCHANGED|UNION|USE|VARIABLE|VARIABLES|WITH|WITNESS)\b/,
	'boolean': /\b(?:TRUE|FALSE)\b/,
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'prolog': /(====+|----+)/,
	'rule': {
		pattern: /\b\w+(\(.*?\)|\[.*?\])?\s*==/,
		inside: {
			'atrule': /\b\w+(\(.*?\)|\[.*?\])?/
		}
	},
	'symbol': /\b\w+'/
};