<?php 

include_once('../conexao.php');

header('Content-Type: application/json');
    $nome_empresa = $_GET['pesquisa'];

    $query = $pdo->query("SELECT * FROM empresa WHERE nome_empresa = '$nome_empresa'");
    //
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    
        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
        // Informações Pessoais
        $nome_empresa = $res[$i]['nome_empresa'];
        $foto_empresa = $res[$i]['foto_empresa'];
     
        }
            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'nome_empresa'=>$nome_empresa, 'foto_empresa'=>$foto_empresa));
                    // 
                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

?>