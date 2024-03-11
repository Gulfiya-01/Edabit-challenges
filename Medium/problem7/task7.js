const male={
	[-3]:"great grandfather",
	[-2]:"grandfather",
	[-1]:'father',
	 0:"me!",
	 1:"son",
	 2:'grandson',
	 3:"great grandson",
}
const female={
	[-3]:"great grandmother",
	[-2]:"grandmother",
	[-1]:'mother',
	 0:"me!",
	 1:"daughter",
	 2:"granddaughter",
	 3:"great granddaughter",
}
function generation(x, y) {
   for(var g in male) {
       g = male[x];
   }
   for(var f in male) {
       f = female[x];
   }
return	y=="m"? g : f
}
export default generation;