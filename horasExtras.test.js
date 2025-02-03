const horasextras = require('./horasextras')
//1
test('1- salario por hora 10, horas trabalhada 50, carga horaria 40, resultado experado 100',()=>{
    expect(horasextras(10,50,40)).toBe(100);
})

//2
test('2- salario por hora 10, Horas trabalhadas 30, carga horaria 36, resultado esperado 0',()=>{
    expect(horasextras(10,30,36)).toBe(0);
})

//3
test('3- salario por hora -10, Horas trabalhadas 50, carga horaria 40, resultado esperado "Todos os valores devem ser positivos"',()=>{
    expect(horasextras(-10,50,40)).toBe("Todos os valores devem ser positivos");
})

//4
test('4- salario por hora 10, Horas trabalhadas -50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"',()=>{
    expect(horasextras(10,-50,40)).toBe("Todos os valores devem ser positivos");
})

//5
test('5- salario por hora 10, Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser positivos',()=>{
    expect(horasextras(10,50,-40)).toBe("Todos os valores devem ser positivos");
})

//6
test('6- salario por hora "A", Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem números"',()=>{
    expect(horasextras("A",50,-40)).toBe("todos os valores devem números");
})

//7
test('7- salario por hora 10, Horas trabalhadas "A", carga horaria -40, resultado esperado "todos os valores devem números"',()=>{
    expect(horasextras(10,"A",-40)).toBe("todos os valores devem números");
})

//8
test('8- salario por hora 10, Horas trabalhadas 50, carga horaria "A", resultado esperado "todos os valores devem números"',()=>{
    expect(horasextras(10,50,"A")).toBe("todos os valores devem números");
})