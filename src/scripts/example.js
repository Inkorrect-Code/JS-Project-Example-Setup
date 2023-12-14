
class Example {
    constructor(elem) {
        this.elem = elem;
        this.elem.innerHTML = "<h1>it's Alive!!!!</h1>";
        // debugger;
        this.handleClick = this.handleClick.bind(this)
        this.elem.addEventListener("click", this.handleClick);
    }

    handleClick() {
        this.elem.children[0].innerText = "Ouch!";
    }
}

export default Example;