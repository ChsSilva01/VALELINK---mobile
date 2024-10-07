<?php 
require_once("../conexao.php");
$tabela = 'envio_curriculo';

// Decodifica os dados enviados no corpo da requisição
$postjson = json_decode(file_get_contents('php://input'), true);

$cod_usuario = $postjson['cod_usuario'];
$cod_curriculo = $postjson['cod_curriculo'];
$cod_empresa = $postjson['cod_empresa'];

// Prepare a query para inserir os dados
$res = $pdo->prepare("INSERT INTO $tabela (cod_usuario, cod_curriculo, cod_empresa) VALUES ($cod_usuario, $cod_curriculo, $cod_empresa)");

$res->bindValue(":cod_usuario", $cod_usuario);
$res->bindValue(":cod_curriculo", $cod_curriculo);
$res->bindValue(":cod_empresa", $cod_empresa);

if ($res->execute()) {
    $result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));
} else {
    $result = json_encode(array('mensagem'=>'Erro ao salvar!', 'sucesso'=>false));
}

echo $result;
?>
