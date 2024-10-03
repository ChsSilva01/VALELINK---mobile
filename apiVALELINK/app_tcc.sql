-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.33-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para apptcc
CREATE DATABASE IF NOT EXISTS `apptcc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `apptcc`;

-- Copiando estrutura para tabela apptcc.btn_candidatos
CREATE TABLE IF NOT EXISTS `btn_candidatos` (
  `Cod_candidatos` int(10) NOT NULL AUTO_INCREMENT,
  `Valencias` varchar(250) NOT NULL DEFAULT '0',
  `Nivel_Experiencia` varchar(250) NOT NULL DEFAULT '0',
  `qtd_candidatos` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Cod_candidatos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.btn_candidatos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `btn_candidatos` DISABLE KEYS */;
/*!40000 ALTER TABLE `btn_candidatos` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.empresa
CREATE TABLE IF NOT EXISTS `empresa` (
  `CNPJ` varchar(50) NOT NULL,
  `Nome` varchar(250) NOT NULL,
  `logo_empresa` varchar(250) NOT NULL,
  `Estado` int(2) NOT NULL,
  `Telefone` varchar(50) NOT NULL,
  `email_contato` varchar(250) NOT NULL,
  `pais` varchar(250) NOT NULL,
  `data_de_criacao` date NOT NULL,
  `Imagem_empresa` varchar(150) NOT NULL,
  `video_empresa` varchar(150) NOT NULL,
  `Cidade` varchar(250) NOT NULL,
  `CEP` varchar(50) NOT NULL,
  `Bairro` varchar(250) NOT NULL,
  `Rua` varchar(250) NOT NULL,
  `numero` varchar(50) NOT NULL,
  PRIMARY KEY (`CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.empresa: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`CNPJ`, `Nome`, `logo_empresa`, `Estado`, `Telefone`, `email_contato`, `pais`, `data_de_criacao`, `Imagem_empresa`, `video_empresa`, `Cidade`, `CEP`, `Bairro`, `Rua`, `numero`) VALUES
	('11111', 'Coca_cola', '', 10, '13 44444-4444', 'coca_cola123@gmail.com', 'Brasil', '1950-05-17', '', '', 'Regsitro', '1190000', 'Distrito Industrial', 'Silva', '234'),
	('22222', 'Pepsi', '', 5, '65 87595-6759', 'pepsi@gmail.com', 'Brasil', '1950-05-17', '', '', 'Pariquera', '24242424', 'Ipanema', 'VUI', '567'),
	('33333', 'Sprite', '', 27, '42 48334-2424', 'Sprite@gmail.com', 'Brasil', '0000-00-00', '', '', 'Cajati', '4241240000', 'Formula1', 'CarrosInsanos', '32');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `Cod_FeedBack` int(10) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(900) DEFAULT '0',
  `nivel_satisfação` int(1) DEFAULT '0',
  PRIMARY KEY (`Cod_FeedBack`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.feedback: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` (`Cod_FeedBack`, `comentario`, `nivel_satisfação`) VALUES
	(1, 'Achei muito legal esse aplicativo, a garotada que fez isso tá de parabéns', 5),
	(2, 'Legalzinho, apesar de parecer uma cópia do Linkedin achie fera o fato de que foram uns moleques da ETEC que fizeram isso', 3),
	(3, 'Paia, feio e inútil, não gostei', 1);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.filtro_pesquisa
CREATE TABLE IF NOT EXISTS `filtro_pesquisa` (
  `Cod_Filtro` int(10) NOT NULL AUTO_INCREMENT,
  `Profissões` int(11) NOT NULL,
  `Carga_horaria` int(11) NOT NULL,
  `Expectativa_salarial` int(11) NOT NULL,
  PRIMARY KEY (`Cod_Filtro`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.filtro_pesquisa: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `filtro_pesquisa` DISABLE KEYS */;
INSERT INTO `filtro_pesquisa` (`Cod_Filtro`, `Profissões`, `Carga_horaria`, `Expectativa_salarial`) VALUES
	(1, 1, 4, 4),
	(2, 2, 1, 2),
	(3, 27, 1, 1);
/*!40000 ALTER TABLE `filtro_pesquisa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.login_empresa
CREATE TABLE IF NOT EXISTS `login_empresa` (
  `cod_login` int(10) NOT NULL AUTO_INCREMENT,
  `senha` varchar(250) NOT NULL DEFAULT '0',
  `CNPJ` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cod_login`),
  KEY `CNPJ` (`CNPJ`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Copiando dados para a tabela apptcc.login_empresa: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `login_empresa` DISABLE KEYS */;
INSERT INTO `login_empresa` (`cod_login`, `senha`, `CNPJ`) VALUES
	(5, '909', '11111'),
	(6, '890', '22222'),
	(7, '423', '33333');
/*!40000 ALTER TABLE `login_empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.login_usuario
CREATE TABLE IF NOT EXISTS `login_usuario` (
  `cod_login` int(10) NOT NULL AUTO_INCREMENT,
  `senha` varchar(250) NOT NULL DEFAULT '0',
  `CPF` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cod_login`),
  KEY `CPF` (`CPF`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.login_usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `login_usuario` DISABLE KEYS */;
INSERT INTO `login_usuario` (`cod_login`, `senha`, `CPF`) VALUES
	(4, '1243', '123.234.345-76'),
	(5, '345', '345.567.789-90'),
	(6, '111', '678.876.456-42');
/*!40000 ALTER TABLE `login_usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.pesquisa
CREATE TABLE IF NOT EXISTS `pesquisa` (
  `Cod_Pesquisa` int(10) NOT NULL AUTO_INCREMENT,
  `Filtros` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Cod_Pesquisa`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.pesquisa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pesquisa` DISABLE KEYS */;
/*!40000 ALTER TABLE `pesquisa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `Cod_Post` int(10) NOT NULL AUTO_INCREMENT,
  `video_imagem_post` blob,
  `Horario` time DEFAULT '00:00:00',
  `CNPJ` varchar(15) DEFAULT NULL,
  `data_post` date DEFAULT NULL,
  `Descrição` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Cod_Post`),
  KEY `CNPJ` (`CNPJ`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Copiando dados para a tabela apptcc.posts: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`Cod_Post`, `video_imagem_post`, `Horario`, `CNPJ`, `data_post`, `Descrição`) VALUES
	(2, NULL, '10:50:30', '33333', '2024-05-17', 'Hoje eu e meus manos trabalhamos no TCC, foi muito maneiro, porém o professor Ramon passou mais atividade e agora eu estou maluquitos');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.seguidores
CREATE TABLE IF NOT EXISTS `seguidores` (
  `id_seguidores` int(11) DEFAULT NULL,
  `NULO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.seguidores: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `seguidores` DISABLE KEYS */;
INSERT INTO `seguidores` (`id_seguidores`, `NULO`) VALUES
	(2, 7);
/*!40000 ALTER TABLE `seguidores` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `CPF` varchar(15) NOT NULL,
  `Nome` varchar(250) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `data_nascimento` date NOT NULL,
  `Telefone_Contato` varchar(25) NOT NULL,
  `Telefone_Recado` varchar(25) NOT NULL,
  `Sexo` int(1) NOT NULL,
  `Estado_Civil` varchar(50) NOT NULL,
  `foto` varchar(300) DEFAULT NULL,
  `Possui_CAD` int(1) NOT NULL,
  `Deficiencia` int(1) NOT NULL,
  `Beneficios` varchar(250) NOT NULL,
  `CEP` varchar(50) NOT NULL,
  `Cidade` varchar(150) NOT NULL,
  `Bairro` varchar(150) NOT NULL,
  `Rua` varchar(150) NOT NULL,
  `numero_residencial` int(10) NOT NULL,
  `Referencia_residencial` varchar(250) NOT NULL,
  `Tipo_residencia` int(1) NOT NULL,
  `tempo_residencia` varchar(150) NOT NULL,
  PRIMARY KEY (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`CPF`, `Nome`, `Email`, `data_nascimento`, `Telefone_Contato`, `Telefone_Recado`, `Sexo`, `Estado_Civil`, `foto`, `Possui_CAD`, `Deficiencia`, `Beneficios`, `CEP`, `Cidade`, `Bairro`, `Rua`, `numero_residencial`, `Referencia_residencial`, `Tipo_residencia`, `tempo_residencia`) VALUES
	('123.234.345-76', 'Carlos H. dos Santos Silva', 'CArlos@hotmail.com', '1994-08-27', '15 88888-8888', '15 90909-9090', 0, 'Casado', NULL, 1, 3, 'Deus ', '780000', 'Velha York', 'Vila Maneira', 'Atumalaka', 890, 'Casa Branca', 2, '43 anos'),
	('345.567.789-90', 'Kaique Guilherme Bittencourt Saviolli', 'Kagui@outlook.com', '2000-11-09', '13 89898-8989', '24 87878-8787', 1, 'Divorciado', NULL, 0, 5, 'Nenhum', '560000', 'Japão', 'Vila contemporanea', 'Jacatirão', 6, 'Torres Gêmeas', 5, '89'),
	('678.876.456-42', 'Arthur A. Teles de Souza', 'Arthur@gmail.com', '2004-05-17', '13 99999-9999', '13 99999-9999', 0, 'Solteiro', NULL, 0, 0, 'Nenhum', '1190000', 'Registro', 'Vila Nova', 'Beija-flor', 1224, 'Posto de Saúde', 0, '17 anos');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.vagas
CREATE TABLE IF NOT EXISTS `vagas` (
  `Cod_vagas` int(10) NOT NULL AUTO_INCREMENT,
  `CNPJ` varchar(15) NOT NULL,
  `Cod_filtro` int(11) NOT NULL,
  `Profissões` int(11) NOT NULL,
  `Imagem_video_post` blob,
  `carga_horaria` int(11) DEFAULT NULL,
  `Horario` time DEFAULT '00:00:00',
  `data_post` date DEFAULT NULL,
  `País` int(2) DEFAULT NULL,
  `salario` int(11) DEFAULT NULL,
  `Descrição` varchar(250) DEFAULT NULL,
  `Exigencias` varchar(500) DEFAULT NULL,
  `Beneficios` varchar(250) DEFAULT NULL,
  `filtros` int(11) DEFAULT NULL,
  PRIMARY KEY (`Cod_vagas`),
  KEY `CNPJ` (`CNPJ`),
  KEY `cod_filtros` (`Cod_filtro`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.vagas: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `vagas` DISABLE KEYS */;
INSERT INTO `vagas` (`Cod_vagas`, `CNPJ`, `Cod_filtro`, `Profissões`, `Imagem_video_post`, `carga_horaria`, `Horario`, `data_post`, `País`, `salario`, `Descrição`, `Exigencias`, `Beneficios`, `filtros`) VALUES
	(2, '11111', 1, 1, NULL, 4, '11:42:09', '2024-05-17', 0, 0, 'Trabalha bem', 'Tem que ser bom', 'Vai recber um salário', 1);
/*!40000 ALTER TABLE `vagas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
