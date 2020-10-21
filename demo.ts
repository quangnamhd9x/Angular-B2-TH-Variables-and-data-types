var a:number = 100;    //kieu number
var b:string = "Nam";   //kieu chuoi
var c:boolean = true;  //kieu bolean
var d:any = {        //kieu any dang json
    ho:"Hoang",
    ten:"Nam"
}
var n:number = 100;   // var va let ben ngoai nhu nhau

{
    let m:number = 99;    // bien let chi dung trong khoi code ra ngoai khong hieu, de bao mat nen dung let
    console.log(m);      // chay duoc vi cung khoi code
}

console.log(a);
console.log(b);
console.log(c);
console.log(d.ho);
console.log(d.ten);
console.log(n);   //khong thay bien m


// su dung tsc de convert file ts
// su dung node de chay file js tren cmd