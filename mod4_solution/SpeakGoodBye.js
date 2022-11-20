(function(window){
var ByeSpeaker={};
var speakWord="GoodBye"
ByeSpeaker.speak= function(names){
    console.log(speakWord+" "+names);
}
window.ByeSpeaker=ByeSpeaker;
})(window);   
