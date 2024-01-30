"use strict";
(() => {
    /* una clase abstrata basicamente se utiliza para que otras clases
    extiendan de la misma, por este motivo esta clase abstracta no podra ser creadora
    de  nuevas instancias */
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Foe extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Foe("Magneto", "Magnus");
    /* Ahora las instancias creadas con las clases Xmen y Foe al extender de Mutante podran
    tener la misma firma que Mutante y entonces wolverine y magneto seran reconocidos como mutantes */
    const printName = (character) => console.log(character.name);
    printName(wolverine);
})();
(() => {
    /* pequeño repaso del uso del private, public y static
    para usar en funciones y variables  */
    // Ademas vemos una manera de declarar un atributo directamente dentro del constructor 
    class Avenger {
        static getNameClass() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!`;
        }
    }
    Avenger.avgAge = 35;
    const antMan = new Avenger("ant man", "capitan");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log(`name: ${name}`);
        }
        getFullName() {
            return `${this.name} + ${this.realName}`;
        }
        greetings() {
            console.log(`${name} say hello`);
        }
    }
    /* si no se llama a un constructor dentro de la clase que extiede entonces automaticamente este  */
    /* llaamara al que se usa en su super */
    // 👇👇En el caso siguiente llamara al contructor de Avenger 
    /* class Xmen extends Avenger{
  
    } */
    //const wolverine = new Xmen("Wolverine","Logan");
    // En el siguiente se llamara al propio constructor 
    class Xmen extends Avenger {
        constructor(name, relaName, isMutan) {
            super(name, relaName);
            this.isMutan = isMutan;
        }
        greatingXmen() {
            console.log("Jellouuuu");
        }
        get fullName() {
            return `${this.name}`;
        }
        set fullName(newName) {
            this.name = newName;
        }
    }
    /* El protected entonces va apermitir que los metodos sean usados dentro de la
    misma clase y en clases que extiendadn de la misma */
    /* El private solo va a permitir que el meetodo o la propiedad sea visible
    dentro de la misma clase */
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.isMutan;
})();
(() => {
    /* Los constructores privados son usados para constrolar la manera en la cual
    sus instacias son ejecutadas */
    /* Entonces la usaremos para manejar singletons, es decir solo se manejara un instancia
    y solo se creara una sola vez en caso de ser llamada  */
    class Apocalipsis {
        /* El constructor con palabras reservada private solo podra ser llamado dentro de la misma clase */
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis");
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    /* Este patron singleton no es muy usado hoy en dia */
})();
//# sourceMappingURL=index.js.map