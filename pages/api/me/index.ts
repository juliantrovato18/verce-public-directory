export default function (req, res){
    const name = "julito";
    console.log(name, "soy la api");
    res.send(name);
}