<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$query = $pdo->prepare("SELECT cod_vagas, empresa.nome_empresa, empresa.foto_empresa, area_vagas FROM vagas INNER JOIN empresa ON vagas.cod_empresa = empresa.cod_empresa;");
// 
$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);



for ($i=0; $i < count($res); $i++) { 
      $dados[] = array(
        'cod_vagas' => $res[$i]['cod_vagas'],
        'nome_empresa' => $res[$i]['nome_empresa'],                                 
        'foto_empresa' => $res[$i]['foto_empresa'],                                 
        'area_vagas' => $res[$i]['area_vagas'],                                 
    );

}


if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>