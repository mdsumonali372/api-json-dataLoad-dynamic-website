// object json convert
const info = { id: 01, name: "sumon", job: "web developer" };

const jsonConvert = JSON.stringify(info);
console.log(jsonConvert);

// json to object convert

const shop = {
  name: "sumon",
  product: ["mouse", "keyboard", "laptop"],
  selary: 45000,
};

const jsonCon = JSON.stringify(shop);
console.log(jsonCon);
const jsonToObj = JSON.parse(jsonCon);
console.log(jsonToObj);
