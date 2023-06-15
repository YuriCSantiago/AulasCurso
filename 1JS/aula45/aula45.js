try {
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo')

    try {                 // Pode se fazer um try dentro do outro
        console.log(b);           
    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Tambem sou finally');
    }


} catch (e) {
    console.log('Tratando o erro');
    // É executado quando há erroas
} finally {
    console.log('FINALLY: Eu sempre sou executado');
    // Executa Sempre
}