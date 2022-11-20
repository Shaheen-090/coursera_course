(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i=0;i<names.length;i++){
        var fistChar=names[i].charAt(0).toLowerCase();
        if(fistChar=='j'){
            ByeSpeaker.speak(names[i]);
        }else{
            HelloSpeaker.speak(names[i]);
        }
    }
})();
