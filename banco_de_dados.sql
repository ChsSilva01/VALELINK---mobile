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


-- Copiando estrutura do banco de dados para apptcc
CREATE DATABASE IF NOT EXISTS `apptcc` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `apptcc`;

-- Copiando estrutura para tabela apptcc.empresa
CREATE TABLE IF NOT EXISTS `empresa` (
  `quantidade_de_funcionarios` int(100) DEFAULT NULL,
  `nome_empresa` varchar(250) DEFAULT NULL,
  `CNPJ` int(11) DEFAULT NULL,
  `CEP` int(11) DEFAULT NULL,
  `cidade` varchar(250) DEFAULT NULL,
  `rua` varchar(250) DEFAULT NULL,
  `bairro` varchar(250) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `data_de_criacao` date DEFAULT NULL,
  `area_de_atuacao` varchar(50) DEFAULT NULL,
  `proprietario` varchar(250) DEFAULT NULL,
  `foto_empresa` varchar(50) DEFAULT NULL,
  `video_empresa` varchar(50) DEFAULT NULL,
  `imagem_banner` varchar(50) DEFAULT NULL,
  `cod_empresa` int(11) NOT NULL AUTO_INCREMENT,
  `email_empresa` varchar(50) DEFAULT NULL,
  `telefone_empresa` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cod_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela apptcc.empresa: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`quantidade_de_funcionarios`, `nome_empresa`, `CNPJ`, `CEP`, `cidade`, `rua`, `bairro`, `numero`, `data_de_criacao`, `area_de_atuacao`, `proprietario`, `foto_empresa`, `video_empresa`, `imagem_banner`, `cod_empresa`, `email_empresa`, `telefone_empresa`) VALUES
	(250, 'Etec', 11111, 1190000, 'registro', 'jacatirão', 'villa tupy', 296, '2024-07-26', 'educação', 'Paula Souza', 'post_etec.png', 'etec.mp4', 'etec_banner.png', 1, 'etec@gmail.com', '190'),
	(1270, 'Coca Cola', 222222, 190, 'Registro', 'pipoca', 'vila Nova', 10, '2024-07-29', 'produção', 'Arthur Albino', 'bonitão.jpg', 'coca.mp4', 'coca_banner.png', 2, 'coca@gmail.com', '188');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.post
CREATE TABLE IF NOT EXISTS `post` (
  `imagem` varchar(300) DEFAULT NULL,
  `comentario` varchar(250) DEFAULT NULL,
  `carregar` varchar(50) DEFAULT NULL,
  `data_do_post` varchar(50) DEFAULT NULL,
  `hora_do_post` varchar(50) DEFAULT NULL,
  `cod_post` int(11) NOT NULL AUTO_INCREMENT,
  `cod_empresa` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`cod_post`),
  KEY `FK_post_empresa` (`cod_empresa`),
  CONSTRAINT `FK_post_empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela apptcc.post: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`imagem`, `comentario`, `carregar`, `data_do_post`, `hora_do_post`, `cod_post`, `cod_empresa`) VALUES
	('0a77d8bb-45fe-4853-8776-690d5afba616.jpeg', 'venha para etec', 'a', '26/07/2024', '09:01', 2, 1),
	('bonitão.jpg', 'contratando para auxiliar de pipoqueiro', 'b', '26/09/2024', '11:06', 3, 2);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `cod_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `CPF` int(11) DEFAULT NULL,
  `deficiencia` varchar(50) DEFAULT NULL,
  `estado_civil` varchar(50) DEFAULT NULL,
  `email_usuario` varchar(50) DEFAULT NULL,
  `nome_usuario` varchar(250) DEFAULT NULL,
  `RG` int(11) DEFAULT NULL,
  `CEP` int(11) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `rua` varchar(50) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `tempo_de_residencia` time DEFAULT NULL,
  `valor_de_residencia` int(11) DEFAULT NULL,
  `tipo_de_residencia` varchar(50) DEFAULT NULL,
  `ponto_de_referencia` varchar(50) DEFAULT NULL,
  `beneficios` varchar(50) DEFAULT NULL,
  `foto_usuario` longtext DEFAULT NULL,
  `CAD` int(11) DEFAULT NULL,
  `telefone_usuario` int(13) DEFAULT NULL,
  `data_de_nascimento` date DEFAULT NULL,
  `sexo` varchar(50) DEFAULT NULL,
  `senha` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela apptcc.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`cod_usuario`, `CPF`, `deficiencia`, `estado_civil`, `email_usuario`, `nome_usuario`, `RG`, `CEP`, `cidade`, `rua`, `bairro`, `numero`, `tempo_de_residencia`, `valor_de_residencia`, `tipo_de_residencia`, `ponto_de_referencia`, `beneficios`, `foto_usuario`, `CAD`, `telefone_usuario`, `data_de_nascimento`, `sexo`, `senha`) VALUES
	(1, 567394, 'sim', 'solteiro', 'carlos@gmail.com', 'Carlos', 190, 190, 'Registro', 'jacatirao', 'Vila Nova', 122, '09:06:39', 100000, 'propria', 'perto do cabelereiro do neguinho', 'bolsa', 'http://10.68.36.105/apiVALELINK/imagem/bonit%c3%a3o.jpg', 190, 190, '2024-07-26', 'M', 2134);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.vagas
CREATE TABLE IF NOT EXISTS `vagas` (
  `cod_vagas` int(11) NOT NULL AUTO_INCREMENT,
  `regalias` varchar(50) DEFAULT NULL,
  `pre_requisitos` varchar(50) DEFAULT NULL,
  `sobre` varchar(50) DEFAULT NULL,
  `data_postado` varchar(50) DEFAULT NULL,
  `carga_horaria` varchar(50) DEFAULT NULL,
  `horario_postado` varchar(50) DEFAULT NULL,
  `cod_empresa` int(11) NOT NULL DEFAULT 0,
  `tempo_de_contrato` varchar(250) DEFAULT NULL,
  `salario` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_vagas`),
  KEY `FK_vagas_empresa` (`cod_empresa`),
  CONSTRAINT `FK_vagas_empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela apptcc.vagas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `vagas` DISABLE KEYS */;
INSERT INTO `vagas` (`cod_vagas`, `regalias`, `pre_requisitos`, `sobre`, `data_postado`, `carga_horaria`, `horario_postado`, `cod_empresa`, `tempo_de_contrato`, `salario`) VALUES
	(1, 'um pão', 'ser bom', 'dificil', '26/07/2024', '20h', '00:00', 1, '2 Anos', 1000);
/*!40000 ALTER TABLE `vagas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
