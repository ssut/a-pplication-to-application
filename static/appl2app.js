(function(_) {
    "use strict";

    var Substitute = function(map) {
        this.map = map;
    }

    Substitute.prototype = {
        /**
         * Replace values in a string with the corresponding values in the pre-released map.
         *
         * @var String text
         *     a string to be replaced
         *
         * @return String
         */
        replace: function(text) {
            for(let i = 0; i < this.map.length; i++) {
                // this will be better but chrome can't just yet even ES6:
                //  let [find, repl] = this.map[i];
                let find = this.map[i][0];
                let repl = this.map[i][1];
                text = text.replace(find, repl);
            }

            return text;
        }
    };

    let replacer = new Substitute([
        [/어플리케이션/g, '애플리케이션'],
        [/어플중에/g, '앱 중에'],
        [/어플로/g, '앱으로'],
        [/어플/g, '앱'],
    ]);

    var appl2app = function(text) {
        return replacer.replace(text);
    };

    _.appl2app = appl2app;

})(window);
