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


-- Copiando estrutura do banco de dados para tcc3etim
CREATE DATABASE IF NOT EXISTS `tcc3etim` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `tcc3etim`;

-- Copiando estrutura para tabela tcc3etim.empresa
CREATE TABLE IF NOT EXISTS `empresa` (
  `cod_empresa` int(11) NOT NULL AUTO_INCREMENT,
  `email_empresa` varchar(100) DEFAULT NULL,
  `senha_empresa` varchar(50) DEFAULT NULL,
  `CNPJ_empresa` varchar(20) DEFAULT NULL,
  `nome_empresa` varchar(100) DEFAULT NULL,
  `proprietario_empresa` varchar(20) DEFAULT NULL,
  `area_de_atuacao_empresa` varchar(20) DEFAULT NULL,
  `telefone_empresa` varchar(20) DEFAULT NULL,
  `CEP_empresa` varchar(20) DEFAULT NULL,
  `foto_empresa` varchar(50) DEFAULT NULL,
  `cidade_empresa` varchar(20) DEFAULT NULL,
  `rua_empresa` varchar(20) DEFAULT NULL,
  `bairro_empresa` varchar(20) DEFAULT NULL,
  `numero_empresa` varchar(20) DEFAULT NULL,
  `quantidade_de_funcionario_empresa` varchar(20) DEFAULT NULL,
  `video_empresa` varchar(50) DEFAULT NULL,
  `imagem_banner_empresa` varchar(20) DEFAULT NULL,
  `data_de_criacao_empresa` varchar(20) DEFAULT NULL,
  `quantidade_de_seguidores_empresa` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cod_empresa`),
  UNIQUE KEY `CNPJ` (`CNPJ_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.empresa: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`cod_empresa`, `email_empresa`, `senha_empresa`, `CNPJ_empresa`, `nome_empresa`, `proprietario_empresa`, `area_de_atuacao_empresa`, `telefone_empresa`, `CEP_empresa`, `foto_empresa`, `cidade_empresa`, `rua_empresa`, `bairro_empresa`, `numero_empresa`, `quantidade_de_funcionario_empresa`, `video_empresa`, `imagem_banner_empresa`, `data_de_criacao_empresa`, `quantidade_de_seguidores_empresa`) VALUES
	(1, 'mihoyoaccount@gmail.com', '345', '111', 'Mihoyo', 'Dr. China', 'Games', '9999-9999', '1190000', 'mihoyo.png', 'Registro', 'Jacatirão', 'Vila_Nova', '123', '50000', 'mihoyo.mp4', 'mihoyo1.jfif', '2020-09-21', NULL),
	(2, 'ubisoft@gmail.com', '456', '212', 'Ubisoft', 'seila', 'Games', '8888-88888', '8909809', 'ubisoft.jpeg', 'Jacupiranga', 'SEila', 'issao', '3456', '1', 'ubisoft.png', 'ubsifotwe.jfif', '2019-09-08', NULL);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.follow
CREATE TABLE IF NOT EXISTS `follow` (
  `id_follow` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_empresa` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_follow`),
  UNIQUE KEY `unicos` (`id_empresa`,`id_user`),
  KEY `FK_follow_usuario` (`id_user`),
  CONSTRAINT `FK_follow_empresa` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`cod_empresa`),
  CONSTRAINT `FK_follow_usuario` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`cod_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.follow: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` (`id_follow`, `id_user`, `id_empresa`) VALUES
	(4, 1, 1),
	(5, 1, 2);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.post
CREATE TABLE IF NOT EXISTS `post` (
  `cod_post` int(11) NOT NULL AUTO_INCREMENT,
  `cod_empresa` int(11) DEFAULT NULL,
  `conteudo_post` varchar(1000) DEFAULT NULL,
  `data_post` date DEFAULT NULL,
  `hora_post` time DEFAULT NULL,
  `midia_post` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cod_post`),
  KEY `FK_posts_empresa` (`cod_empresa`),
  CONSTRAINT `FK_posts_empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.post: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`cod_post`, `cod_empresa`, `conteudo_post`, `data_post`, `hora_post`, `midia_post`) VALUES
	(5, 1, 'Personagem nova!!!', '2024-07-26', '13:07:19', 'Emily.png'),
	(6, 2, 'Qualquer coisa aí', '2024-07-26', '13:07:46', 'foto.jpeg'),
	(7, 1, 'Personagem Mualani', '2024-09-09', '11:29:36', 'Mualani.png'),
	(8, 1, 'Personagem Kachina', '2024-09-09', '11:30:06', 'Kachina.jpg'),
	(9, 1, 'Trailer promocional', '2024-09-09', '11:30:39', 'trailer.jfif'),
	(16, NULL, 'pikachu', '2024-09-20', '19:20:19', '2c9ffe3c3abbdb10ce25cd850153f812.png'),
	(17, NULL, 'pikachu', '2024-09-20', '19:21:00', '0bae57ab585616ff8dca3756a5c86ddb.png');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `cod_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email_usuario` varchar(250) DEFAULT NULL,
  `senha_usuario` varchar(250) DEFAULT NULL,
  `nome_usuario` varchar(100) DEFAULT NULL,
  `RG_usuario` varchar(100) DEFAULT NULL,
  `CPF_usuario` varchar(100) DEFAULT NULL,
  `telefone_usuario` varchar(100) DEFAULT NULL,
  `sexo_usuario` varchar(100) DEFAULT NULL,
  `foto_usuario` varchar(100) DEFAULT NULL,
  `CEP_usuario` varchar(100) DEFAULT NULL,
  `rua_usuario` varchar(100) DEFAULT NULL,
  `bairro_usuario` varchar(100) DEFAULT NULL,
  `cidade_usuario` varchar(100) DEFAULT NULL,
  `numero_usuario` varchar(100) DEFAULT NULL,
  `beneficios_usuario` varchar(100) DEFAULT NULL,
  `tipo_de_residencia_usuario` varchar(100) DEFAULT NULL,
  `tempo_de_residencia_usuario` varchar(100) DEFAULT NULL,
  `valor_de_residencia_usuario` varchar(100) DEFAULT NULL,
  `CAD_usuario` varchar(100) DEFAULT NULL,
  `deficiencia_usuario` varchar(100) DEFAULT NULL,
  `estado_civil_usuario` varchar(100) DEFAULT NULL,
  `telefone_contato_usuario` varchar(100) DEFAULT NULL,
  `ponto_referencia_usuario` varchar(200) DEFAULT NULL,
  `especifique_usuario` varchar(200) DEFAULT NULL,
  `data_nascimento_usuario` varchar(200) DEFAULT NULL,
  `telefone_recado_usuario` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cod_usuario`),
  UNIQUE KEY `unicos` (`email_usuario`,`CPF_usuario`,`RG_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.usuario: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`cod_usuario`, `email_usuario`, `senha_usuario`, `nome_usuario`, `RG_usuario`, `CPF_usuario`, `telefone_usuario`, `sexo_usuario`, `foto_usuario`, `CEP_usuario`, `rua_usuario`, `bairro_usuario`, `cidade_usuario`, `numero_usuario`, `beneficios_usuario`, `tipo_de_residencia_usuario`, `tempo_de_residencia_usuario`, `valor_de_residencia_usuario`, `CAD_usuario`, `deficiencia_usuario`, `estado_civil_usuario`, `telefone_contato_usuario`, `ponto_referencia_usuario`, `especifique_usuario`, `data_nascimento_usuario`, `telefone_recado_usuario`) VALUES
	(1, 'arthurzin@gmail.com', '1234', 'Arthur', '123', '2323', '1314321940', 'M', 'arthur.com', '119000', 'sãopaulo', 'vilanova', 'Registro', '34', 'sim', 'Aluguel', '4-9anos ', '196000', 'sim', 'nenhuma', 'diewraita', '1356776', NULL, NULL, NULL, NULL),
	(2, 'carlos@outlook.com', '231', 'Carlos', '213', '7879', '87183721', 'F', 'carlos.jpeg', '119000', 'sãopaulo', 'vilanova', 'Registro', '122', 'não', 'Casa própria', '87 anos', '349000', 'não', 'nenhuma', 'direita', '13123123', NULL, NULL, NULL, NULL),
	(3, 'kkkaiquesavioli@hotmail.com', '222', 'Kaique', '432', '6767', '564464', 'M', 'kaique.png', '11849238492', 'sçaopuali', 'jardimpaulistano', 'Registro', '567', 'sim', 'apartamento', '3bilhões de anos', '909090909090', 'não', 'serfoda', 'casadoi', '254352', NULL, NULL, NULL, NULL),
	(4, 'guiksuan@gmail.com', '111', 'Guiliherme', '111', '424423', '432423', 'F', 'huilherme.jfif', '19000', 'sim', 'sim', 'Jacupiranga', 'sim', 'não', 'aluguel', 'sim', 'sim', 'sim', 'sim', 'sim', '42424', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.vagas
CREATE TABLE IF NOT EXISTS `vagas` (
  `cod_vagas` int(11) NOT NULL AUTO_INCREMENT,
  `cod_empresa` int(11) DEFAULT NULL,
  `hora_vagas` time DEFAULT NULL,
  `data_vagas` date DEFAULT NULL,
  `sobre_vagas` varchar(2000) DEFAULT NULL,
  `carga_horaria_vagas` varchar(100) DEFAULT NULL,
  `pre_requisitos_vagas` varchar(1000) DEFAULT NULL,
  `beneficios_vagas` varchar(500) DEFAULT NULL,
  `salario_vagas` varchar(500) DEFAULT NULL,
  `tipos_vagas` varchar(500) DEFAULT NULL,
  `tempo_contrato_vagas` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`cod_vagas`),
  KEY `FK_vagas_empresa` (`cod_empresa`),
  CONSTRAINT `FK_vagas_empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.vagas: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `vagas` DISABLE KEYS */;
INSERT INTO `vagas` (`cod_vagas`, `cod_empresa`, `hora_vagas`, `data_vagas`, `sobre_vagas`, `carga_horaria_vagas`, `pre_requisitos_vagas`, `beneficios_vagas`, `salario_vagas`, `tipos_vagas`, `tempo_contrato_vagas`) VALUES
	(2, 1, '10:46:22', '2024-07-29', 'Tem que trabalhar muito em ferrar a comunidade do jogo :)', '6~8 horas', 'ser bom', 'VALE TRANSPORTE', NULL, NULL, NULL),
	(3, 2, '10:46:55', '2024-07-29', 'Quero fazer lavagem de dinheiro com funcionários fantasmas :)', '5~6 HORAS', 'ser ruim', 'tem nada', NULL, NULL, NULL);
/*!40000 ALTER TABLE `vagas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
