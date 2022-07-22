var content = document.querySelector('.content'),
    wrapper = document.querySelector('wrapper'),
    shadowTop = document.querySelector('.shadow--top'),
    shadowBottom = document.querySelector('.shadow--bottom'),
    contentScrollHeigth=content.scrollHeigth-wrapper.offsetHeigth;
    content.addEventListener('scroll', function(){
        var currentScroll= this.scrolltop/(contentScrollHeigth);
        shadowTop.style.opacity=currentScroll;
        shadowBottom.style.opacity=1-currentScroll;
    });
