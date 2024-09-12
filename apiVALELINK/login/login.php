<?php 
include_once('../conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);
$senha = $postjson['senha'];
$query_buscar = $pdo->prepare("SELECT * from usuario where CPF = :CPF and senha = :senha ");
$query_buscar->bindValue(":CPF", "$postjson[CPF]");
$query_buscar->bindValue(":senha", "$senha");
$query_buscar->execute();

$dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($dados_buscar); $i++) { 
    foreach ($dados_buscar[$i] as $key => $value) {
    }
    $id_user = $dados_buscar[$i]['cod_usuario'];

    $dados[] = array(
        'cod_usuario' => intVal($dados_buscar[$i]['cod_usuario']),
        'CPF' => $dados_buscar[$i]['CPF'],  
        'senha' => $dados_buscar[$i]['senha'],   
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