module.exports = {
  // Diretórios que o Jest deve considerar para buscar os testes.
  roots: [""],

  // Transforma arquivos JavaScript usando o Babel antes de executar os testes.
  transform: {
    '^.+\.js$': 'babel-jest',
  },

  // Pastas que o Jest deve ignorar durante a busca por testes.
  testPathIgnorePatterns: ['/node_modules/'],

  // Reporters que serão usados para exibir os resultados dos testes.
  reporters: ['default'],

  // Opções para a exibição dos resultados dos testes.
  verbose: true,
};

