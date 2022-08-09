function ocultar_numeros(numeros, char_hide = 'x'){
    const oculto =  numeros.toString().replace(/\s/g, '')
    return(oculto.length != 16 ? false : char_hide.repeat(13) + oculto.toString().slice(oculto.toString().length-3,oculto.toString().length))
}