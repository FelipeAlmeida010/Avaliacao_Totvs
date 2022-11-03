function calcularSalario(salario, valorDasVendas) {
	let salarioTotal = 0
	
	if (valorDasVendas <= 1600) {
		salarioTotal = (valorDasVendas * 2.35) / 100 + salario
	} else {
		salarioTotal = (valorDasVendas - 1600) * 6 / 100 + 37.6 + salario
	}
	
	return salarioTotal
}

console.log(calcularSalario(1200, 2600))