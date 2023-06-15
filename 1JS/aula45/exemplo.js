function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
       hour12: false // Tira o PM da hora
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia');
}
