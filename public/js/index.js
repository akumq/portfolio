class fenetre {
    constructor(title,id,icones,content,footer){
        this.title = title;
        this.id = id;
        this.icones = icones;
        this.content = content;
        this.footer = footer;
    }

    setContent(content){
        this.content = content ;
    }

    setFooter(footer){
        this.footer = footer;
    }

    getContent(){
        return  `
            <div class="fenetre drag" id="${this.id}" >
                <div class="fenetre_title">
                    <img src="${this.icones}" alt="">
                    <h1>${this.title}</h1>
                    <div class="space"></div>
                    <div class="fenetre_button">
                        <button class="close" onclick="close_fenetre('${this.id}')">
                        </button>
                    </div>
                </div>
                <div class="fenetre_content" >
                    ${this.content}
                </div>
                <div class="fenetre_footer">
                    ${this.footer}
                </div>
            </div>
        `
    }

    getIcone(){
        return `
            <div class="app" onclick="display_fenetre('${this.id}')">
                <img src="${this.icones}" alt="">
                <h1>${this.title}</h1>
            </div>
        `
    }

    getBarre(){
        return `
        <div class="app_open" id="${this.id}">
            <img src="${this.icones}" alt="">
            <h1>${this.title}</h1>
        </div>
        `
    }
}


class redirect {
    constructor(title,id,icones,url){
        this.title = title;
        this.id = id;
        this.icones = icones;
        this.url = url;
    }


    getIcone(){
        return `
            <div class="app" onclick="window.open('${this.url}','_blank').focus();">
                <img src="${this.icones}" alt="">
                <h1>${this.title}</h1>
            </div>

        `
    }

}
  


const tab = {
    "github" : new redirect("Github","github","public/img/github.png","https://github.com/akumq"),
    "readme": new fenetre("About.me","readme","public/img/moi.png",`
        <p>Hello I'm Amadou a french computer science student who likes a lot all programation related domains<p>
        <p>I'm currently coveted to be an indie Game Develloper</p>
        <p>since I was born my only goal was to understand
            the world arround me, like why when i push that button the light trigger, Who can my remote car receive my orders, so Computer science came naturally 
            I start to learn web devellopment at my 13th birthday, I immediately love it, make my own website was my revelation, and since my first website,
            I continue to learn Computer Science as my major.
        </p>
    `,`<p>Thanks for reading it</p>`),
    "skill": new fenetre("skill.me","skill","public/img/settings.png",`
        <p>
        <ul>
            <li><p>HTML : <bold> Advanced </bold></p></li>
            <li><p>CSS : <bold> Advanced </bold></p></li>
            <li><p>JS : <bold> Advanced </bold></p></li>
            <li><p>LUA : <bold> Advanced </bold></p></li>
            <li><p>C : <bold> Advanced </bold></p></li>
            <li><p>C++ : <bold> Good </bold></p></li>
            <li><p>C# : <bold> Good </bold></p></li>
        </ul>
        </p>
    `,`<p>But I can't learn everething that you wan't</p>`),
    "experience": new fenetre("experience","experience","public/img/notepad.png",`
        <p>
        <ul>
            <li><p> handling job's: I take this kind of job to have all sort of experience, it help me learn rigor and discipline</p></li>
            <li><p> web job's: I take a lot of benevole web devellopement application</p></li>
            <li><p> Lua devellopement: because I seek to be a game develloper I learn lua and start to make some game assets</p></li>
            <li><p> first IT job: I get a job at Prefabat as an application develloper in C# </p></li>
        </ul>
        </p>
    `,``),
}

for(element in tab){
    console.log(element);
    document.querySelector(".content").innerHTML += tab[element].getIcone();
};

function display_fenetre(id) {
    console.log(id);
    document.querySelector(".content").innerHTML = tab[id].getContent() + document.querySelector(".content").innerHTML;
    document.querySelector(".barre_app").innerHTML += tab[id].getBarre();
}


function close_fenetre(id){
    var elements = document.querySelectorAll(`#${id}`);
    for(var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}


