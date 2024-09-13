<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_vagas'])) {
    $cod_vagas = $_GET['cod_vagas'];

    $query = $pdo->query("SELECT empresa.nome_empresa, empresa.foto_empresa, salario, carga_horaria, tempo_de_contrato FROM vagas INNER JOIN empresa ON vagas.cod_empresa = empresa.cod_empresa WHERE cod_vagas = '$cod_vagas'");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
            
        $nome_empresa = $res[$i]['nome_empresa'];
        $foto_empresa = $res[$i]['foto_empresa'];
        $salario = $res[$i]['salario'];
        $carga_horaria = $res[$i]['carga_horaria'];
        $tempo_de_contrato = $res[$i]['tempo_de_contrato'];


            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'nome_empresa'=>$nome_empresa, 'foto_empresa'=>$foto_empresa, 'salario'=>$salario, 'carga_horaria'=>$carga_horaria, 'tempo_de_contrato'=>$tempo_de_contrato));

                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "null";
    }
 ?>