<?php 
include_once('../conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);
$senha_usuario = $postjson['senha_usuario'];
$query_buscar = $pdo->prepare("SELECT * from usuario where email_usuario = :email_usuario and senha_usuario = :senha_usuario ");
$query_buscar->bindValue(":email_usuario", "$postjson[email_usuario]");
$query_buscar->bindValue(":senha_usuario", "$senha_usuario");
$query_buscar->execute();

$dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($dados_buscar); $i++) { 
    foreach ($dados_buscar[$i] as $key => $value) {
    }
    $id_user = $dados_buscar[$i]['cod_usuario'];

    $dados[] = array(
        'cod_usuario' => intVal($dados_buscar[$i]['cod_usuario']),
        'email_usuario' => $dados_buscar[$i]['email_usuario'],  
        'senha_usuario' => $dados_buscar[$i]['senha_usuario'],   
    );
}

if(@count($dados_buscar) > 0){
    $result = json_encode(array('result'=>$dados));
    echo $result;  

}else{
    $result = json_encode(array('result'=>'Dados Incorretos!'));
 	echo $result;
}

?>