DROP DATABASE IF EXISTS libertadores;
CREATE DATABASE IF NOT EXISTS libertadores;

USE libertadores;

DROP TABLE IF EXISTS tentativa;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS quiz;

DROP TABLE IF EXISTS jogadorArtilheiro;
DROP TABLE IF EXISTS timeCampeao;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL,
    genero CHAR(1) NOT NULL,
    CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
    CONSTRAINT chkGenero CHECK (genero IN('m', 'f', 'n'))
);

CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    apelido VARCHAR(45) NOT NULL,
    qtdPerguntas INT NOT NULL,
    qtdAlternativas INT NOT NULL
);

CREATE TABLE tentativa (
    id INT NOT NULL,
    fkUsuario INT NOT NULL,
    fkQuiz INT NOT NULL,
    acertos INT NOT NULL,
    erros INT NOT NULL,
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    CONSTRAINT fkQuiz FOREIGN KEY (fkQuiz) REFERENCES quiz(id),
    CONSTRAINT pkIdUsuarioQuiz PRIMARY KEY (id, fkUsuario, fkQuiz)
);

CREATE TABLE timeCampeao (
    nome VARCHAR(255) PRIMARY KEY NOT NULL,
    pais VARCHAR(45) NOT NULL,
    estadio VARCHAR(45) NOT NULL,
    dtFundacao VARCHAR(45) NOT NULL,
    qtdTitulos INT NOT NULL
);

CREATE TABLE jogadorArtilheiro (
    id INT AUTO_INCREMENT,
    fkTime VARCHAR(255) NOT NULL,
    nome VARCHAR(45) NOT NULL,
    gols INT NOT NULL,
    CONSTRAINT fkTime FOREIGN KEY (fkTime) REFERENCES timeCampeao(nome),
    CONSTRAINT pkIdFkTime PRIMARY KEY (id, fkTime)
);

INSERT INTO timeCampeao VALUES
    ('Independiente', 'Argentina', 'Estádio Libertadores da América', '1 de Janeiro de 1905', 7),
    ('Boca Juniors', 'Argentina', 'La bombonera', '3 de Abril de 1905', 6),
    ('Peñarol', 'Uruguai', 'Campeón del Siglo', '28 de Setembro de 1891', 5),
    ('River Plate', 'Argentina', 'Mâs Monumental', '25 de Maio de 1901', 4),
    ('Estudiantes', 'Argentina', 'Jorge Luis Hirschi', '4 de Agosto de 1905', 4),
    ('Nacional', 'Uruguai', 'Gran Parque Central', '14 de Março de 1899', 3),
    ('Olimpia', 'Paraguai', 'Estádio Manuel Ferreira', '25 de Julho de 1902', 3),
    ('São Paulo', 'Brasil', 'Morumbi', '25 de Janeiro de 1930', 3),
    ('Santos', 'Brasil', 'Vila Belmiro', '14 de Abril de 1912', 3),
    ('Grêmio', 'Brasil', 'Arena do Grêmio', '15 de Setembro de 1903', 3),
    ('Palmeiras', 'Brasil', 'Allianz Parque', '26 de Agosto de 1914', 3),
    ('Flamengo', 'Brasil', 'Maracanã', '15 de Novembro de 1895', 3),
    ('Cruzeiro', 'Brasil', 'Mineirão', '2 de Janeiro de 1921', 2),
    ('Internacional', 'Brasil', 'Estádio Beira-Rio', '4 de Abril de 1909', 2),
    ('Atlético Nacional', 'Colômbia', 'Atanasio Girardot', '30 de Abril de 1947', 2),
    ('Racing', 'Argentina', 'Estádio Presidente Perón', '25 de Março de 1903', 1),
    ('Argentinos Juniors', 'Argentina', 'Estádio Diego Armando Maradona', '15 de Agosto de 1904', 1),
    ('Colo-Colo', 'Chile', 'Monumental David Arellano', '19 de Abril de 1925', 1),
    ('Velez Sarsfield', 'Argentina', 'Estádio José Amalfitani', '1 de Janeiro de 1910', 1),
    ('Vasco da Gama', 'Brasil', 'Estádio São Januário', '21 de Agosto de 1898', 1),
    ('Once Caldas', 'Colômbia', 'Estádio Palogrande', '15 de Janeiro de 1961', 1),
    ('LDU', 'Equador', 'Estádio Rodrigo Paz Delgado', '23 de Outubro de 1918', 1),
    ('Corinthians', 'Brasil', 'Neo Química Arena', '1 de Setembro de 1910', 1),
    ('Atlético Mineiro', 'Brasil', 'Mineirão', '25 de Março de 1908', 1),
    ('San Lorenzo', 'Argentina', 'Estádio Pedro Bidegain', '1 de Abril de 1908', 1);