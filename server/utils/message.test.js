var expect = require("expect");

var {generateMessage} = require("./message")

describe("\generateMessage",() =>{
it("should generate correct message object", () => {
    var obj = {
        from:"Josh",
        text: "Banter"};
    
    var res = generateMessage("Josh","Banter");    
    expect((res,obj) =>{
            res.from.toBe(obj.from);
            res.text.toBe(obj.text);
            res.createdAt.toBeA("number");
        })

})


})