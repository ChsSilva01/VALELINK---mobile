<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_usuario'])) {
    $cod_usuario = $_GET['cod_usuario'];

    $query = $pdo->query("SELECT cod_curriculo FROM curriculo WHERE cod_usuario = '$cod_usuario'");
    // 
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
        $cod_curriculo = $res[$i]['cod_curriculo'];
        }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'cod_curriculo'=>$cod_curriculo));
                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "Null";
    }

?>