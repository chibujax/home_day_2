(function() {
  'use strict';
  var word = require("../app/word/library.js");
  var rstring = require("../app/reversestring/library.js");

  describe("words()", function() {
    it("counts one word", function() {
      var expectedCounts = { word: 1 };
      expect(word.words("word")).toEqual(expectedCounts);
    });

    it("counts one of each", function() {
      var expectedCounts = { one: 1, of: 1, each: 1 };
      expect(word.words("one of each")).toEqual(expectedCounts);
    });

    it("counts multiple occurrences", function() {
      var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
      expect(word.words("one fish two fish red fish blue fish")).toEqual(expectedCounts);
    });

    it("includes punctuation", function() {
      var expectedCounts = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
      expect(word.words("car : carpet as java : javascript!!&@$%^&")).toEqual(expectedCounts);
    });

    it("includes numbers", function() {
      var expectedCounts = { testing: 2, 1: 1, 2: 1 };
      expect(word.words("testing 1 2 testing")).toEqual(expectedCounts);
    });

    it("respects case", function() {
      var expectedCounts = { go: 1, Go:1, GO:1 };
      expect(word.words("go Go GO")).toEqual(expectedCounts);
    });

    it("counts properly international characters", function() {
      var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
      expect(word.words("¡Hola! ¿Qué tal? Привет!")).toEqual(expectedCounts);
    });

    it("counts multiline", function() {
      var expectedCounts = { hello: 1, world: 1 };
      expect(word.words("hello\nworld")).toEqual(expectedCounts);
    });

    it("counts tabs", function() {
      var expectedCounts = { hello: 1, world: 1 };
      expect(word.words("hello\tworld")).toEqual(expectedCounts);
    });

    it("counts multiple spaces as one", function() {
      var expectedCounts = { hello: 1, world: 1 };
      expect(word.words("hello  world")).toEqual(expectedCounts);
    });

    it("handles properties that exist on Object's prototype", function() {
      var expectedCounts = { reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  "ok?": 1};
      expect(word.words("reserved words like prototype and toString ok?")).toEqual(expectedCounts);
    });
  });

  describe("Produce the reverse order of a word: ", function() {
    describe("Case for en empty string", function() {

      it("should return null for empty string", function() {
        expect(rstring.reverseString('')).toEqual(null);
      });

    });

    describe("Case for palindromes", function() {

      it("should return true for `anna`", function() {
        expect(rstring.reverseString('anna')).toEqual(true);
      });

      it("should return true for `NaN`", function() {
        expect(rstring.reverseString('NaN')).toEqual(true);
      });

      it("should return true for `civic`", function() {
        expect(rstring.reverseString('civic')).toEqual(true);
      });

    });

    describe("Case for normal words", function() {

      it("should return `skoob` for `books`", function() {
        expect(rstring.reverseString('books')).toEqual('skoob');
      });

      it("should return `nomolos` for `solomon`", function() {
        expect(rstring.reverseString('solomon')).toEqual('nomolos');
      });

      it("should return `csim` for `misc`", function() {
        expect(rstring.reverseString('misc')).toEqual('csim');
      });

    });

    describe("Case for invalid input", function() {

      it("should return `TypeError` for 1991", function() {
        expect(rstring.reverseString(1991)).toEqual('TypeError');
      });

      it("should return 'TypeError' for []", function() {
        expect(rstring.reverseString([])).toEqual('TypeError');
      });

      it("should return `TypeError` for ", function() {
        expect(rstring.reverseString()).toEqual('TypeError');
      });

    });	  

  });

})();