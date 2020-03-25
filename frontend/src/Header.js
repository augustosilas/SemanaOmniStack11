import React from "react";

// props.children: acessa todos elementos dentro do corpo Header
// props.nome_da_propriedade: acessa através da priedade o conteúdo
// recomendado usar a desestruturação
function Header({ children, title }) {
  return (
    <header>
      <h1>{children}</h1>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
