const Section = document.getElementById('skill');
const progressBars = document.querySelector('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress
        console.log(value)
    });
}

window.addEventListener('scroll',()=>{
    const section = Section.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if(section < screen){
        showProgress();
    }else{
        hideProgress();
    }
})