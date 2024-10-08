<?php 
require_once("../conexao.php");
$tabela = 'envio_curriculo';

// Decodifica os dados enviados no corpo da requisição
$postjson = json_decode(file_get_contents('php://input'), true);

$cod_usuario = $postjson['cod_usuario'];
$cod_curriculo = $postjson['cod_curriculo'];
$cod_empresa = $postjson['cod_empresa'];

// Prepare a query para inserir os dados
$res = $pdo->prepare("INSERT INTO envio_curriculo(cod_usuario, cod_curriculo, cod_empresa) VALUES (:cod_usuario, :cod_curriculo, :cod_empresa)");

// Bind dos valores nas variáveis
$res->bindValue(":cod_usuario", $cod_usuario);
$res->bindValue(":cod_curriculo", $cod_curriculo);
$res->bindValue(":cod_empresa", $cod_empresa);

if ($res->execute()) {
    $result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));
} else {
    // Captura o erro detalhado
    $error = $res->errorInfo();  
    $result = json_encode(array('mensagem'=>'Erro ao salvar!', 'erro' => $error, 'sucesso'=>false));
}

// Retorna a resposta com o cabeçalho correto
header('Content-Type: application/json');
echo $result;
?>
