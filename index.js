var valor1 = parseFloat(prompt('insira um valor: '))

var valor2 = parseFloat(prompt('insira um valor: '))

var divisão = valor1 / valor2



try {var divisão = valor1 / valor2} 

catch(error) {if (valor2 = 0) { document.write("Não existe divisão por zero")}}

finally {document.write(divisão)}

