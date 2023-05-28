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
    ('Independiente', 'Argentina', 'Estádio Libertadores da América', '1 de Janeiro de 1905', 7, 'https://www.futbox.com/img/v1/233/162/d98/b60/72be8a1969aa1671e1bf.png'),
    ('Boca Juniors', 'Argentina', 'La bombonera', '3 de Abril de 1905', 6, 'https://static-img.zz.pt/history/imgS620I11765T20190523171001.png'),
    ('Peñarol', 'Uruguai', 'Campeón del Siglo', '28 de Setembro de 1891', 5, 'https://i.pinimg.com/originals/79/a8/ef/79a8ef92cf4ef8aa8ef7b268ad16dd71.jpg'),
    ('River Plate', 'Argentina', 'Mâs Monumental', '25 de Maio de 1901', 4, 'https://static-img.zz.pt/history/imgS620I11763T20190522184524.png'),
    ('Estudiantes', 'Argentina', 'Jorge Luis Hirschi', '4 de Agosto de 1905', 4, 'https://wallpapercave.com/wp/wp10783008.jpg'),
    ('Nacional', 'Uruguai', 'Gran Parque Central', '14 de Março de 1899', 3, 'https://besthqwallpapers.com/Uploads/26-4-2018/50051/thumb2-club-nacional-de-football-4k-uruguayan-football-club-logo-material-design.jpg'),
    ('Olimpia', 'Paraguai', 'Estádio Manuel Ferreira', '25 de Julho de 1902', 3, 'https://pbs.twimg.com/media/E7l5nHMXoAcO4AC.jpg'),
    ('São Paulo', 'Brasil', 'Morumbi', '25 de Janeiro de 1930', 3, 'https://static-img.zz.pt/history/imgS620I11715T20190403171814.png'),
    ('Santos', 'Brasil', 'Vila Belmiro', '14 de Abril de 1912', 3, 'https://www.futebolnaveia.com.br/wp-content/uploads/2023/04/Design-sem-nome-61-1.jpg'),
    ('Grêmio', 'Brasil', 'Arena do Grêmio', '15 de Setembro de 1903', 3, 'https://www.ogol.com.br/img/history/imgS620I11719T20190404153933.png'),
    ('Palmeiras', 'Brasil', 'Allianz Parque', '26 de Agosto de 1914', 3, 'https://static-img.zz.pt/history/imgS620I11712T20190402191855.png'),
    ('Flamengo', 'Brasil', 'Maracanã', '15 de Novembro de 1895', 3, 'https://static-img.zz.pt/history/imgS620I11697T20190326175725.png'),
    ('Cruzeiro', 'Brasil', 'Mineirão', '2 de Janeiro de 1921', 2, 'https://www.ogol.com.br/img/history/imgS620I11724T20190409193619.png'),
    ('Internacional', 'Brasil', 'Estádio Beira-Rio', '4 de Abril de 1909', 2, 'https://static-img.zz.pt/history/imgS620I11716T20190403225419.png'),
    ('Atlético Nacional', 'Colômbia', 'Atanasio Girardot', '30 de Abril de 1947', 2, 'https://besthqwallpapers.com/Uploads/12-5-2018/52223/thumb-atletico-nacional-4k-logo-colombian-football-club-silk-texture.jpg'),
    ('Racing', 'Argentina', 'Estádio Presidente Perón', '25 de Março de 1903', 1, 'https://besthqwallpapers.com/Uploads/1-11-2017/26625/thumb2-racing-club-de-avellaneda-4k-argentine-football-club-emblem-logo.jpg'),
    ('Argentinos Juniors', 'Argentina', 'Estádio Diego Armando Maradona', '15 de Agosto de 1904', 1, 'https://www.futbox.com/img/v1/806/965/84d/29f/3f1dde187738b5845e62.png'),
    ('Colo-Colo', 'Chile', 'Monumental David Arellano', '19 de Abril de 1925', 1, 'https://images2.alphacoders.com/118/1182651.jpg'),
    ('Velez Sarsfield', 'Argentina', 'Estádio José Amalfitani', '1 de Janeiro de 1910', 1, 'https://www.futbox.com/img/v1/e24/9b2/49d/080/678ce5d47eed43da8d90.png'),
    ('Vasco da Gama', 'Brasil', 'Estádio São Januário', '21 de Agosto de 1898', 1, 'https://portaledicase.com/wp-content/uploads/2023/04/Vasco-da-Gama.png'),
    ('Once Caldas', 'Colômbia', 'Estádio Palogrande', '15 de Janeiro de 1961', 1, 'https://occidente.co/wp-content/uploads/2019/02/once-caldas.jpg'),
    ('LDU', 'Equador', 'Estádio Rodrigo Paz Delgado', '23 de Outubro de 1918', 1, 'https://enavtpfootball.files.wordpress.com/2020/11/ldu-quito.png'),
    ('Corinthians', 'Brasil', 'Neo Química Arena', '1 de Setembro de 1910', 1, 'https://static-img.zz.pt/history/imgS620I11702T20190328165351.png'),
    ('Atlético Mineiro', 'Brasil', 'Mineirão', '25 de Março de 1908', 1, 'https://www.futbox.com/img/v1/0e4/635/8c5/7a6/b0b0a2e0a3ee59c5b8f3.png'),
    ('San Lorenzo', 'Argentina', 'Estádio Pedro Bidegain', '1 de Abril de 1908', 1, 'https://w0.peakpx.com/wallpaper/23/429/HD-wallpaper-ca-san-lorenzo-de-almagro-logo-creative-art-red-gray-checkered-flag-argentinian-football-club-argentine-superleague-primera-division-emblem-silk-texture-buenos-aires-argentina-football-san.jpg');

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
