<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_vagas'])) {
    $cod_vagas = $_GET['cod_vagas'];

    $query = $pdo->query("SELECT cod_vagas, empresa.nome_empresa, empresa.foto_empresa FROM vagas INNER JOIN empresa ON vagas.cod_empresa = empresa.cod_empresa WHERE cod_vagas = '$cod_usuario';");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
            
        $nome_empresa = $res[$i]['nome_empresa'];


            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'nome_empresa'=>$nome_empresa));

                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "Null";
    }
 ?>