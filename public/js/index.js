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
    "cv" : new redirect("CV.pdf","cv","public/img/notepad.png","public/other/CV.pdf"),
    "readme": new fenetre("About.me","readme","public/img/moi.png",`
        <p>Bonjour,<br><br> je suis Sow Amadou actuellement étudiant en informatique et 
        je suis a la recherche d'une alternance dans ce domaine.</p>
        <p>L'informatique est un domaine qu'in m'interesse depuis très longtemps plus particulièrement la programmation 
        et je pense que grace a mon parcours j'ai finalement l'expérience requise pour m'essayer au travails d'entreprise
        si vous souhaitez rentrer en contact avec moi n'hésitez pas a me contacter vias mon mails, vous pourrez également avoir d'avantage d'information
        sur mon CV</p>
        <p> Ce projet est amené a s'améliorer avec le temps de nouvels options pourrait apparaitre a l'avenir </p>
        <p> Merci ! </p>
    `,"<p></p>"),
    "text" : new fenetre("Text.txt","text","public/img/notepad.png","<p>Gmodding Youhou !</p>","")
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