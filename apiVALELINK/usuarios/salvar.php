<?php 
require_once("../conexao.php");
$tabela = 'usuario';

$postjson = json_decode(file_get_contents('php://input'), true);

$CPF = @$postjson['CPF'];
$nome = @$postjson['nome'];


//validar email
$query = $pdo->query("SELECT * FROM $tabela where nome = '$nome'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if($total_reg > 0 and $res[0]['CPF'] != $CPF){
	$result = json_encode(array('mensagem'=>'Email já Cadastrado, escolha Outro!', 'sucesso'=>false));
	echo $result;	
	exit();
}



if($CPF == "" || $CPF == "0"){
	$res = $pdo->prepare("INSERT INTO $tabela SET CPF = :CPF, nome = :nome");	

}else{
	$res = $pdo->prepare("UPDATE $tabela SET nome = :nome where CPF = '$CPF'");
	
}


$res->bindValue(":nome", "$nome");

$res->execute();


$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>