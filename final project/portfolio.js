function come(){
    let sidebar=document.querySelector(".sidebar")
    sidebar.style.transform="translateX(0%)"
    gsap.from(".fields a",{
        x:100,
        stagger:0.3,
        opacity:0,
        duration:0.7
    })    
}
function go(){
    let sidebar=document.querySelector(".sidebar")
    sidebar.style.transform="translateX(100%)"
}

// -----------------------------------home page animations ---------------------
gsap.from(".logo",{
    opacity:0,
    x:-150,
    duration:1.5
})
gsap.from(".bar",{
    opacity:0,
    x:50,
    duration:1,
    delay:1
})
gsap.from(".proff h1",{
    y:-150,
    opacity:0,
    duration:1,
    delay:3
})
gsap.from(".proff h2",{
    y:100,
    opacity:0,
    duration:1,
    delay:4
})

// ------------------------------- about page animation  ------------------

function about(a){
    let experience=document.querySelector(".experience")
    let eduacation=document.querySelector(".education")
    let interests=document.querySelector(".interests")
    
    if(a==='experience'){
        experience.style.display="block"
        eduacation.style.display="none"
        interests.style.display="none"
        gsap.from(".experience",{
            opacity:0,
            y:30
        })
    }
    else if(a==='education'){
        experience.style.display="none"
        eduacation.style.display="block"
        interests.style.display="none"
        gsap.from("li",{
            opacity:0,
            stagger:0.1
        })
    }
    else if(a==='interests'){
        experience.style.display="none"
        eduacation.style.display="none"
        interests.style.display="block"
        gsap.from(".interests",{
            opacity:0,
            y:30
        })
    }

}
gsap.to(".glass",{
    rotateX:0,
    scrollTrigger:{
        trigger:".glass", 
        scroller:"body",
        scrub:true,
        // markers: true,
        start:"top 80%",
        end:"top 20%"
    }
})

// ------------------------------- skills page animation  ------------------


// ------------------------------- projects page animation  ------------------
// ------------------------------- contact page animation  ------------------

const mq = window.matchMedia("(min-width: 900px)");
if(mq.matches){
    contactAnimation(0,50)
}
else{
    contactAnimation(5,60)
}

function contactAnimation(e,s){
    let t=gsap.timeline({
        scrollTrigger:{
            trigger:".contact",
            scroller:"body",
            start:`top ${s}%`,
            end:`top ${e}%`,
            scrub:true,
            markers:true
        }
    })
    t.from(".form",{
        scale:2
    }).from(".title",{
        opacity:0,
        y:30
    }).from("#ip1",{
        opacity:0,
        x:-100
    }).from("#ip2",{
        opacity:0,
        x:100
    }).from("#ip3",{
        opacity:0,
        y:30
    }).from("#but",{
        opacity:0,
        scale:0
    })
}

// ------------------------------- footer block animation  ------------------
