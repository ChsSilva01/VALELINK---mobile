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

-- Copiando estrutura para tabela tcc3etim.curriculo
CREATE TABLE IF NOT EXISTS `curriculo` (
  `cod_curriculo` int(11) NOT NULL AUTO_INCREMENT,
  `cod_usuario` int(11) DEFAULT NULL,
  `objetivo_curriculo` varchar(1000) DEFAULT NULL,
  `historico_profissional_curriculo` varchar(1000) DEFAULT NULL,
  `formacao_academica_curriculo` varchar(1000) DEFAULT NULL,
  `habilidade_e_competencias_curriculo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_curriculo`),
  KEY `FK_curriculo_usuario` (`cod_usuario`),
  CONSTRAINT `FK_curriculo_usuario` FOREIGN KEY (`cod_usuario`) REFERENCES `usuario` (`cod_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.curriculo: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `curriculo` DISABLE KEYS */;
INSERT INTO `curriculo` (`cod_curriculo`, `cod_usuario`, `objetivo_curriculo`, `historico_profissional_curriculo`, `formacao_academica_curriculo`, `habilidade_e_competencias_curriculo`) VALUES
	(1, 5, 'Atuar como Desenvolvedora Frontend, utilizando tecnologias modernas para criar interfaces amigáveis e funcionais que melhorem a experiência do usuário.', 'Desenvolvedora Frontend na WebMasters Inc. (2021-2024): \n - Desenvolveu e manteve interfaces web responsivas utilizando React e CSS3 \n - Colaborou com equipes de backend para integrar APIs RESTful \n - Otimizou a performance de aplicações para melhorar o tempo de carregamento em 30%\n\nEstagiária de Desenvolvimento Frontend na TechNow Solutions (2020-2021): \n - Contribuiu no desenvolvimento de interfaces interativas e dinâmicas para plataformas de e-commerce.', 'Graduação em Sistemas de Informação - Universidade de São Paulo (USP), 2017-2021.', 'Domínio de React, React Native, HTML5, CSS3 e JavaScript, \nExperiência com controle de versão (Git/G'),
	(2, 6, 'Atuar como Engenheiro Elétrico, aplicando conhecimentos em energias renováveis para desenvolver e implementar soluções sustentáveis, com foco em energia solar e eólica.', 'Engenheiro Elétrico Júnior na SolarTech Ltda (2021-2024): \n - Participou de projetos de instalação de sistemas fotovoltaicos \n - Realizou manutenções preventivas e corretivas em sistemas de energia solar \n - Contribuiu com estudos de viabilidade técnica para novos projetos de energia renovável\n\nEstagiário de Engenharia Elétrica na EletroBrasil (2020-2021): \n - Auxiliou na execução de projetos de eficiência energética em edificações industriais.', 'Graduação em Engenharia Elétrica - Universidade Federal do Rio de Janeiro (UFRJ), 2017-2021.', 'Conhecimento em energias renováveis (solar e eólica), \nProeficiência em AutoCAD, MATLAB e ferramenta');
/*!40000 ALTER TABLE `curriculo` ENABLE KEYS */;

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
  `descricao_da_empresa` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`cod_empresa`),
  UNIQUE KEY `CNPJ` (`CNPJ_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.empresa: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`cod_empresa`, `email_empresa`, `senha_empresa`, `CNPJ_empresa`, `nome_empresa`, `proprietario_empresa`, `area_de_atuacao_empresa`, `telefone_empresa`, `CEP_empresa`, `foto_empresa`, `cidade_empresa`, `rua_empresa`, `bairro_empresa`, `numero_empresa`, `quantidade_de_funcionario_empresa`, `video_empresa`, `imagem_banner_empresa`, `data_de_criacao_empresa`, `quantidade_de_seguidores_empresa`, `descricao_da_empresa`) VALUES
	(3, 'contato@techsolutions.com', 'senha123', '12.345.678/0001-99', 'Tech Solutions', 'João Silva', 'Desenvolvimento de S', '(11) 98765-4321', '01001-000', 'logo_techsolutions.png', 'São Paulo', 'Rua da Tecnologia', 'Centro', '123', '50', 'video_techsolutions.mp4', 'banner_techsolutions', '2024-09-30', '1000', 'A Tech Solutions é especializada em desenvolvimento de software personalizado, oferecendo soluções inovadoras para pequenas e grandes empresas.'),
	(4, 'contato@greenenergy.com', 'energia2024', '98.765.432/0001-01', 'Green Energy Solutions', 'Maria Oliveira', 'Energia Renovável', '(21) 99876-5432', '20221-000', 'logo_greenenergy.png', 'Rio de Janeiro', 'Avenida Sustentável', 'Zona Oeste', '456', '200', 'video_greenenergy.mp4', 'banner_greenenergy.p', '2023-06-15', '15000', 'A Green Energy Solutions é uma empresa líder em energia renovável, oferecendo soluções sustentáveis para reduzir o impacto ambiental em todo o Brasil.');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.envio_curriculo
CREATE TABLE IF NOT EXISTS `envio_curriculo` (
  `cod_envio_curriculo` int(11) NOT NULL AUTO_INCREMENT,
  `cod_usuario` int(11) NOT NULL,
  `cod_curriculo` int(11) DEFAULT NULL,
  `cod_empresa` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_envio_curriculo`),
  KEY `FK__usuario` (`cod_usuario`),
  KEY `FK_envio_curriculo_empresa` (`cod_empresa`),
  KEY `FK_envio_curriculo_curriculo` (`cod_curriculo`),
  CONSTRAINT `FK__usuario` FOREIGN KEY (`cod_usuario`) REFERENCES `usuario` (`cod_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_envio_curriculo_curriculo` FOREIGN KEY (`cod_curriculo`) REFERENCES `curriculo` (`cod_curriculo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_envio_curriculo_empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.envio_curriculo: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `envio_curriculo` DISABLE KEYS */;
INSERT INTO `envio_curriculo` (`cod_envio_curriculo`, `cod_usuario`, `cod_curriculo`, `cod_empresa`) VALUES
	(1, 5, 1, 3),
	(2, 6, 2, 4),
	(3, 5, 1, 3),
	(4, 6, 2, 4),
	(5, 5, 1, 4);
/*!40000 ALTER TABLE `envio_curriculo` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.notificacoes
CREATE TABLE IF NOT EXISTS `notificacoes` (
  `cod_notificacoes` int(11) NOT NULL AUTO_INCREMENT,
  `cod_empresa` int(11) DEFAULT NULL,
  `cod_usuario` int(11) DEFAULT NULL,
  `status_notificacoes` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cod_notificacoes`),
  KEY `FK__empresa` (`cod_empresa`),
  KEY `FK_notificacoes_usuario` (`cod_usuario`),
  CONSTRAINT `FK__empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_notificacoes_usuario` FOREIGN KEY (`cod_usuario`) REFERENCES `usuario` (`cod_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.notificacoes: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `notificacoes` DISABLE KEYS */;
INSERT INTO `notificacoes` (`cod_notificacoes`, `cod_empresa`, `cod_usuario`, `status_notificacoes`) VALUES
	(1, 3, 5, 'Em Espera'),
	(2, 4, 6, 'Em Espera'),
	(3, 3, 5, 'Negado'),
	(4, 4, 6, 'Em Espera');
/*!40000 ALTER TABLE `notificacoes` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.post: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`cod_post`, `cod_empresa`, `conteudo_post`, `data_post`, `hora_post`, `midia_post`) VALUES
	(25, 3, 'Estamos com vagas abertas para desenvolvedores de software! Procuramos profissionais com experiência em React Native, Node.js e bancos de dados SQL. Oferecemos um ambiente de trabalho inovador e a possibilidade de trabalho remoto. Venha fazer parte da nossa equipe!', '2024-09-30', '14:30:00', ''),
	(26, 3, 'A Tech Solutions está ampliando sua equipe! Estamos em busca de gerentes de projetos com experiência em metodologias ágeis (Scrum e Kanban) para liderar nossos novos projetos de desenvolvimento de software. Envie seu currículo e faça parte do nosso time!', '2024-10-02', '09:00:00', 'gerente_projetos_vaga.png'),
	(27, 4, 'A Green Energy Solutions está contratando! Procuramos engenheiros elétricos com especialização em energias renováveis. Faça parte de uma empresa inovadora no setor e ajude a construir um futuro sustentável. Envie seu currículo agora mesmo!', '2024-09-28', '11:15:00', 'engenheiro_eletrico_vaga.png'),
	(28, 4, 'Vagas abertas para técnicos de manutenção! A Green Energy Solutions está em busca de profissionais especializados em manutenção de equipamentos fotovoltaicos e outras tecnologias de energia renovável. Candidate-se agora e contribua para a expansão da energia sustentável!', '2024-10-01', '13:45:00', 'tecnico_manutencao_vaga.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.usuario: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`cod_usuario`, `email_usuario`, `senha_usuario`, `nome_usuario`, `RG_usuario`, `CPF_usuario`, `telefone_usuario`, `sexo_usuario`, `foto_usuario`, `CEP_usuario`, `rua_usuario`, `bairro_usuario`, `cidade_usuario`, `numero_usuario`, `beneficios_usuario`, `tipo_de_residencia_usuario`, `tempo_de_residencia_usuario`, `valor_de_residencia_usuario`, `CAD_usuario`, `deficiencia_usuario`, `estado_civil_usuario`, `telefone_contato_usuario`, `ponto_referencia_usuario`, `especifique_usuario`, `data_nascimento_usuario`, `telefone_recado_usuario`) VALUES
	(5, 'maria.silva@gmail.com', 'senha123', 'Maria Silva', '12.345.678-9', '123.456.789-10', '(11) 91234-5678', 'Feminino', 'foto_maria.png', '01001-000', 'Rua das Flores', 'Centro', 'São Paulo', '123', 'Nenhum', 'Apartamento', '5 anos', '250000', '123456', 'Nenhuma', 'Solteira', '(11) 98765-4321', 'Próximo à padaria', 'Sem especificação', '1990-03-15', '(11) 91234-5679'),
	(6, 'joao.santos@hotmail.com', 'senha456', 'João Santos', '98.765.432-1', '987.654.321-00', '(21) 92345-6789', 'Masculino', 'foto_joao.png', '20221-000', 'Avenida Central', 'Zona Sul', 'Rio de Janeiro', '456', 'Bolsa Família', 'Casa', '10 anos', '300000', '654321', 'Auditiva', 'Casado', '(21) 99876-5432', 'Próximo ao supermercado', 'Necessita de rampa de acesso', '1985-07-22', '(21) 92345-6788');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc3etim.vagas
CREATE TABLE IF NOT EXISTS `vagas` (
  `cod_vagas` int(11) NOT NULL AUTO_INCREMENT,
  `cod_empresa` int(11) DEFAULT NULL,
  `area_vagas` varchar(250) DEFAULT NULL,
  `hora_vagas` time DEFAULT NULL,
  `data_vagas` date DEFAULT NULL,
  `sobre_vagas` varchar(2000) DEFAULT NULL,
  `carga_horaria_vagas` varchar(100) DEFAULT NULL,
  `pre_requisitos_vagas` varchar(1000) DEFAULT NULL,
  `beneficios_vagas` varchar(500) DEFAULT NULL,
  `salario_vagas` varchar(500) DEFAULT NULL,
  `tipos_vagas` varchar(500) DEFAULT NULL,
  `tempo_contrato_vagas` varchar(500) DEFAULT NULL,
  `foto_vagas` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`cod_vagas`),
  KEY `FK_vagas_empresa` (`cod_empresa`),
  CONSTRAINT `FK_vagas_empresa` FOREIGN KEY (`cod_empresa`) REFERENCES `empresa` (`cod_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela tcc3etim.vagas: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `vagas` DISABLE KEYS */;
INSERT INTO `vagas` (`cod_vagas`, `cod_empresa`, `area_vagas`, `hora_vagas`, `data_vagas`, `sobre_vagas`, `carga_horaria_vagas`, `pre_requisitos_vagas`, `beneficios_vagas`, `salario_vagas`, `tipos_vagas`, `tempo_contrato_vagas`, `foto_vagas`) VALUES
	(4, 3, 'Desenvolvimento de Software', '09:00:00', '2024-10-01', 'Vaga para Desenvolvedor Frontend na Tech Solutions. O profissional será responsável por criar interfaces responsivas e modernas para aplicações web e mobile, utilizando React e React Native. Trabalho em equipe e conhecimento em metodologias ágeis são diferenciais.', '40 horas semanais', 'Experiência com React e React Native, CSS, HTML e JavaScript', 'Vale-transporte, Vale-alimentação, Plano de saúde', 'R$ 5.000,00 - R$ 7.000,00', 'Tempo integral', 'Contrato Indeterminado', 'desenvolvimento_de_software.png'),
	(5, 3, 'Gestão de Projetos', '10:30:00', '2024-10-02', 'Vaga para Gerente de Projetos. O profissional será responsável por gerenciar times de desenvolvimento, aplicando metodologias ágeis (Scrum e Kanban) e garantindo o cumprimento dos prazos e a qualidade dos produtos entregues.', '40 horas semanais', 'Experiência em liderança de projetos, certificação Scrum Master, boa comunicação', 'Plano de saúde, Participação nos lucros, Vale-alimentação', 'R$ 8.000,00 - R$ 10.000,00', 'Tempo integral', 'Contrato Indeterminado', 'gestao_de_projetos.png'),
	(6, 4, 'Engenharia Elétrica', '08:00:00', '2024-09-30', 'Vaga para Engenheiro Elétrico na Green Energy Solutions. O profissional irá atuar em projetos de geração de energia solar e eólica, realizando estudos de viabilidade técnica e financeira, além de acompanhar a instalação dos equipamentos.', '40 horas semanais', 'Graduação em Engenharia Elétrica, Conhecimento em energias renováveis', 'Vale-transporte, Plano de saúde, Participação nos lucros', 'R$ 10.000,00 - R$ 12.000,00', 'Tempo integral', 'Contrato Indeterminado', 'engenharia_eletrica.png'),
	(7, 4, 'Manutenção', '14:00:00', '2024-10-01', 'Vaga para Técnico de Manutenção de Equipamentos Fotovoltaicos. O profissional será responsável pela manutenção preventiva e corretiva de painéis solares, garantindo o pleno funcionamento e a segurança dos sistemas instalados.', '44 horas semanais', 'Curso técnico em elétrica ou eletrônica, Experiência com sistemas fotovoltaicos', 'Vale-transporte, Seguro de vida, Plano de saúde', 'R$ 4.000,00 - R$ 6.000,00', 'Tempo integral', 'Contrato Indeterminado', 'manutencao.png'),
	(8, 4, 'Controle de Qualidade', '13:00:00', '2024-09-29', 'Vaga para Analista de Qualidade de Software. O profissional será responsável por garantir a qualidade dos produtos desenvolvidos, realizando testes manuais e automatizados, identificando bugs e sugerindo melhorias.', '40 horas semanais', 'Experiência com testes automatizados, Ferramentas de QA como Selenium e JUnit', 'Vale-alimentação, Vale-refeição, Plano de saúde', 'R$ 5.500,00 - R$ 7.500,00', 'Tempo integral', 'Contrato Indeterminado', 'controle_de_qualidade.png');
/*!40000 ALTER TABLE `vagas` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
