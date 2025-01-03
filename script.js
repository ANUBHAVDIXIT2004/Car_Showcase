const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

//update indiciator width
const updatePagination = (tab, index) => {
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicator.style.width = `${tab.offsetWidth}px`;
};
//swiper instance
const swiper = new Swiper(".slider-container",{
    effect : "fade",
    speed: 1300,
    navigation:{
        prevEl:"#slide-prev",
        nextEl:"#slide-next"
    },
    //update pagination on slide change
    on : {
        slideChange: () => {
            const currentTabIndex = [...sliderTabs].indexOf
            (sliderTabs[swiper.activeIndex]);
            updatePagination(sliderTabs[swiper.activeIndex]
                ,currentTabIndex);

        }
    }
     
});

//update the slide and pagination on tab click
sliderTabs.forEach((tab , index) => { 
    tab.addEventListener("click" , () =>{
        swiper.slideTo(index);
        updatePagination(tab, index);
    });
});

updatePagination(sliderTabs[0],0);
//window.addEventListener("resize" , () => updatePagination(sliderTabs[swiper.activeIndex],0);)
