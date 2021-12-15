x=0;
y=0;
draw_circle=0;
draw_rectangle=0;

var speechRecognition=window.webkitSpeechRecognition;

var recognition=new speechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is Listening, please speak";
    recognition.start();
    
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The Speech has been recognized as: "+content;
    
    if(content=="circle")
    {
        x=Math.floor(Math.random()*1000);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle";
        draw_circle=1;
    }

    if(content=="rectangle")
    {
        x=Math.floor(Math.random()*1000);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        draw_rectangle=1;
    }
}

    function setup()
    {
        canvas=createCanvas(1000,600);
    }

    function draw(){
        if(draw_circle){
            radius=Math.floor(Math.random()*100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML="Circle is drawn";
            draw_circle=0;
        }

        if(draw_rectangle){
            rect(x,y,80,40);
            document.getElementById("status").innerHTML="Rectangle is drawn";
            draw_rectangle=0;
        }
    }