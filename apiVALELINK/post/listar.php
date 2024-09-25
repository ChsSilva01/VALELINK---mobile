<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 5; 
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1; 

$inicio = ($limite * $pagina) - $limite; 

$query = $pdo->prepare("SELECT cod_post,imagem,comentario,data_do_post,hora_do_post,empresa.nome_empresa,empresa.foto_empresa,empresa.cod_empresa FROM post INNER JOIN empresa ON post.cod_empresa = empresa.cod_empresa ORDER BY cod_post DESC LIMIT $inicio, $limite");
// 
$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);



for ($i=0; $i < count($res); $i++) { 
      $dados[] = array(
        'cod_post' => $res[$i]['cod_post'],
        'imagem' => $res[$i]['imagem'],        
        'comentario' => $res[$i]['comentario'],        
        'data_do_post' => $res[$i]['data_do_post'],        
        'hora_do_post' => $res[$i]['hora_do_post'],                             
        'nome_empresa' => $res[$i]['nome_empresa'],                             
        'foto_empresa' => $res[$i]['foto_empresa'],                             
        'cod_empresa' => $res[$i]['cod_empresa'],                             
    );

}


if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>@$dados, 'totalItems'=>@count($dados) + ($inicio)));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>