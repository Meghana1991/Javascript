function upper() {
    let ss = 10;
    function down() {
        this.sc = 20
    }
    down()
    console.log(sc, this.sc) //20
}
console.log(sc, this.sc) //20
