<?php 

include_once('../conexao.php');

header('Content-Type: application/json');

if (isset($_GET['cod_usuario'])) {
    $cod_usuario = $_GET['cod_usuario'];

    $query = $pdo->query("SELECT empresa.nome_empresa, empresa.foto_empresa, status_notificacoes FROM notificacoes INNER JOIN empresa ON notificacoes.cod_empresa = empresa.cod_empresa WHERE cod_usuario = '$cod_usuario'");
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

    $data = [];

    // Loop para armazenar todas as linhas retornadas
    for ($i = 0; $i < count($res); $i++) {
        $data[] = array(
            'nome_empresa' => $res[$i]['nome_empresa'],
            'foto_empresa' => $res[$i]['foto_empresa'],
            'status_notificacoes' => $res[$i]['status_notificacoes']
        );
    }

    if (count($data) > 0) {
        // Retornar todos os resultados em formato de array JSON
        $result = json_encode(array('success' => true, 'data' => $data));
    } else {
        $result = json_encode(array('success' => false, 'result' => '0'));
    }

    echo $result;
} else {
    echo "null";
}
?>
