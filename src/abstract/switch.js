export default class Switch {

    constructor(manager){
        if(new.target === Switch){
            throw new Error("Switch es abstracta");
        }

        this.manager = manager;
        this.state = 0;
    }

    toggle(){
        throw new Error("Implementa toggle()");
    }

    getState(){
        return this.state;
    }
}
