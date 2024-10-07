<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_usuario'])) {
    $cod_usuario = $_GET['cod_usuario'];

    $query = $pdo->query("SELECT * FROM curriculo WHERE cod_usuario = '$cod_usuario'");
    //
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

        for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
        // Informações Pessoais
        $objetivo_curriculo = $res[$i]['objetivo_curriculo'];
        $historico_profissional_curriculo = $res[$i]['historico_profissional_curriculo'];
        $formacao_academica_curriculo = $res[$i]['formacao_academica_curriculo'];
        $habilidade_e_competencias_curriculo = $res[$i]['habilidade_e_competencias_curriculo']; 
            }

            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'objetivo_curriculo'=>$objetivo_curriculo,'historico_profissional_curriculo'=>$historico_profissional_curriculo,'formacao_academica_curriculo'=>$formacao_academica_curriculo,'habilidade_e_competencias_curriculo'=>$habilidade_e_competencias_curriculo,));
                    // 
                }else{
                    $result = json_encode(array('success'=>false, 'result'=>'0'));

                }
                echo $result;

    } else {
        echo "Null";
    }

?>