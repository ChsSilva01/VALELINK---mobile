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
  `Defeitos` varchar(250) NOT NULL DEFAULT '0',
  `Qualidades` varchar(250) NOT NULL DEFAULT '0',
  `Valencias` varchar(250) NOT NULL DEFAULT '0',
  `Nivel_Experiencia` varchar(250) NOT NULL DEFAULT '0',
  `qtd_candidatos` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Cod_candidatos`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.btn_candidatos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `btn_candidatos` DISABLE KEYS */;
/*!40000 ALTER TABLE `btn_candidatos` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.empresa
CREATE TABLE IF NOT EXISTS `empresa` (
  `CNPJ` int(14) NOT NULL,
  `Nome` varchar(250) NOT NULL,
  `Telefone` int(11) NOT NULL,
  `email_contato` varchar(250) NOT NULL,
  `data_de_criacao` date NOT NULL,
  `Imagem_empresa` varchar(150) NOT NULL,
  `qtd_seguidores` int(255) NOT NULL,
  `qtd_seguindo` int(255) NOT NULL,
  `video_empresa` varchar(150) NOT NULL,
  `Cidade` varchar(250) NOT NULL,
  `CEP` int(10) NOT NULL,
  `Bairro` varchar(250) NOT NULL,
  `Rua` varchar(250) NOT NULL,
  `numero` int(10) NOT NULL,
  PRIMARY KEY (`CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.empresa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `Cod_FeedBack` int(10) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(900) DEFAULT '0',
  `nivel_satisfação` int(5) DEFAULT '0',
  PRIMARY KEY (`Cod_FeedBack`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.feedback: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.filtro_pesquisa
CREATE TABLE IF NOT EXISTS `filtro_pesquisa` (
  `Cod_Filtro` int(10) NOT NULL AUTO_INCREMENT,
  `Profissões` varchar(150) NOT NULL DEFAULT '0',
  `Carga_horaria` varchar(150) NOT NULL DEFAULT '0',
  `Salario` decimal(6,2) NOT NULL DEFAULT '0.00',
  `Areas_do_conhecimento` varchar(150) NOT NULL DEFAULT '0.00',
  `Disponibilidade` varchar(150) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`Cod_Filtro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.filtro_pesquisa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `filtro_pesquisa` DISABLE KEYS */;
/*!40000 ALTER TABLE `filtro_pesquisa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.login_empresa
CREATE TABLE IF NOT EXISTS `login_empresa` (
  `cod_login` int(10) NOT NULL AUTO_INCREMENT,
  `Email` varchar(250) NOT NULL DEFAULT '0',
  `senha` varchar(250) NOT NULL DEFAULT '0',
  `CNPJ` int(14) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cod_login`),
  KEY `CNPJ` (`CNPJ`),
  CONSTRAINT `CNPJ` FOREIGN KEY (`CNPJ`) REFERENCES `empresa` (`CNPJ`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.login_empresa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `login_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.login_usuario
CREATE TABLE IF NOT EXISTS `login_usuario` (
  `cod_login` int(10) NOT NULL AUTO_INCREMENT,
  `Email` varchar(250) NOT NULL DEFAULT '0',
  `senha` varchar(250) NOT NULL DEFAULT '0',
  `CPF` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cod_login`),
  KEY `CNPJ` (`CPF`),
  CONSTRAINT `login_usuario_ibfk_1` FOREIGN KEY (`CPF`) REFERENCES `usuario` (`CPF`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Copiando dados para a tabela apptcc.login_usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `login_usuario` DISABLE KEYS */;
INSERT INTO `login_usuario` (`cod_login`, `Email`, `senha`, `CPF`) VALUES
	(1, 'Carlos', '2134', 2147483647);
/*!40000 ALTER TABLE `login_usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.pesquisa
CREATE TABLE IF NOT EXISTS `pesquisa` (
  `Cod_Pesquisa` int(10) NOT NULL AUTO_INCREMENT,
  `Filtros` varchar(250) NOT NULL DEFAULT '0',
  `Resultados` varchar(250) NOT NULL DEFAULT '0',
  `Historico` varchar(250) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Cod_Pesquisa`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.pesquisa: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pesquisa` DISABLE KEYS */;
/*!40000 ALTER TABLE `pesquisa` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.post
CREATE TABLE IF NOT EXISTS `post` (
  `Cod_Post` int(10) NOT NULL AUTO_INCREMENT,
  `Horario` time DEFAULT '00:00:00',
  `video_post` varchar(150) DEFAULT '0',
  `data_post` date DEFAULT NULL,
  `Nome_Empresa` varchar(250) DEFAULT '0',
  `Vaga` varchar(250) DEFAULT '0',
  `Imagem_post` varchar(150) DEFAULT '0',
  `carga_horaria` varchar(150) DEFAULT '0',
  `salario` decimal(6,2) DEFAULT '0.00',
  `Exigencias` varchar(250) DEFAULT '0',
  `Beneficios` varchar(250) DEFAULT '0',
  PRIMARY KEY (`Cod_Post`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.post: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Copiando estrutura para tabela apptcc.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `Nome` varchar(250) DEFAULT NULL,
  `CPF` int(11) NOT NULL,
  `Estado_Civil` varchar(50) NOT NULL,
  `Telefone_Recado` varchar(25) NOT NULL,
  `Telefone_Contato` varchar(25) NOT NULL,
  `Possui_CAD` varchar(25) NOT NULL,
  `Sexo` varchar(25) NOT NULL,
  `data_nascimento` date NOT NULL,
  `Deficiencia` varchar(50) NOT NULL,
  `Beneficios` varchar(50) NOT NULL,
  `numero_residencial` int(10) NOT NULL,
  `Rua` varchar(150) NOT NULL,
  `Bairro` varchar(150) NOT NULL,
  `Referencia_residencial` varchar(150) NOT NULL,
  `Cidade` varchar(150) NOT NULL,
  `Tipo_residencia` varchar(150) NOT NULL,
  `tempo_residencia` varchar(150) NOT NULL,
  `CEP` int(10) NOT NULL,
  PRIMARY KEY (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela apptcc.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`Nome`, `CPF`, `Estado_Civil`, `Telefone_Recado`, `Telefone_Contato`, `Possui_CAD`, `Sexo`, `data_nascimento`, `Deficiencia`, `Beneficios`, `numero_residencial`, `Rua`, `Bairro`, `Referencia_residencial`, `Cidade`, `Tipo_residencia`, `tempo_residencia`, `CEP`) VALUES
	('carlos', 2147483647, 'solteiro', '999999', '997311644', 'Não', 'M', '2024-05-06', 'Não', 'Não tem', 122, 'Jacatirão', 'Vila Nova', 'Perto de onde corta cabelo', 'Registro', 'Casa Própria', '10 anos', 119000);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
