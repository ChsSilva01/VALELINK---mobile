<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

// if (isset($_GET['cod_usuario'])) {
//     $cod_usuario = $_GET['cod_usuario'];

    $query = $pdo->query("SELECT * FROM usuario");
    // WHERE cod_usuario = '$cod_usuario'
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
        // Informações Pessoais
        $cod_usuario = $res[$i]['cod_usuario'];
        $nome_usuario = $res[$i]['nome_usuario'];
        $RG = $res[$i]['RG'];
        $CPF = $res[$i]['CPF']; 
        $data_de_nascimento = $res[$i]['data_de_nascimento'];

        // Endereço
        $cidade = $res[$i]['cidade'];
        $numero = $res[$i]['numero'];
        $CEP = $res[$i]['CEP'];
        $rua = $res[$i]['rua'];
        $tempo_de_residencia = $res[$i]['tempo_de_residencia'];
        $tipo_de_residencia = $res[$i]['tipo_de_residencia'];
        $ponto_de_referencia = $res[$i]['ponto_de_referencia'];
            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'cod_usuario'=>$cod_usuario, 'nome_usuario'=>$nome_usuario, 'RG'=>$RG, 'CPF'=>$CPF, 'data_de_nascimento'=>$data_de_nascimento, 'cidade'=>$cidade, 'numero'=>$numero, 'CEP'=>$CEP, 'rua'=>$rua, 'tempo_de_residencia'=>$tempo_de_residencia, 'tipo_de_residencia'=>$tipo_de_residencia, 'ponto_de_referencia'=>$ponto_de_referencia));
                    // 
                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    // } else {
    //     echo "Null";
    // }

?>