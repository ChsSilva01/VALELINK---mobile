<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/styles.css" type="text/css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <title>Carrinho de compra</title>
</head>
<body>
   
<nav class="navbar navbar-expand-sm navLoja">
  <div class="container-fluid">
    <span class="navbar-text"><img src='./img/logo_vale_fish.png' class="logoLoja"></span>
    <span class="navbar-text"><h2>Bem-vindo(a)</h2></span>
    <button type="button" class="menu-button" id="toggleMenu" style="background-color: transparent; border: none; resize: none; outline: none;"><i class="bi bi-cart iconCarrinho"></i>
    </button>
    <div class="menu" id="sideMenu">
    <?php
        include("../controller/funca-listar-produtos.php");
        include("../controller/funcao-acoes-carrinho.php");
        include("../model/connect.php");
    ?>
    </div>
  </div>
</nav>
<img src='./img/img_decorativa.png' class="imgDecorativa">
    <?php
        session_start(); // Inicia a sessão ou retoma a sessão existente

        // Verifica se o usuário está autenticado
        if (!isset($_SESSION['logado']) || $_SESSION['logado'] !== true) {
            header("Location: index.php"); // Redireciona para a página de login se não estiver autenticado
            exit(); // Garante que o redirecionamento ocorra e o script pare aqui
        }
    ?>

<div class="divItens"> 
    <div class="divNovidades">Novidades</div>
    <div class="cardOrganizacoes">
        <?php funcaoProdutos() ?>
    </div>
</div>
    <script>
        const menuButton = document.getElementById('toggleMenu');
        const sideMenu = document.getElementById('sideMenu');

        menuButton.addEventListener('click', function() {
            sideMenu.classList.toggle('open');

        });
    </script>
    </div>
</body>
</html>
