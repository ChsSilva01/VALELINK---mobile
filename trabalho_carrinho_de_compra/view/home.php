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
    <button type="button" onClick= "modalCarrinho()" style="background-color: transparent; border: none; resize: none; outline: none;"><i class="bi bi-cart iconCarrinho"></i>
    </button>
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

<div class='cardItens1'>
    <form method="POST" action="">
        <img src="./img/foto_produto.png" class='imgCards'>
        <h4>testes</h4>
        <h3>R$200,00</h3>
        <button type="submit" name="produto_id" value="Guitarra">Adicionar ao Carrinho</button>
    </form>
</div>

<div class='cardItens2'>
    <form method="POST" action="">
        <img src="./img/logo_vale_fish.png" class='imgCards'>
        <h4>Linha</h4>
        <h3>R$250,00</h3>
        <button type="submit" name="produto_id" value="Pandeiro">Adicionar ao Carrinho</button>
    </form>
</div>

<div class='cardItens3'>
    <form method="POST" action=""> 
        <img src="./img/img_enfeite.png" class='imgCards'>
        <h4>Vara maior</h4>
        <h3>R$300,00</h3>
        <button type="submit" name="produto_id" value="Vara">Adicionar ao Carrinho</button>
    </form>
</div>

</div>


<?php
$cookie_name = "carrinho";

// Adiciona um produto ao carrinho
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["produto_id"])) {
    $carrinho = isset($_COOKIE[$cookie_name]) ? json_decode($_COOKIE[$cookie_name], true) : [];
    $carrinho[] = $_POST["produto_id"];
    setcookie($cookie_name, json_encode($carrinho), time() + 86400, "/");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Remove um produto do carrinho
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["remove_id"])) {
    $carrinho = isset($_COOKIE[$cookie_name]) ? json_decode($_COOKIE[$cookie_name], true) : [];
    if (($key = array_search($_POST["remove_id"], $carrinho)) !== false) {
        unset($carrinho[$key]); // Remove o item
    }
    setcookie($cookie_name, json_encode(array_values($carrinho)), time() + 86400, "/");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Exibe os itens do carrinho
if (isset($_COOKIE[$cookie_name])) {
    $carrinho = json_decode($_COOKIE[$cookie_name], true);
    echo "Itens no Carrinho:";
    foreach ($carrinho as $item) {
        echo "
            <p>$item 
                <form method='POST' style='display:inline;'>
                    <input type='hidden' name='remove_id' value='$item'>
                    <button type='submit'>X</button>
                </form>
            </p>
        </div>";
    }
} else {
    echo "Carrinho vazio.";
}
?>
    <script>
       function modalCarrinho(){
        
    }
        </script>
    </div>
</body>
</html>
