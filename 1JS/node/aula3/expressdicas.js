// npm install express -- instala express na sua ultima versao se atualizarem express,
// muda tambem no package.json

// npm install express -E -- Remove o '^' e a versao nunca será atualizada

// npm instal express --save-dev // move a dependencies para devDependencies
// npm instal express --save-prod // sai da devDependicies e volta para dependencies

// npm instal express@2.1.0 // @ para usar a versao que quiser
// 2. major-> quando esse numero muda, vai quebrar compatibilidade das versao anteriores  
// 1. minor-> Adiciona recurso novo   
// 0 patch -> Correção de bugs
// quando tem '^' vai atualizar oque tem dentr oda minor e da patch.
// Para corrigar apenas o patch para corrigir algum bug usa '~' no inicio

// npm update atualiza para a versao mais recente

// npm uninstall express para desinstalar express

// npm ls --depth=0 -- mostra apenas as dependencias que voce instalou
// npm ls --depth=1 -- para ver oque instalou mais uma profundidade/pasta, vai abrir uma pasta pra dentro

// npm outdated -- para ver quais pacotes estao desatualizados