'use scrict'

const cidades = [
      {nome: 'Jandira', cor: 'red', icon: 'cidade-1.png'},
      {nome: 'Itapevi', cor: 'blue', icon: 'cidade-2.png'},
      {nome: 'Barueri', cor: 'yellow', icon: 'cidade-3.png'},
      {nome: 'Osasco', cor: 'purple', icon: 'cidade-4.png'}
     ]



     function criarMenu(cidade){
        const novoItem = document.createElement('li')
        const novoLink = document.createElement('a')
        const menu = document.getElementById('menu')
        const novaImg = document.createElement('img')

        novaImg.src = `./icon/${cidade.icon}`

        novoLink.href = '#'
        novoLink.textContent = cidade.nome
        
        novoItem.appendChild(novaImg)
        novoItem.appendChild(novoLink)
        novoItem.style = `--cor-hover:${cidade.cor}`

        menu.appendChild(novoItem)



     }
     cidades.forEach(criarMenu)