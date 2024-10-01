<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 5; 
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1; 

$inicio = ($limite * $pagina) - $limite; 

$query = $pdo->prepare("SELECT cod_post,midia_post,conteudo_post,data_post,hora_post,empresa.nome_empresa,empresa.foto_empresa,empresa.cod_empresa FROM post INNER JOIN empresa ON post.cod_empresa = empresa.cod_empresa ORDER BY cod_post DESC LIMIT $inicio, $limite");
// 
$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);



for ($i=0; $i < count($res); $i++) { 
     // Obtendo a data e hora do post
     $horaPost = $res[$i]['hora_post']; // Ex: '14:30:00'

     // Convertendo a hora do post para um objeto DateTime
     $horaPostDateTime = new DateTime($horaPost);
 
     // Pegando a hora atual
     $horaAtual = new DateTime();
 
     // Calculando a diferença entre a hora atual e a hora do post
     $diferenca = $horaPostDateTime->diff($horaAtual);
 
     // Exibindo a diferença em horas, minutos e segundos
     $diferencaEmHoras = $diferenca->format('Há %Hh');
 
     // Armazenando o cálculo em um array de dados para o post
      $dados[] = array(
        'cod_post' => $res[$i]['cod_post'],
        'midia_post' => $res[$i]['midia_post'],        
        'conteudo_post' => $res[$i]['conteudo_post'],        
        'data_post' => $res[$i]['data_post'],        
        'hora_post' => $res[$i]['hora_post'],                             
        'nome_empresa' => $res[$i]['nome_empresa'],                             
        'foto_empresa' => $res[$i]['foto_empresa'],                             
        'cod_empresa' => $res[$i]['cod_empresa'],   
        'diferenca_hora' => $diferencaEmHoras                          
    );

}


if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'resultado'=>@$dados, 'totalItems'=>@count($dados) + ($inicio)));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>