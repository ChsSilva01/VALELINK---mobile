<?php 
require_once("../conexao.php");
$tabela = 'feedback';

// Decodifica os dados enviados no corpo da requisição
$postjson = json_decode(file_get_contents('php://input'), true);

$experiencia_feedback = $postjson['experiencia_feedback'];
$comentario_feedback = $postjson['comentario_feedback'];
$cod_usuario = $postjson['cod_usuario'];

// Prepare a query para inserir os dados
$res = $pdo->prepare("INSERT INTO feedback(experiencia_feedback, comentario_feedback, cod_usuario) VALUES (:experiencia_feedback, :comentario_feedback, :cod_usuario)");

// Bind dos valores nas variáveis
$res->bindValue(":experiencia_feedback", $experiencia_feedback);
$res->bindValue(":comentario_feedback", $comentario_feedback);
$res->bindValue(":cod_usuario", $cod_usuario);

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
