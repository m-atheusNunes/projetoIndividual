DROP DATABASE IF EXISTS libertadores;
CREATE DATABASE IF NOT EXISTS libertadores;

USE libertadores;

DROP TABLE IF EXISTS tentativa;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS jogo;

DROP TABLE IF EXISTS jogadorArtilheiro;
DROP TABLE IF EXISTS timeCampeao;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(20) NOT NULL,
    CONSTRAINT chkEmail CHECK (email LIKE '%@%')
);

CREATE TABLE jogo (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    pontuacao INT NOT NULL
);

CREATE TABLE tentativa (
    fkUsuario INT NOT NULL,
    fkJogo INT NOT NULL,
    id INT NOT NULL,
    movUsados INT NOT NULL,
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    CONSTRAINT fkJogo FOREIGN KEY (fkJogo) REFERENCES jogo(id),
    CONSTRAINT pkUsuarioJogoId PRIMARY KEY (fkUsuario, fkJogo, id)
);

CREATE TABLE timeCampeao (
    nome VARCHAR(255) PRIMARY KEY NOT NULL,
    pais VARCHAR(45) NOT NULL,
    estadio VARCHAR(45) NOT NULL,
    dtFundacao VARCHAR(45) NOT NULL,
    qtdTitulos INT NOT NULL,
    urlImagem TEXT
);

CREATE TABLE jogadorArtilheiro (
    id INT AUTO_INCREMENT,
    fkTime VARCHAR(255) NOT NULL,
    nomeJogador VARCHAR(45) NOT NULL,
    gols INT NOT NULL,
    CONSTRAINT fkTime FOREIGN KEY (fkTime) REFERENCES timeCampeao(nome),
    CONSTRAINT pkIdFkTime PRIMARY KEY (id, fkTime)
);

INSERT INTO timeCampeao VALUES
    ('Independiente', 'Argentina', 'Estádio Libertadores da América', '1 de Janeiro de 1905', 7, './assets/Imagens/times/independiente.png'),
    ('Boca Juniors', 'Argentina', 'La bombonera', '3 de Abril de 1905', 6, './assets/Imagens/times/boca_juniors.png'),
    ('Peñarol', 'Uruguai', 'Campeón del Siglo', '28 de Setembro de 1891', 5, './assets/Imagens/times/penarol.jpg'),
    ('River Plate', 'Argentina', 'Mâs Monumental', '25 de Maio de 1901', 4, './assets/Imagens/times/river_plate.png'),
    ('Estudiantes', 'Argentina', 'Jorge Luis Hirschi', '4 de Agosto de 1905', 4, './assets/Imagens/times/estudiantes.jpg'),
    ('Nacional', 'Uruguai', 'Gran Parque Central', '14 de Março de 1899', 3, './assets/Imagens/times/nacional.jpg'),
    ('Olimpia', 'Paraguai', 'Estádio Manuel Ferreira', '25 de Julho de 1902', 3, './assets/Imagens/times/olimpia.jpg'),
    ('São Paulo', 'Brasil', 'Morumbi', '25 de Janeiro de 1930', 3, './assets/Imagens/times/sao_paulo.png'),
    ('Santos', 'Brasil', 'Vila Belmiro', '14 de Abril de 1912', 3, './assets/Imagens/times/santos.jpg'),
    ('Grêmio', 'Brasil', 'Arena do Grêmio', '15 de Setembro de 1903', 3, './assets/Imagens/times/gremio.png'),
    ('Palmeiras', 'Brasil', 'Allianz Parque', '26 de Agosto de 1914', 3, './assets/Imagens/times/palmeiras.png'),
    ('Flamengo', 'Brasil', 'Maracanã', '15 de Novembro de 1895', 3, './assets/Imagens/times/flamengo.png'),
    ('Cruzeiro', 'Brasil', 'Mineirão', '2 de Janeiro de 1921', 2, './assets/Imagens/times/cruzeiro.png'),
    ('Internacional', 'Brasil', 'Estádio Beira-Rio', '4 de Abril de 1909', 2, './assets/Imagens/times/internacional.png'),
    ('Atlético Nacional', 'Colômbia', 'Atanasio Girardot', '30 de Abril de 1947', 2, './assets/Imagens/times/atletico_nacional.jpg'),
    ('Racing', 'Argentina', 'Estádio Presidente Perón', '25 de Março de 1903', 1, './assets/Imagens/times/racing.jpg'),
    ('Argentinos Juniors', 'Argentina', 'Estádio Diego Armando Maradona', '15 de Agosto de 1904', 1, './assets/Imagens/times/argentino_juniors.png'),
    ('Colo-Colo', 'Chile', 'Monumental David Arellano', '19 de Abril de 1925', 1, './assets/Imagens/times/colo_colo.jpg'),
    ('Velez Sarsfield', 'Argentina', 'Estádio José Amalfitani', '1 de Janeiro de 1910', 1, './assets/Imagens/times/velez_sarsfield.png'),
    ('Vasco da Gama', 'Brasil', 'Estádio São Januário', '21 de Agosto de 1898', 1, './assets/Imagens/times/vasco.png'),
    ('Once Caldas', 'Colômbia', 'Estádio Palogrande', '15 de Janeiro de 1961', 1, './assets/Imagens/times/once_caldas.jpg'),
    ('LDU', 'Equador', 'Estádio Rodrigo Paz Delgado', '23 de Outubro de 1918', 1, './assets/Imagens/times/ldu.png'),
    ('Corinthians', 'Brasil', 'Neo Química Arena', '1 de Setembro de 1910', 1, './assets/Imagens/times/corinthians.png'),
    ('Atlético Mineiro', 'Brasil', 'Mineirão', '25 de Março de 1908', 1, './assets/Imagens/times/atletico_mineiro.png'),
    ('San Lorenzo', 'Argentina', 'Estádio Pedro Bidegain', '1 de Abril de 1908', 1, './assets/Imagens/times/san_lorenzo.jpg');

INSERT INTO jogadorArtilheiro VALUES
    (NULL, 'Independiente', 'Daniel Bertoni', 14),
    (NULL, 'Boca Juniors', 'Juan Riquelme', 25),
    (NULL, 'Penãrol', 'Alberto Spencer', 54),
    (NULL, 'River Plate', 'Marcelo Gallardo', 16),
    (NULL, 'Estudiantes', 'Juan R. Verón', 13),
    (NULL, 'Nacional', 'Atilio García', 17),
    (NULL, 'Olimpia', 'Fredy Bareiro', 17),
    (NULL, 'São Paulo', 'Luís Fabiano', 14),
    (NULL, 'Santos', 'Pelé', 17),
    (NULL, 'Grêmio', 'Jardel', 16),
    (NULL, 'Palmeiras', 'Rony', 16),
    (NULL, 'Flamengo', 'Gabigol', 30),
    (NULL, 'Cruzeiro', 'Palinha', 20),
    (NULL, 'Internacional', 'Leandro Damião', 11),
    (NULL, 'Atlético Nacional', 'Juan Pablo Ángel', 16),
    (NULL, 'Racing', 'Juan Carlos Cárdenas', 16),
    (NULL, 'Argentinos Juniors', 'Diego Maradona', 8),
    (NULL, 'Colo-Colo', 'Esteban Paredes', 20),
    (NULL, 'Velez Sarsfield', 'José Flores', 9),
    (NULL, 'Vasco da Gama', 'Romário', 11),
    (NULL, 'Once Caldas', 'Juan Carlos Henao', 6),
    (NULL, 'LDU', 'Claudio Bieler', 8),
    (NULL, 'Corinthians', 'Luizão', 10),
    (NULL, 'Atlético Mineiro', 'Hulk', 13),
    (NULL, 'San Lorenzo', 'Alberto Acosta', 9);

INSERT INTO jogo VALUES
    (NULL, 'Jogo da memória', 10);
