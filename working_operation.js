 var para = 0;
    function Theory() {
        para += 1;
        if(para==1){
		document.getElementById("Theory").innerHTML = "The user approaches to the simulator to understand the construction of square wave concept with help of fundamental and harmonic order of sine wave. The simulator has six scroll buttons which are used by the user to control the different parameters. User scrolls the order of harmonics scroll range to control the number of harmonics in square wave construction. The number of harmonics plays the important role in construction of square waveform. It is assumed that a square wave is a summation of infinite number of odd harmonics of sine wave. As the order or harmonics is increased, wave shape moves towards square wave.";
		document.getElementById("FWR").src="FWR1.png" 
		document.getElementById("FWR_O").src="output1.png" 
		}
		
		else{
		document.getElementById("Theory").innerHTML = "The story is started with a simple imagination of sine wave. In our daily life we learn many things with imagination what happens if we do this. Similarly, here a fundamental sine wave is used with its harmonics components to draw the square wave. User can think about the addition of fundamental and 3rd harmonic components of the sine. It will not be exact sine wave but something fluctuating in nature with oscillating nature at the top. Now, if user increases the number of harmonics, the number of oscillation increases with decrement in oscillating nature which motivate the user to increase the user to see the effect of harmonics order on the construction of square wave. The whole story design process of simulation experiment is narrated as a story which consists of the description of the visual stage, the goals and objectives planned and the pathway set for the learner. Moreover a few challenges and pitfalls are also set to underline and emphasize <br>the concepts involved in the experimentation. Every stage is described thoroughly in the following subsections.";
		document.getElementById("FWR").src="FWR2.png" 
		document.getElementById("FWR_O").src="output2.png" 
		}
    };