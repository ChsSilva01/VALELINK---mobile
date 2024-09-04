<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_usuario'])) {
    $cod_usuario = $_GET['cod_usuario'];

    $query = $pdo->query("SELECT * from usuario where cod_usuario = '$cod_usuario'");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
            
        $cod_usuario = $res[$i]['cod_usuario'];
        $nome_usuario = $res[$i]['nome_usuario'];
        $foto_usuario = $res[$i]['foto_usuario'];

            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'cod_usuario'=>$cod_usuario, 'nome_usuario'=>$nome_usuario, 'foto_usuario'=>$foto_usuario));

                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "Null";
    }
 ?>