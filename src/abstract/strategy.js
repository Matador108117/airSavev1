export default class Strategy {

    constructor(){
        if(new.target === Strategy){
            throw new Error("Strategy es abstracta. No instancies directamente.");
        }
    }

    generate(){
        throw new Error("Debes implementar generate()");
    }
}
