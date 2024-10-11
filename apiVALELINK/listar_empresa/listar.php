<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

    $query = $pdo->query("SELECT nome_empresa, foto_empresa, descricao_da_empresa FROM empresa WHERE cod_empresa = 3");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
        $nome_empresa = $res[$i]['nome_empresa'];
        $foto_empresa = $res[$i]['foto_empresa'];
        $descricao_da_empresa = $res[$i]['descricao_da_empresa'];
            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'nome_empresa'=>$nome_empresa, 'foto_empresa'=>$foto_empresa, 'descricao_da_empresa'=>$descricao_da_empresa));

                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;
 ?>