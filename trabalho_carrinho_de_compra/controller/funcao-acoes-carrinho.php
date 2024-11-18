<?php
    include("../model/connect.php");
    $cookie_name = "carrinho";
    // Adiciona um produto ao carrinho
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["produto_id"])) {
        session_start();
        $carrinho = isset($_COOKIE[$cookie_name]) ? json_decode($_COOKIE[$cookie_name], true) : [];
        $carrinho[] = $_POST["produto_id"];
        $cod_produtos = $_POST["cod_produtos"];
        $cod_login = $_SESSION["cod_login"];
        setcookie($cookie_name, json_encode($carrinho), time() + 86400, "/");
        echo $cod_login;
        $query = mysqli_query($conexao, "INSERT INTO carrinho(cod_produtos, cod_login) VALUES ($cod_produtos,$cod_login)");
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
        include("../controller/funcao-acoes-carrinho.php");
        $carrinho = json_decode($_COOKIE[$cookie_name], true);
        echo "Itens no Carrinho:";
        foreach ($carrinho as $item) {
            echo "
                <p>$item 
                    <form method='POST' style='display:inline;'>
                        <input type='hidden' name='remove_id' value='$item'>
                        <input type='hidden' name='remove_cod' value='$exibe[0]'>
                        <button type='submit'>X</button>
                    </form>
                </p>";
        }
    } else {
        echo "Carrinho vazio.";
    }
?>