<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_empresa'])) {
    $cod_empresa = $_GET['cod_empresa'];

    $query = $pdo->query("SELECT nome_empresa,descricao_da_empresa,quantidade_de_funcionario_empresa,quantidade_de_seguidores_empresa,foto_empresa FROM empresa WHERE cod_empresa = '$cod_empresa'");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
            
        $nome_empresa = $res[$i]['nome_empresa'];
        $descricao_da_empresa = $res[$i]['descricao_da_empresa'];
        $quantidade_de_funcionarios = $res[$i]['quantidade_de_funcionario_empresa'];
        $quantidade_de_seguidores = $res[$i]['quantidade_de_seguidores_empresa'];
        $foto_empresa = $res[$i]['foto_empresa'];

            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'nome_empresa'=>$nome_empresa, 'descricao_da_empresa'=>$quantidade_de_funcionario_empresa, 'quantidade_de_funcionario_empresa'=>$quantidade_de_funcionarios, 'quantidade_de_seguidores_empresa'=>$quantidade_de_seguidores_empresa, 'foto_empresa'=>$foto_empresa));

                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "null";
    }
 ?>