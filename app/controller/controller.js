const fs = require("fs");

function SortByNameAscending(x,y) {
    return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
}


function SortByNameDescending(x,y) {
    return ((x.name == y.name) ? 0 : ((x.name > y.name) ? -1 : 1 ));
}

exports.search = (req, res) => {
    
    let raw = fs.readFileSync("input.json");
    let data = JSON.parse(raw);
    const searchNameRaw = req.body.name;
    const searchName = JSON.stringify(searchNameRaw).toUpperCase();
    console.log(searchName);
    let searchList = [];

    data.forEach(element => {
        if(JSON.stringify(element.name) === searchName) {
            searchList.push(element);
        }
    });

    res.json(searchList);
    res.end();
};

exports.filter = (req, res) => {
    
    let raw = fs.readFileSync("input.json");
    let data = JSON.parse(raw);
    const value = req.body.price;
    const order = req.body.order;
    console.log(req.body.price + req.body.order);
    
    let filterList = [];
    data.forEach(element => {
        element.price >= value && filterList.push(element);  
    });
    order==1 ? filterList.sort(SortByNameAscending) : filterList.sort(SortByNameDescending); 
    console.log(filterList);
    
    res.json(filterList);
    res.end();
};

exports.new = (req, res) => {
    
    let raw = fs.readFileSync("input.json");
    let data = JSON.parse(raw);
    const newName = req.body.newname;
    const newPrice = req.body.newprice;

    const newData = {
            "name": newName.toUpperCase(),
            "price": newPrice
    };

    data.push(newData);
    fs.writeFile("input.json", JSON.stringify(data), function(err){
        if(err) throw err;
    });

    res.json("Succesfully inserted new stock: " + newData.name + " " + newData.price);
};