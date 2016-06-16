angular.module('contatooh').controller('ContatosController', function($scope, $resource) {
  $scope.contatos = [];
  
  $scope.filtro = '';
  
  var Contato = $resource('/contatos/:id');
  
  function buscaContatos() {
    Contato.query(
      function(contatos) {
        $scope.contatos = contatos;
      },
      function(erro) {
        console.log(erro);
      }
    );
  }
  buscaContatos();

  $scope.remove = function(contato) {
    Contato.delete({id: contato._id}),
    buscaContatos,
      function(erro) {
        console.log("Não foi possível remover o contato");
        console.log(erro);
      }  
    );
  };
});