CREATE DATABASE DrogaCruz;
USE Drogacruz;

CREATE TABLE produtos(
	id_produto INT NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    categoria_produto VARCHAR (50) NOT NULL,
    valor_produto DECIMAL(6, 2) NOT NULL,
    quantidade_produto INT NOT NULL,
    data_cadastro_produto DATE
);

INSERT INTO produtos(id_produto, nome_produto, valor_produto, categoria_produto, quantidade_produto, data_cadastro_produto)
VALUES
	(1, 'Paracetamol 750mg C/20', 10.99, 'Medicamentos', 100, '2025-04-28'),
    (2, 'Tadalafila 20mg C/4', 10.69, 'Medicamentos', 100, '2025-04-28'),
    (3, 'Levonorgestrel 1.5mg C/1', 19.99, 'Medicamentos', 100, '2025-04-28'),
    (4, 'Loratadina 10mg C/12', 11.99, 'Medicamentos', 100, '2025-04-28'),
    (5, 'Xarope', 18.90, 'Medicamentos', 100, '2025-04-28'),
    (6, 'Kit Actine', 44.99, 'Cuidados Pessoais', 70, '2025-04-28'),
    (7, 'Desodorante Rexona Men', 26.90, 'Cuidados Pessoais', 70, '2025-04-28'),
    (8, 'Enxaguante Bucal', 16.79, 'Cuidados Pessoais', 70, '2025-04-28'),
    (9, 'Óleo Finalizador', 31.99, 'Cuidados Pessoais', 70, '2025-04-28'),
    (10, 'Máscara Capilar', 348.90, 'Cuidados Pessoais', 40, '2025-04-28'),
    (11, 'Vitamina D C/30', 15.19, 'Vitaminas', 100, '2025-04-28'),
    (12, 'Polivitamínico Homem C/60', 29.90, 'Vitaminas', 100, '2025-04-28'),
    (13, 'Vitamina Centrotabs C/60', 15.99, 'Vitaminas', 100, '2025-04-28'),
    (14, 'Vitamina Kids C/60', 12.90, 'Vitaminas', 100, '2025-04-28'),
    (15, 'Vitamina AZ C/60', 13.90, 'Vitaminas', 100, '2025-04-28'),
    (16, 'Diesel Only The Brave Tattoo', 429.99, 'Perfumes', 20, '2025-04-28'),
    (17, 'David Beckham Homme', 189.90, 'Perfumes', 20, '2025-04-28'),
    (18, 'Cristiano Ronaldo Origins', 396.90, 'Perfumes', 20, '2025-04-28'),
    (19, 'Sabah Al Ward Al Wataniah', 219.90, 'Perfumes', 20, '2025-04-28'),
    (20, 'Fakhar Gold Lattafa', 199.90, 'Perfumes', 20, '2025-04-28');
    
SELECT * FROM produtos;
    
