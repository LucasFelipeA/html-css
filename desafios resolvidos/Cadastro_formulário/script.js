function Limpar(){
    c = 0
    while (c < 18){
        var form = document.getElementsByName('form')[c]
        form.value = ''
        c++
    }
    var dependente1 = document.getElementsByName('radopt')[0]
    var dependente2 = document.getElementsByName('radopt')[0]
    dependente1.checked = true
    dependente2.checked = false
    var dependente1 = document.getElementsByName('radopt2')[0]
    var dependente2 = document.getElementsByName('radopt2')[0]
    dependente1.checked = true
    dependente2.checked = false
}
function Cadastrar(){
    alert('Cadastro enviado ao banco de dados')
    Limpar()
}
function foto(){
    var td = document.getElementById('foto')
    td.innerHTML = '<img src="https://tr.rbxcdn.com/bc487ec65cc67c9974754ff8a7e04e2c/420/420/Hat/Png" alt="Nerd cat" width="100%"></img>'
    
}
function sair(){
    var td = document.getElementById('foto')
    td.textContent = 'Foto'
}
function entrar(){
    var td = document.getElementById('foto')
    td.textContent = 'Clique em mim'
}