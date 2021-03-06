// Copyright (c) 2012 Fabrice Weinberg, http://codepen.io/FWeinb

// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var lang = {
// Thanks to Hugo Giraudel for the french translation (https://docs.google.com/a/weinberg.me/spreadsheet/viewform?formkey=dDJFUW5NODVyakNpTHQxLWFVVnlhcnc6MQ). Hope everything is right.
// Hope the italian version is correct. I don't speak it.
    'it' : {
        name: 'Italian',
        map :  [["S","O","N","O","E","L","E","H","I","J","K"],
                ["È","M","L’","U","N","A","S","D","U","E","B"],
                ["T","R","E","N","O","V","E","O","T","T","O"],
                ["S","E","T","T","E","C","I","N","Q","U","E"],
                ["D","O","D","I","C","B","D","I","E","C","I"],
                ["Q","U","A","T","T","R","O","F","S","E","I"],
                ["U","N","D","I","C","I","F","M","E","N","O"],
                ["E","K","U","N","L","Q","U","A","R","T","O"],
                ["V","E","N","T","I","C","I","N","Q","U","E"],
                ["D","I","E","C","I","L","M","E","Z","Z","O"]],
        sentences : {
                  start :  { all : [[0,0,3],[0,5,6]], 1 : [[1,0], [1, 2, 5]] },
                  end   : { all : [] },
                  hours : {
                      0 : [[[4,0,4]]],
                      1 : [[[]]],
                      2 : [[[1,7,9]]],
                      3 : [[[2,0,2]]],
                      4 : [[[4,0,4]]],
                      5 : [[[3,5,10]]],
                      6 : [[[5,8,10]]],
                      7 : [[[3,0,4]]],
                      8 : [[[2,7,10]]],
                      9 : [[[2,3,6]]],
                      10: [[[4,6,10]]],
                      11: [[[6,0,5]]],
                      12: [[[4,0,4]]]
                  },
                  minutes :{
                    5  : [[7,0], [7,2,3], [8, 5, 10]],
                    10 : [[7,0], [7,2,3], [9, 0, 5]],
                    15 : [[7,0], [7,2,3], [7, 5, 10]],
                    20 : [[7,0], [7,2,3], [8, 0, 4]],
                    25 : [[7,0], [7,2,3], [8,0,10]],
                    30 : [[7,0], [9,6,10] ],
                    35 : [[6,7,10], [7,2,3], [8,0,10]],
                    40 : [[6,7,10], [7,2,3], [8,0,4] ],
                    45 : [[6,7,10], [7,2,3], [7, 5, 10]],
                    50 : [[6,7,10], [7,2,3], [9,0,5]],
                    55 : [[6,7,10], [7,2,3], [8, 5, 10]]
                  },
                  incrementHourAt : 30
            }
    },
    'fr' : {
        name: 'French',
        map :  [["I", "I", "C", "E", "S", "T", "G", "H", "U", "N", "E"],
                ["D", "E", "U", "X", "P", "Q", "T", "R", "O", "I", "S"],
                ["Q", "U", "A", "T", "R", "E", "C", "D", "S", "I", "X"],
                ["S", "E", "P", "T", "D", "I", "X", "C", "I", "N", "Q"],
                ["N", "E", "U", "F", "W", "H", "U", "I", "T", "B", "C"],
                ["O", "N", "Z", "E", "H", "D", "O", "U", "Z", "E", "O"],
                ["P", "Q", "R", "S", "T", "H", "E", "U", "R", "E", "S"],
                ["M", "O", "I", "N", "S", "F", "E", "T", "D", "I", "X"],
                ["Q", "U", "A", "R", "T", "D", "E", "M", "I", "U", "V"],
                ["W", "V", "I", "N", "G", "T", "–", "C", "I", "N", "Q"]],
        sentences : {
          start :  { all : [[0,0,1],[0,3,5]]},
              end   : { all : [[6,5,9]] },
              hours : {
                  0 : [[[5,5,9]]],
                  1 : [[[0,8,10]]],
                  2 : [[[1,0,3]]],
                  3 : [[[1,6,10]]],
                  4 : [[[2,0,5]]],
                  5 : [[[3,7,10]]],
                  6 : [[[2,8,10]]],
                  7 : [[[7,0,4]]],
                  8 : [[[4,0,3]]],
                  9 : [[[4,5,8]]],
                  10: [[[3,4,6]]],
                  11: [[[5,0,3]]],
                  12: [[[5,5,9]]]
              },
              minutes :{
                5  : [[6,5,10], [9,7,10] ],
                10 : [[6,5,10], [7,8,10] ],
                15 : [[6,5,10], [8,0,4]  ],
                20 : [[6,5,10], [9,1,5]  ],
                25 : [[6,5,10], [9,1,10] ],
                30 : [[6,5,10], [7,6,7], [8,5,8] ],
                35 : [[6,5,10], [7,0,4], [9,1,10]],
                40 : [[6,5,10], [7,0,4], [9,1,5] ],
                45 : [[6,5,10], [7,0,4], [8,0,4] ],
                50 : [[6,5,10], [7,0,4], [7,8,10]],
                55 : [[6,5,10], [7,0,4], [9,7,10]]
              },
              incrementHourAt : 60
        }
    },
    'en' : {
        name: 'English',
        map :  [["I","T","L","I","S","B","F","A","M","P","M"],
                ["A","C","Q","U","A","R","T","E","R","D","C"],
                ["T","W","E","N","T","Y","F","I","V","E","X"],
                ["H","A","L","F","B","T","E","N","F","T","O"],
                ["P","A","S","T","E","R","U","N","I","N","E"],
                ["O","N","E","S","I","X","T","H","R","E","E"],
                ["F","O","U","R","F","I","V","E","T","W","O"],
                ["E","I","G","H","T","E","L","E","V","E","N"],
                ["S","E","V","E","N","T","W","E","L","V","E"],
                ["T","E","N","S","E","O'","C","L","O","C","K"]],
        sentences : {
            start :  { all : [[0,0,1],[0,3,4]]},
            end   :  { all : [[9,5,10]] },
            hours : {
                0 : [[[8,5,10]]],
                1 : [[[5,0,2]]],
                2 : [[[6,8,10]]],
                3 : [[[5,6,10]]] ,
                4 : [[[6,0,3]]],
                5 : [[[6,4,7]]] ,
                6 : [[[5,3,5]]],
                7 : [[[8,0,4]]] ,
                8 : [[[7,0,4]]],
                9 : [[[4,7,10]]] ,
                10: [[[9,0,2]]] ,
                11: [[[7,5,10]]],
                12: [[[8,5,10]]]
            },
            minutes :{
              5  : [ [2,6,9]   , [4,0,3] ],
              10 : [ [3,5,7]   , [4,0,3] ],
              15 : [ [1,2,8]   , [4,0,3] ],
              20 : [ [2,0,5]   , [4,0,3] ],
              25 : [ [2,0,9]   , [4,0,3] ],
              30 : [ [3,0,3]   , [4,0,3] ],
              35 : [ [2,0,9]   , [3,9,10]],
              40 : [ [2,0,5]   , [3,9,10]],
              45 : [ [1,2,8]   , [3,9,10]],
              50 : [ [3,5,7]   , [3,9,10] ],
              55 : [ [2,6,9]   , [3,9,10] ]
            },
            incrementHourAt : 29
        }
    },
    'de' : {
        name: 'German',
        map : [["E","S","M","I","S","T","E","F","Ü","N","F"],
            ["Z","E","H","N","Z","W","A","N","Z","I","G"],
            ["N","A","C","H","V","I","E","R","T","E","L"],
            ["V","O","R","N","A","C","H","H","A","L","B"],
            ["E","I","N","S","I","N","K","Z","W","E","I"],
            ["D","R","E","I","E","A","N","V","I","E","R"],
            ["F","Ü","N","F","N","I","S","E","C","H","S"],
            ["S","I","E","B","E","N","I","A","C","H","T"],
            ["N","E","U","N","Z","E","H","N","E","L","F"],
            ["Z","W","Ö","L","F","K","A","B","U","H","R"]],
        sentences : {
          start : { all :[[0,0,1], [0,3,5]] },
          end   : { all : [[9,8,10]] },
          hours : {
              0 : [[[9,0,4]]],
              1 : [[[4,0,2]]  , [[4,0,3]] ],
              2 : [[[4,7,10]]],
              3 : [[[5,0,3]]] ,
              4 : [[[5,7,10]]],
              5 : [[[6,0,3]]] ,
              6 : [[[6,6,10]]],
              7 : [[[7,0,5]]] ,
              8 : [[[7,7,10]]],
              9 : [[[8,0,3]]] ,
              10: [[[8,4,7]]] ,
              11: [[[8,8,10]]],
              12: [[[9,0,4]]]
          },
          minutes :{
            5  : [ [0,7,10]  , [2,0,3] ],
            10 : [ [1,0,3]   , [2,0,3] ],
            15 : [ [2,4,10]  , [3,3,6] ],
            20 : [ [1,4,10]  , [3,3,6] ],
            25 : [ [0,7,10]  , [3,0,2]  , [3,7,10] ],
            30 : [ [3,7,10] ],
            35 : [ [0,7,10]  , [2,0,3] , [3,7,10] ],
            40 : [ [1,4,10]  , [3,0,2] ],
            45 : [ [2,4,10]  , [3,0,2] ],
            50 : [ [1,0,3]   , [3,0,2] ],
            55 : [ [0,7,10]  , [3,0,2] ]
          },
          incrementHourAt : 24
        }
    }
}

var wordClock = {
    seconds     :  {
              0 : [[[2,1,3],[3,0],[3,4],[4,0],[4,3],[4,4],[5,0],[5,2],[5,4],[6,0],[6,1],[6,4],[7,0],[7,4],[8,1,3]]],
              1 : [[[2,2],[3,1],[3,2],[4,2],[5,2],[6,2],[7,2],[8,1,3]]],
              2 : [[[2,1,3],[3,0],[3,4],[4,4],[5,3],[6,2],[7,1],[8,0,4]]],
              3 : [[[2,0,4],[3,3],[4,2],[5,3],[6,4],[7,0],[7,4],[8,1,3]]],
              4 : [[[2,3],[3,2],[3,3],[4,1],[4,3],[5,0],[5,3],[6,0,4],[7,3],[8,3]]],
              5 : [[[2,0,4],[3,0],[4,0,3],[5,4],[6,4],[7,0,0],[7,4],[8,1,3]]],
              6 : [[[2,2,3],[3,1],[4,0],[5,0,3],[6,0],[6,4],[7,0],[7,4],[8,1,3]]],
              7 : [[[2,0,4],[3,4],[4,3],[5,2],[6,1],[7,1],[8,1]]],
              8 : [[[2,1,3],[3,0],[3,4],[4,0],[4,4],[5,1,3],[6,0],[6,4],[7,0],[7,4],[8,1,3]]],
              9 : [[[2,1,3],[3,0],[3,4],[4,0],[4,4],[5,1,4],[6,4],[7,3],[8,1,2]]]
    },

    letterMap       : null,
    prevSentence    : [],
    prevSecond      : null,
    language        : null,
    letters         : null,

    //state           : 0, // 0 = Normal Clock, 1 = Show Seconds + Minutes

    init : function(language){
        var self = this;

        $('.settings-trigger').leanModal({
            ready: function() { self.buildSettingsModal() },
            // complete: function() { self.saveSettings() }
        });

        $("form").submit(function(event) {
            self.saveSettings($(this).serializeArray());
            event.preventDefault();
        });

        this.letters = document.getElementById('letters');
        //this.language = language;

        this.loadSettings();

        this.buildLetters();

        this.startClock();
    },

    loadSettings: function() {
        if(!localStorage.qlocktwo_settings) {
            this.settings = {
                'language': 'en',
                'color': '#000',
                'state': 0
            }
        }
        else {
            this.settings = JSON.parse(localStorage.qlocktwo_settings);
        }

        this.applySettings();
    },

    saveSettings: function(data) {
        var self = this;

        $.each(data, function() {
            self.settings[this.name] = this.value;

            self.settings.state = (this.name == 'state' && this.value == 'on') ? 1 : 0;

            if(this.name == 'language' && this.name !== self.settings.language) {
                self.language = lang[this.value];
                self.buildLetters();
            }
        });

        localStorage.qlocktwo_settings = JSON.stringify(this.settings);

        this.applySettings();

        this.switchState();

        Materialize.toast('Settings saved', 4000)
    },

    applySettings: function() {
        this.language = lang[this.settings.language]
        this.state = this.settings.state

        $('#clock').css('background', this.settings.color);
    },

    buildSettingsModal: function() {
        var self = this;

        $('select[name="language"]').empty();
        $.each(lang, function(k, v) {
            $('select[name="language"]').append('<option ' + ((k == self.settings.language ? 'selected' : '')) + ' value="' + k + '">' + v.name + '</option>');
        });
        $('select[name="language"]').material_select();

        $('[name="color"][value="' + this.settings.color + '"]').prop('checked', true);

        if(self.settings.state == 1) {
            $('[name="state"]').prop('checked', true);
        }
    },

    startClock : function(){
        this.hideLetters(this.prevSentence);
        this.hideNumber(this.prevSecond);

        this.showMinutes();

        if (this.state === 0){
            this.showText();
        }
        else{
            this.showSeconds();
        }
    },

    switchState : function(){
        var state = this.settings.state;

        if (state !== undefined){
            this.state = state;
        }else{
            this.state = ++this.state % 2;
        }
        this.startClock();
    },

    buildLetters: function(){
        //Clear Letters
        this.letters.innerHTML = "";

        // Create 2D Array to store the span elements.
        this.letterMap = [];
        for (var i=0;i<this.language.map.length;i++){
            this.letterMap.push([]);
        }
        //"Draw" Letters
        for (var x=0;x<this.language.map.length;x++){
           for (var y=0;y<this.language.map[x].length;y++){
                var span = document.createElement('span');
                    span.innerHTML = this.language.map[x][y];
                // Add the letter to the lettrMap
                this.letterMap[x].push(span);
                this.letters.appendChild(span);
           }
        }
    },

    showText: function(){
        if (this.state !== 0) return;

        // Hide last Sentence
        this.hideLetters(this.prevSentence);


        var showClock = false;
        var plural = true;
        var hours = this.getHours();
        var minutes = this.getMinutes();

        var showArr = [];

        var startLetters = (this.language.sentences.start[hours] !== undefined ) ? this.language.sentences.start[hours] : this.language.sentences.start.all;


         showArr.push(startLetters);

        if (minutes < 5){
            showClock = true;
            plural = false;
        }
        else {
            minutes -= minutes % 5;
            showArr.push(this.language.sentences.minutes[minutes]);
            if (minutes > this.language.sentences.incrementHourAt){
                // Increment hour
                hours = (hours+1) % 12;
            }
        }

        if (plural && (this.language.sentences.hours[hours].length === 2)){
          showArr.push(this.language.sentences.hours[hours][1]);
        }
        else {
            showArr.push(this.language.sentences.hours[hours][0]);
        }

        if (showClock){
            var endLetters = (this.language.sentences.end[hours] !== undefined) ? this.language.sentences.end[hours] : this.language.sentences.end.all;
            showArr.push(endLetters);
        }
        this.showLetters(showArr);
        this.prevSentence = showArr;

        var that = this;
        // Wait for the rest of the 5min.
        setTimeout(function(){that.showText();}, (5 - (this.getMinutes() % 5)) * 60000 - this.getSeconds()*1000 - this.getMilliseconds());
    },

    showMinutes : function(){
        var minutes = this.getMinutes() % 5;

        if (minutes === 0){
           this.hideMinutesDot(4);
        }
        else{
           this.showMinutesDot(minutes);
        }

        var that = this;
        setTimeout(function(){that.showMinutes();}, (60-this.getSeconds())*1000 - this.getMilliseconds());
    },

    showSeconds : function(){
        if (this.state != 1) return;

        var seconds = this.getSeconds();

        this.hideNumber(this.prevSecond);
        this.showNumber(seconds);

        this.prevSecond = seconds;
        var that = this;
        setTimeout(function(){that.showSeconds();},1000-this.getMilliseconds());
    },

    getHours : function(){
        var hour = (new Date()).getHours();
        return (hour > 11) ? hour - 12 : hour;
    },

    getMinutes : function(){
        return (new Date()).getMinutes();
    },

    getSeconds: function(){
        return  (new Date()).getSeconds();
    },

    getMilliseconds: function(){
        return  (new Date()).getMilliseconds();
    },

    hideNumber : function(number){
        if (number === undefined || number === null) return;
        var tens = this.seconds[~~(number/10)];
        var ones = this.seconds[(number % 10)];
        this.changeClassLetters(tens, "", 0);
        this.changeClassLetters(ones, "", 6);
    },

    showNumber : function(number){
        tens = this.seconds[~~(number/10)];
        ones = this.seconds[(number % 10)];
        this.changeClassLetters(tens, "light", 0);
        this.changeClassLetters(ones, "light", 6);
    },

    hideLetters : function(la){
        this.changeClassLetters(la, "", 0);
    },

    showLetters : function(la){
        this.changeClassLetters(la, "light", 0);
    },

    hideMinutesDot : function(count){
        this.changeClassMinutes(count, '');
    },

    showMinutesDot : function(count){
        this.changeClassMinutes(count, 'light');
    },

    changeClassLetters: function(la, value, offset){
        for (var s=0;s<la.length;s++){
            for (var d=0;d<la[s].length;d++){
                var x = la[s][d][0];
                var y = la[s][d][1]+ offset;
                if (la[s][d].length === 3){
                    var end = la[s][d][2]  + offset;
                    for (var i=y;i<=end;i++){
                        this.letterMap[x][i].className = value;
                    }
                }
                else{
                    this.letterMap[x][y].className = value;
                }
            }
        }
    },

    changeClassMinutes : function(count, value){
        for (var i=0;i<count;i++){
            document.getElementById("e"+i).className = value;
        }
    },

    _inArray : function(arr, obj){
        for (var i=0;i<arr.length;i++){
            if (arr[i] == obj) return true;
        }
        return false;
    }
};

wordClock.init();
