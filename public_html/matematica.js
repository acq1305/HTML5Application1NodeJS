/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var PI=3.14;

function sumar(x1,x2)
{
    return x1+x2;
}
 
function restar(x1,x2)
{
    return x1-x2;
}
 
function dividir(x1,x2)
{
    if (x2==0)
	{
	    mostrarErrorDivision();
	}
	else
	{
	    return x1/x2;
	}
}
 
function mostrarErrorDivision() {
    console.log('No se puede dividir por cero');
}
 
exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.PI=PI; 
