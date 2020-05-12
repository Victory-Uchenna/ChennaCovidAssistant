const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// common questions

const covidfine = ['fines for breaking lockdown rules increases from 60 pounds to 100 pounds. Repeat offenders will see the fine double for each subsequent breach to a maximum of 3200 pounds']
const travel = ['People in England can drive to parks and beaches. But only with members of same house hold and cannot travel into Wales or Scotland'] 
const childcare = ['Paid childcare is allowed to begin again. Nannies and childminders are allowed to resume work']
const facemask = ['people should aim to wear a face covering in enclosed spaces where social distancing is not possible']
const school = ['nurseries and schools may be allowed to reopen for reception classes and years 1 and 6 by the first of june']
const work = ['you should return to work if you are a Staff in food production, construction, manufacturing, logistics, distribution and scientific research in laboratories']
const liftlockdown = ['Lockdown will be lifted when the government is confident the NHS can provide sufficient critical care, when there is sustainable and consistent fall in death rates, the rate of infection falls to manageable levels, there is enough testing and personal equipment to meet future demand and that any changes in restrictions would not lead to a second peak']
const friends = ['you are allowed to spend time outside with someone from another household as long as the 2 meter rule is followed']
const sports = ['some outdoor sports are permitted, including tennis, golf, water sports and angling. You can exercise, but not play a team sport, with any person outside your household']
const stayalert = ['you can stay alert by staying at home as much as possible, keep a 2 metre distance if you have to go out, work from home if you can, limit contact with other people and wash your hands regularly']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("voice activated, you can speak now");
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add the listener to the button 

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    //speech.text = 'i do not have that information at the moment';
    
    if(message.includes('fine')){
        const finalMessage = covidfine[0]
        speech.text = finalMessage;
    }

   // window.speechSynthesis.speak(speech);
   
    const travelWd = ['travel','beach','park'];
    var i;
    for (i = 0; i < travelWd.length; i++) {
        if(message.includes(travelWd[i])){
            const finalMessage = travel[0]
            speech.text = finalMessage;
        }
    }

    const childCareWd = ['childminder','nanny','work'];
    var i;
    for (i = 0; i < childCareWd.length; i++) {
        if(message.includes(childCareWd[i])){
            const finalMessage = childcare[0]
            speech.text = finalMessage;
        }
    }

    const facemaskWd = ['face mask','social distancing'];
    var i;
    for (i = 0; i < facemaskWd.length; i++) {
        if(message.includes(facemaskWd[i])){
            const finalMessage = facemask[0]
            speech.text = finalMessage;
        }
    }

    const schoolWd = ['school','nursery', 'child'];
    var i;
    for (i = 0; i < schoolWd.length; i++) {
        if(message.includes(schoolWd[i])){
            const finalMessage = school[0]
            speech.text = finalMessage;
        }
    }

    const workWd = ['work','construction', 'manufacturing', 'logistics', 'distribution', 'scientific researcher'];
    var i;
    for (i = 0; i < workWd.length; i++) {
        if(message.includes(workWd[i])){
            const finalMessage = work[0]
            speech.text = finalMessage;
        }
    }

    const liftlockdownWd = ['when will lockdown be lifted','when will lockdown be relaxed', 'easing lockdown measures', 'lockdown measure'];
    var i;
    for (i = 0; i < liftlockdownWd.length; i++) {
        if(message.includes(liftlockdownWd[i])){
            const finalMessage = liftlockdown[0]
            speech.text = finalMessage;
        }
    }

    const friendsWd = ['friend','going out', 'outside'];
    var i;
    for (i = 0; i < friendsWd.length; i++) {
        if(message.includes(friendsWd[i])){
            const finalMessage = friends[0]
            speech.text = finalMessage;
        }
    }

    const sportsWd = ['sports','exercise', 'sport'];
    var i;
    for (i = 0; i < sportsWd.length; i++) {
        if(message.includes(sportsWd[i])){
            const finalMessage = sports[0]
            speech.text = finalMessage;
        }
    }

    const stayalertWd = ['stay alert', "alert"];
    var i;
    for (i = 0; i < stayalertWd.length; i++) {
        if(message.includes(stayalertWd[i])){
            const finalMessage = stayalert[0]
            speech.text = finalMessage;
        }
    }

    //if(message.includes(travelword[i])){
    //    const finalMessage = travel[0]
    //    speech.text = finalMessage;
    //}
    
    
    
    

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    //var voices = window.SpeechSynthesis.getVoices()
   // speech.voice=voices[0]

   window.speechSynthesis.speak(speech);
}