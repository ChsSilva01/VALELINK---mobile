-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para carrinho_de_compra
CREATE DATABASE IF NOT EXISTS `carrinho_de_compra` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `carrinho_de_compra`;

-- Copiando estrutura para tabela carrinho_de_compra.login_usuario
CREATE TABLE IF NOT EXISTS `login_usuario` (
  `cod_login` int(11) NOT NULL AUTO_INCREMENT,
  `email_usuario` varchar(250) NOT NULL DEFAULT '0',
  `senha_usuario` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cod_login`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela carrinho_de_compra.login_usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `login_usuario` DISABLE KEYS */;
INSERT INTO `login_usuario` (`cod_login`, `email_usuario`, `senha_usuario`) VALUES
	(1, 'a@b', 'b@a');
/*!40000 ALTER TABLE `login_usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela carrinho_de_compra.produtos
CREATE TABLE IF NOT EXISTS `produtos` (
  `cod_produtos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_produtos` varchar(50) NOT NULL DEFAULT '0',
  `preco_produtos` varchar(50) NOT NULL DEFAULT '0',
  `imagem_produtos` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cod_produtos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela carrinho_de_compra.produtos: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` (`cod_produtos`, `nome_produtos`, `preco_produtos`, `imagem_produtos`) VALUES
	(1, 'Vara De Pesca Telescópica Bamboo Carbono 3 Metros ', '1000', 'vara_de_pesca_um.png'),
	(2, 'Vara De Carretilha Em Carbono 1,70m 30lbs Safira C', '500', 'vara_de_pesca_dois.png'),
	(3, 'Vara De Praia Até 60lbs 3,6m Artemis', '200', 'vara_de_pesca_tres.png'),
	(4, 'Vara Para Carretilha Maruri Venera (1,73m) 7-14lbs', '250', 'vara_de_pesca_quatro.png'),
	(5, 'Vara Pesca Praia Catarina Sumax 3,60m 100/200g 100', '125', 'vara_de_pesca_cinco.png');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
