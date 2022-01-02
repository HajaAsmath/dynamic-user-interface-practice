function dropDown(ele) {
    let nextSibling = ele.target.nextElementSibling;
    if (nextSibling.classList.contains('hide')) {
        ele.target.querySelector('.arrow-right').classList.add('hide');
        ele.target.querySelector('.arrow-down').classList.remove('hide');
        while(nextSibling) {
            nextSibling.classList.remove('hide');
            nextSibling = nextSibling.nextElementSibling;
        }
    } else {
        ele.target.querySelector('.arrow-down').classList.add('hide');
        ele.target.querySelector('.arrow-right').classList.remove('hide');
        while(nextSibling) {
            nextSibling.classList.add('hide');
            nextSibling = nextSibling.nextElementSibling;
        }
    }
}

(function () {
    const navTitle = document.querySelectorAll('.nav-title');
    const list = document.querySelectorAll('.nav-content > li');
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const arrow = document.querySelectorAll('.arrow');
    const navDots = document.querySelectorAll('#nav-dots > div')

    list.forEach((ele) => {
        ele.classList.add('hide');
    })
    navTitle.forEach((ele) => {
        ele.addEventListener('click', dropDown);
    })
    hamburgerButton.addEventListener('click', (e) => {
        const nav = document.querySelector('#nav-bar')
        if(nav.classList.contains('hide')) {
            nav.classList.remove('hide');
        } else {
            nav.classList.add('hide');
        }
    });


    arrow.forEach((ele) => {
        ele.addEventListener('click', (e) => {
            let imageList = document.querySelectorAll('.food-img');
            if(e.target.getAttribute('id') === 'arrow-right') {
                for(let i = 0;i<imageList.length; i++) {
                    if(!imageList[i].classList.contains('hide')) {
                        if(i == imageList.length-1) {
                            imageList[0].classList.remove('hide');
                            imageList[i].classList.add('hide');
                            document.querySelector('#nav-0').classList.add('fill');
                            document.querySelector('#nav-'+i).classList.remove('fill');
                            break;
                        } else {
                            imageList[i].classList.add('hide');
                            imageList[i+1].classList.remove('hide');
                            document.querySelector('#nav-'+(i+1)).classList.add('fill');
                            document.querySelector('#nav-'+i).classList.remove('fill');
                            break;
                        }
                    }
                }
            } else {
                for(let i = 0;i<imageList.length; i++) {
                    if(!imageList[i].classList.contains('hide')) {
                        if(i == 0) {
                            imageList[imageList.length-1].classList.remove('hide');
                            imageList[i].classList.add('hide');
                            document.querySelector('#nav-'+i).classList.remove('fill');
                            document.querySelector('#nav-'+(imageList.length-1)).classList.add('fill');
                            break;
                        } else {
                            imageList[i].classList.add('hide');
                            imageList[i-1].classList.remove('hide');
                            document.querySelector('#nav-'+i).classList.remove('fill');
                            document.querySelector('#nav-'+(i-1)).classList.add('fill');
                            break;
                        }
                    }
                }
            }
        })
    });

    navDots.forEach((ele) => {
        ele.addEventListener('click', (e) => {
            const dot = e.target.getAttribute('id').split('-')[1];
            document.querySelector('#nav-'+dot).classList.add('fill');

            let imageList = document.querySelectorAll('.food-img');
            for(let i = 0;i<imageList.length;i++) {
                if(!imageList[i].classList.contains('hide')) {
                    imageList[i].classList.add('hide');
                    document.querySelector('#nav-'+i).classList.remove('fill');
                    break;
                }
            }
            imageList[dot].classList.remove('hide');
        })
    })
}());