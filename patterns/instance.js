let instance;
let globalState = {
    color: ""
};

class StateUtility {
    constructor() {
        if (instance) {
            return instance;
            //throw new Error("New instance cannot be created!!");
        }
        instance = this;
    }

    getPropertyByName(propertyName) {
        return globalState[propertyName];
    }

    setPropertyValue(propertyName, propertyValue) {
        globalState[propertyName] = propertyValue;
    }
}

let stateUtilityInstance = Object.freeze(new StateUtility());
let styleObject = new StateUtility();
console.log(stateUtilityInstance === styleObject);
stateUtilityInstance.setPropertyValue("color", 'black');
stateUtilityInstance.setPropertyValue("display", 'block');
console.log(stateUtilityInstance.getPropertyByName('color'));
console.log(styleObject.getPropertyByName('color'));
//export default stateUtilityInstance;