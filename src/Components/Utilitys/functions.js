const storeDataOnLocalStorage = (id) => {
    const dataArray = storedcartItems();
    const quntity = dataArray[id];
    if(quntity){
        dataArray[id] = quntity + 1;
    }else{
        dataArray[id] = 1;
    }
    console.log(dataArray);

    localStorage.setItem("addedInCart", JSON.stringify(dataArray))
}

const storedcartItems = (id) => {
    let storedData = {};
    const storedDataItems = localStorage.getItem("addedInCart");
    if(storedDataItems){
        storedData = JSON.parse(storedDataItems);
    }
    return storedData;
}

export {
    storeDataOnLocalStorage
}