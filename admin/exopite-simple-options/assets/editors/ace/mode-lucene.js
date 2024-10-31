ace.define("ace/mode/lucene_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("../lib/lang"), s = e("./text_highlight_rules").TextHighlightRules, o = function () {
        this.$rules = {
            start: [{
                token: "constant.language.escape",
                regex: /\\[\+\-&\|!\(\)\{\}\[\]^"~\*\?:\\]/
            }, {token: "constant.character.negation", regex: "\\-"}, {
                token: "constant.character.interro",
                regex: "\\?"
            }, {token: "constant.character.required", regex: "\\+"}, {
                token: "constant.character.asterisk",
                regex: "\\*"
            }, {token: "constant.character.proximity", regex: "~(?:0\\.[0-9]+|[0-9]+)?"}, {
                token: "keyword.operator",
                regex: "(AND|OR|NOT|TO)\\b"
            }, {token: "paren.lparen", regex: "[\\(\\{\\[]"}, {
                token: "paren.rparen",
                regex: "[\\)\\}\\]]"
            }, {token: "keyword", regex: "(?:[^\\s:]+|\\\\ )*[^\\\\]:"}, {
                token: "string",
                regex: '"(?:\\\\"|[^"])*"'
            }, {token: "term", regex: "\\w+"}, {token: "text", regex: "\\s+"}]
        }
    };
    r.inherits(o, s), t.LuceneHighlightRules = o
}), ace.define("ace/mode/lucene", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/lucene_highlight_rules"], function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("./text").Mode, s = e("./lucene_highlight_rules").LuceneHighlightRules,
        o = function () {
            this.HighlightRules = s, this.$behaviour = this.$defaultBehaviour
        };
    r.inherits(o, i), function () {
        this.$id = "ace/mode/lucene"
    }.call(o.prototype), t.Mode = o
});
(function () {
    ace.require(["ace/mode/lucene"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
            