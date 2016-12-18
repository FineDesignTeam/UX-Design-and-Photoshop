(function solve(){
    var question = document.getElementById('question'),
        aside = document.getElementById('aside'),
        register = document.getElementById('user-register'),
        form = document.getElementById('form'),
        nav = document.getElementById('nav-div'),
        main = document.getElementById('main-container'),
        tar = document.getElementById('chk'),
        counter = 0;

    if(window.location.pathname.endsWith('Forum.html') || window.location.pathname.endsWith('forum-thema.html')){
        tar.classList.add('clicked');
    }

    nav.addEventListener('click', function(ev){
        let target = ev.target;
        let navs = document.getElementsByClassName('nav-li');
        if(target.classList.contains('nav-li')){
            for(let nav of navs){
                if(nav.classList.contains('clicked')){
                    nav.classList.remove('clicked')
                }
            }
            target.classList.add('clicked');
        }
        if(target.innerHTML === 'Форум' && !window.location.pathname.endsWith('Forum.html')){
            window.location = '../Forum.html';
        }
    }, false);

    question.addEventListener('mouseover', function(ev){
        if(ev.target === question){
            ev.target.style.cursor = 'pointer';
        }
    }, false);

    question.addEventListener('click', function(){
        let search = document.getElementById('searchField');
        if(search.className === 'hidden'){
            search.className = 'show';
        }
        else{
            search.className = 'hidden'
        }
    }, false);

    register.addEventListener('click', function(ev){
        let target = ev.target;

        if(target.id === 'reg' && target.innerHTML === 'регистрация'){
            window.location = './content/user-register.html';
        }

        if(target.id === 'enter'){
            if(form.classList.contains('hidden') && target.innerHTML === 'вход'){
                form.classList.remove('hidden');
                target.innerHTML = 'отказ';
            }
            else if(form.classList.contains('hidden') && target.innerHTML === 'изход'){
                let reg = document.getElementById('reg');
                let usr = document.getElementById('usr');
                let bell = document.getElementById('bell');
                usr.classList.remove('show');
                usr.classList.add('hidden');
                bell.classList.remove('show');
                bell.classList.add('hidden');
                reg.innerHTML = 'регистрация';
                reg.classList.remove('userreg');
                target.innerHTML = 'вход';
            }
            else{
                form.classList.add('hidden');
                target.innerHTML = 'вход';
            }
        }
        
        if(target.id === 'submit'){
            let name = document.getElementsByClassName('usrName')[0].value;
            let pass = document.getElementsByClassName('pass')[0].value;
            if(name && pass){
                let reg = document.getElementById('reg');
                let usr = document.getElementById('usr');
                let bell = document.getElementById('bell');
                form.classList.add('hidden');
                let enter = document.getElementById('enter');
                document.getElementsByClassName('usrName')[0].value = null;
                document.getElementsByClassName('pass')[0].value = null;
                usr.classList.remove('hidden');
                usr.classList.add('show');
                bell.classList.remove('hidden');
                bell.classList.add('show');
                reg.innerHTML = name;
                reg.classList.add('userreg');
                enter.innerHTML = 'изход';
            }
        }
    });
    
    main.addEventListener('click', function(ev){
        let target = ev.target;
        let info = document.getElementById('info-tab');
        if(target.className === 'category'){
            info.innerHTML = target.innerHTML;
        }

    }, false);

    aside.addEventListener('click', function(ev){
        let target = ev.target;
        let lis = target.children;

        if(target.className === 'acordeon' && counter === 0){
            for(let li of lis){
                li.classList.remove('hideLi');
                li.classList.add('showLi');
            }
            counter++;
        }

        else if(target.className === 'acordeon' && counter === 1){

            let uls = aside.getElementsByClassName('acordeon');
            for(let ul of uls){
                let ch = ul.children[0];
                if(ch.classList.contains('showLi')){
                    if(ul === target){
                        counter--;
                    }
                    let chhide = ul.children;
                    for(let c of chhide){
                        c.classList.remove('showLi');
                        c.classList.add('hideLi');
                    }
                }
            }
            if(counter === 1){
                for(let li of lis){
                    li.classList.remove('hideLi');
                    li.classList.add('showLi');
                }
            }
        }
    }, false);

    aside.addEventListener('mouseover', function(ev){
        if(ev.target.className === 'acordeon' || ev.target.className === 'categories-ul'){
            ev.target.style.cursor = 'pointer';
        }
    }, false);
}());
