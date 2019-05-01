//Factory function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("Draw")
        }
    };
}

const c = createCircle(1);

//Constructor function
function createCircleFn(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw from constructor")
    }
}

const cc = new createCircleFn(1);