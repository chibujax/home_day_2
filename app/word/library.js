module.exports = {
	words: function (str) { 
		if (typeof(str) !== "string"){
	    return "TypeError: Only string required";
	  }   
	  var new_words = str.replace(/[\r\n\t]+/g," ");
	  var words = new_words.split(" ");
	  var count = {};
	  for (var i = 0, len = words.length; i < len; i++) {
      if(words[i] !== ""){
        if (count.hasOwnProperty(words[i])) {
          count[words[i]] = parseInt(count[words[i]], 10) + 1;
        }
        else {
          count[words[i]] = 1;
        }        
      }
	  }
	  return count;
	}

};