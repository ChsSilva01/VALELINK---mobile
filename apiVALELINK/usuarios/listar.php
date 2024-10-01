<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_usuario'])) {
    $cod_usuario = $_GET['cod_usuario'];

    $query = $pdo->query("SELECT * FROM usuario WHERE cod_usuario = '$cod_usuario'");
    //
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
        // Informações Pessoais
        $cod_usuario = $res[$i]['cod_usuario'];
        $nome_usuario = $res[$i]['nome_usuario'];
        $RG_usuario = $res[$i]['RG_usuario'];
        $CPF_usuario = $res[$i]['CPF_usuario']; 
        $data_nascimento_usuario = $res[$i]['data_nascimento_usuario'];

        // Endereço
        $cidade_usuario = $res[$i]['cidade_usuario'];
        $numero_usuario = $res[$i]['numero_usuario'];
        $CEP_usuario = $res[$i]['CEP_usuario'];
        $rua_usuario = $res[$i]['rua_usuario'];
        $tempo_de_residencia_usuario = $res[$i]['tempo_de_residencia_usuario'];
        $tipo_de_residencia_usuario = $res[$i]['tipo_de_residencia_usuario'];
        $ponto_referencia_usuario = $res[$i]['ponto_referencia_usuario'];
            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'cod_usuario'=>$cod_usuario, 'nome_usuario'=>$nome_usuario, 'RG_usuario'=>$RG_usuario, 'CPF_usuario'=>$CPF_usuario, 'data_nascimento_usuario'=>$data_nascimento_usuario, 'cidade_usuario'=>$cidade_usuario, 'numero_usuario'=>$numero_usuario, 'CEP_usuario'=>$CEP_usuario, 'rua_usuario'=>$rua_usuario, 'tempo_de_residencia_usuario'=>$tempo_de_residencia_usuario, 'tipo_de_residencia_usuario'=>$tipo_de_residencia_usuario, 'ponto_referencia_usuario'=>$ponto_referencia_usuario));
                    // 
                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "Null";
    }

?>