function cabecalho(valor) {
    document.write("<h1>" + valor + "</h1>");
}

function rodape() {
    document.write("<footer>Criado em 2022.</footer>")
}

function itensLista(inicial, final) {
    document.write("<hr>Lista de Números:<ul>");
    for (i = inicial; i <= final; i++)
        document.write("<li>" + i + "</li>");
    document.write("</ul><hr>");
}