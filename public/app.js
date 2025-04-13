const filmes = [
    {
      id: 1,
      titulo: "Gente Grande",
      imagem: "img/gente_grande.jpg",
      descricao: "Um grupo de amigos se reúne depois de muitos anos para reviver a infância e lidar com a vida adulta."
    },
    {
      id: 2,
      titulo: "Gente Grande",
      imagem: "img/gente_grande.jpg",
      descricao: "Um grupo de amigos se reúne depois de muitos anos para reviver a infância e lidar com a vida adulta."
    },
    {
      id: 3,
      titulo: "Gente Grande",
      imagem: "img/gente_grande.jpg",
      descricao: "Um grupo de amigos se reúne depois de muitos anos para reviver a infância e lidar com a vida adulta."
    },
    
  ];
  
  // Página index
  if (document.getElementById('catalogo-filmes')) {
    const container = document.getElementById('catalogo-filmes');
    filmes.forEach(filme => {
      const div = document.createElement('div');
      div.className = 'col-sm-6 col-md-4 col-xl-3';
      div.innerHTML = `
        <div class="card-filme">
          <a href="detalhes.html?id=${filme.id}">
            <img src="${filme.imagem}" alt="${filme.titulo}" />
          </a>
          <p>${filme.titulo}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }
  
  // Página detalhes
  if (document.getElementById('detalhes')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const filme = filmes.find(f => f.id === id);
    const container = document.getElementById('detalhes');
  
    if (filme) {
      container.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}" />
        <h2>${filme.titulo}</h2>
        <p>${filme.descricao}</p>
      `;
    } else {
      container.innerHTML = "<p class='text-danger'>Filme não encontrado.</p>";
    }
  }
  