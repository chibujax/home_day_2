module.exports = {
	reverseString: function(s) {
		// Validate input
		if (typeof s !== "string") return "TypeError";
		if(s.length === 0) return null;
	  var reversedWord =  s.split('').reverse().join('');
	  if (reversedWord === s) {
	  	return true;
	  }
	  else {
	  	return reversedWord;
	  }

	}
};