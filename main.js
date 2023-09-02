function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p0rcRaI-_/model.json',modelReady);

}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
console.error(error);

}
console.log(results);
randomR = Math.floor(Math.random()* 255)+1;
randomG = Math.floor(Math.random()* 255)+1;
randomB = Math.floor(Math.random()* 255)+1;
document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
document.getElementById("result_label").style.color="rgb("+randomR+","+randomG+","+randomB+")"; 
document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence * 100).toFixed(2)+ "%";
document.getElementById("result_confidence").style.color="rgb("+randomR+","+randomG+","+randomB+")"; 
i1=document.getElementById("alien1");
i2=document.getElementById("alien2");
i3=document.getElementById("alien3");
i4=document.getElementById("alien4");
if(results[0].label=="clap"){
i1.src="aliens-01.gif";
i2.src="aliens-02.png";
i3.src="aliens-03.png";
i4.src="aliens-04.png";
}
else if(results[0].label=="bell"){
    i1.src="aliens-01.png";
    i2.src="aliens-02.gif";
    i3.src="aliens-03.png";
    i4.src="aliens-04.png";
    }
else if(results[0].label=="snap"){
    
        i1.src="aliens-01.gif";
        i2.src="aliens-02.png";
        i3.src="aliens-03.png";
        i4.src="aliens-04.png";
        
  }
  else{
      
        i1.src="aliens-01.gif";
        i2.src="aliens-02.png";
        i3.src="aliens-03.png";
        i4.src="aliens-04.png";
     
  }

}