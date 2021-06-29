function insert(num){
	document.form.textview.value = document.form.textview.value + num;
}
function equal(){
	var exp = document.form.textview.value;
	if ((document.form.textview.value).indexOf("**") > -1) {
		var base = (document.form.textview.value).slice(0, (document.form.textview.value).indexOf("**"));
		var exponent = (document.form.textview.value).slice((document.form.textview.value).indexOf("**") + 1);
		document.form.textview.value = Math.pow(base,exponent);
	}
	if(exp){
		document.form.textview.value = eval(exp);
	}

}
function radians() {
	document.form.textview.value = document.form.textview.value * (Math.PI / 180);
  }
  
  // our '∘' button
  function degrees() {
	document.form.textview.value = document.form.textview.value * (180 / Math.PI);
  }
function cl(){
	document.form.textview.value = "";
}
function move(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);
}
function insert1(num){
	document.form.textview.value = document.form.textview.value * document.form.textview.value;
	
}
function insert2(num){
	document.form.textview.value = document.form.textview.value * document.form.textview.value * document.form.textview.value;
	
}
function insert3(num){
	document.form.textview.value = 1/document.form.textview.value ;
	
}
function insert5(num){
	document.form.textview.value = Math.cbrt(num);
}
function insert6(num){
	document.form.textview.value = Math.sqrt(num);
}
function fourroot(){
	document.form.textview.value = Math.pow(document.form.textview.value, 1/4);
}
function factorial(num){
	var factor=1;
	for(var i=1;i<=num;i++){
		factor = factor*i;
	}
	return factor;
}
function fact(){
	document.form.textview.value = factorial(document.form.textview.value);
}
function logg(){
	document.form.textview.value = Math.log10(document.form.textview.value);
}
function ln(){
	document.form.textview.value = Math.ln(document.form.textview.value);
}
function mod(){
	var exp = document.form.textview.value;
	if(exp<0){
		document.form.textview.value = -(exp);
	}
	else{
		document.form.textview.value = exp;
	}
}
function power10(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = Math.pow(10,exp);
	}
}
function sin() {
	document.form.textview.value = Math.sin(document.form.textview.value);
  }
  
  // our 'cos' button
  function cos() {
	document.form.textview.value = Math.cos(document.form.textview.value);
  }
  
  // our 'tan' button
  function tan() {
	document.form.textview.value = Math.tan(document.form.textview.value);
  }
  function exponent() {
	document.form.textview.value += "**";
	
  }
  function radians() {
	document.form.textview.value = document.form.textview.value * (Math.PI / 180);
  }
  
  // our '∘' button
  function degrees() {
	document.form.textview.value = document.form.textview.value * (180 / Math.PI);
  }
function bintodec(){
    document.form.textview.value = parseInt(document.form.textview.value, 2).toString(10);  
}
function dectobin(){
	var exp = document.form.textview.value;
	document.form.textview.value = ( exp >>> 0).toString(2);
}
function dec2hex(){
	var exp = (document.form.textview.value).toString(16);
	document.form.textview.value = exp;
}
function dec2oct(){
	var exp = (document.form.textview.value).toString(8);
	document.form.textview.value = exp;
}

