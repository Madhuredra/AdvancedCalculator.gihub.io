function insert(num){
	document.form.textview.value = document.form.textview.value + num;
}

function xor(x,y) {
    return ((x && !y) || (!x && y));
}
function addBinary(str1, str2){
    let carry = 0;
    const res = [];
    let l1 = str1.length, l2 = str2.length;
    for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
       let a = 0 <= i ? Number(str1[i]) : 0,
       b = 0 <= j ? Number(str2[j]) : 0;
       res.push((a + b + carry) % 2);
       carry = 1 < a + b + carry;
    };
    if (carry){
       res.push(1);
    }
    return res.reverse().join('');
 }
 function Subtract(a, b)
{
    var x = parseInt(a,2).toString(10);
    var y = parseInt(b,2).toString(10);

    var c;
 
    // ~b is the 1's Complement of b
    // adding 1 to it make it 2's Complement
    c = x-y;
    var z = (c>>0).toString(2);
 
    return z;
}
function mul(a,b){
    var x = parseInt(a,2).toString(10);
    var y = parseInt(b,2).toString(10);

    var c;
    c = x*y;
    var z = (c>>0).toString(2);
 
    return z;
}
function div(a,b){
    var x = parseInt(a,2).toString(10);
    var y = parseInt(b,2).toString(10);

    var c;
    c = x/y;
    var z = (c>>0).toString(2);
 
    return z;
}
function and(a, b){return a == 1 && b == 1 ? 1 : 0;}
function or(a, b){return (a || b);}
function not(a){return !a;}
function nor(a,b){return (!(a||b))}
function nand(a,b){return (!and(a,b))}
function eval(){
	var exp = document.form.textview.value;
	if ((document.form.textview.value).indexOf("+")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("+"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("+") + 1);
		document.form.textview.value = addBinary(base,exponent);
	}
    if ((document.form.textview.value).indexOf("-")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("-"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("-") + 1);
		document.form.textview.value = Subtract(base,exponent);
	}
    if ((document.form.textview.value).indexOf("*")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("*"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("*") + 1);
		document.form.textview.value = mul(base,exponent);
	}
    if ((document.form.textview.value).indexOf("/")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("/"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("/") + 1);
		document.form.textview.value = div(base,exponent);
	}
    if ((document.form.textview.value).indexOf("&")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("&"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("&") + 1);
		document.form.textview.value = and(base,exponent);
	}
    if ((document.form.textview.value).indexOf("||")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("||"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("||") + 1);
		document.form.textview.value = or(base,exponent);
	}
    if ((document.form.textview.value).indexOf("xor")>-1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("xor"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("xor") + 1);
		document.form.textview.value = xor(base,exponent);
	}
	if(exp){
		document.form.textview.value = eval(exp);
	}

}
function dec2bin(){
    document.form.textview.value  = (document.form.textview.value >>> 0).toString(2);
}
function bin2dec(){
    document.form.textview.value = parseInt(document.form.textview.value, 2).toString(10);
  }
function cl(){
	document.form.textview.value = "";
}
function move(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}
