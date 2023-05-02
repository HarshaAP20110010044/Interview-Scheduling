const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", window.onload = ()=> {
    // allInput.forEach(input => {
    //     if(input.value != ""){
    //         form.classList.add('secActive');
    //     }else{
    //         form.classList.remove('secActive');
    //     }
    // })
     Calendly.initBadgeWidget({ 
        url: 'https://calendly.com/hamiltonbeach00/30min', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); 
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));