class BackButton{
    static back(){
        console.log(1212);
        return window.history.back()
    }
}

window.backButton = BackButton