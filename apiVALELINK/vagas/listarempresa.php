<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_vagas'])) {
    $cod_vagas = $_GET['cod_vagas'];

    $query = $pdo->query("SELECT empresa.nome_empresa, empresa.foto_empresa, salario_vagas, carga_horaria_vagas, tempo_contrato_vagas, sobre_vagas, area_vagas, pre_requisitos_vagas, beneficios_vagas, foto_vagas FROM vagas INNER JOIN empresa ON vagas.cod_empresa = empresa.cod_empresa WHERE cod_vagas = '$cod_vagas'");
    //  
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
            
        $nome_empresa = $res[$i]['nome_empresa'];
        $foto_empresa = $res[$i]['foto_empresa'];
        $salario_vagas = $res[$i]['salario_vagas'];
        $carga_horaria_vagas = $res[$i]['carga_horaria_vagas'];
        $tempo_contrato_vagas = $res[$i]['tempo_contrato_vagas'];
        $area_vagas = $res[$i]['area_vagas'];
        $pre_requisitos_vagas = $res[$i]['pre_requisitos_vagas'];
        $beneficios_vagas = $res[$i]['beneficios_vagas'];
        $foto_vagas = $res[$i]['foto_vagas'];


            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'nome_empresa'=>$nome_empresa, 'foto_empresa'=>$foto_empresa, 'salario_vagas'=>$salario_vagas, 'carga_horaria_vagas'=>$carga_horaria_vagas, 'tempo_contrato_vagas'=>$tempo_contrato_vagas, 'area_vagas'=>$area_vagas, 'pre_requisitos_vagas'=>$pre_requisitos_vagas, 'beneficios_vagas'=>$beneficios_vagas, 'foto_vagas'=>$foto_vagas));

                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "null";
    }
 ?>