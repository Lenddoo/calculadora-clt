function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    let horasextras = 0
    
    if(isNaN(salario) || isNaN(horastrabalhadas) || isNaN(cargahoraria)){
            return "todos os valores devem números"
        }
    if(horastrabalhadas < 0 || salario < 0 || cargahoraria < 0){
        return "Todos os valores devem ser positivos";

    }
    if(horastrabalhadas > cargahoraria){
        horasextras = (horastrabalhadas - cargahoraria) * salario
        
    }
    return horasextras
}
    module.exports=fnHorasExtras