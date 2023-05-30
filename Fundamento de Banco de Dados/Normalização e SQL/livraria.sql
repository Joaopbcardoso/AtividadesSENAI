
create TABLE unidade_livraria(
  nome_unidade_pk VARCHAR(100) NOT NULL,
  setor INT NOT NULL,
  prateleira VARCHAR(20) NOT NULL,
  PRIMARY KEY(nome_unidade_pk)
)
create table livros(
  titulo varchar(40) not NULL,
  preço varchar(10),
  id_livro_pk int NOT NULL,
  PRIMARY KEY(id_livro_pk)
)
CREATE	TABLE unidade_livros(
  id_livro_fk INT not NULL,
  nome_unidade_fk VARCHAR(100) NOT NULL,
  FOREIGN KEY(nome_unidade_fk) references unidade_livraria(nome_unidade_pk),
  FOREIGN KEY(id_livro_fk) references livros(id_livro_pk)
  )
create table generos(
  genero varchar(30),
  id_livros_fk INT not NULL,
  FOREIGN KEY(id_livros_fk) references livros(id_livro_pk)
)
CREATE TABLE autor(
  nome_autores VARCHAR(50),
  id_livros_fk int NOT NULL,
  FOREIGN KEY(id_livros_fk) references livros(id_livro_pk)
)
CREATE TABLE clientes(
  nome_cliente varchar(30) NOT NULL,
  id_cliente_pk int NOT NULL,
  data_nacimento varchar(10),
  CEP varchar(9),
  sexo varchar(9),
  CPF varchar(14),
  PRIMARY KEY(id_cliente_pk)
  )
CREATE TABLE sobrenomes(
    sobrenomes varchar(100),
    id_cliente_fk int not null,
    FOREIGN KEY(id_cliente_fk) references clientes(id_cliente_pk)
  )
create TABLE histórico(
  histórico varchar(400),
  id_cliente_fk int not null,
  FOREIGN KEY(id_cliente_fk) references clientes(id_cliente_pk)
  )
  
  insert INTO unidade_livraria(nome_unidade_pk, setor, prateleira)
  VALUES('Livraria Catarinense continente', 3, 5)
  
  insert INTO livros(titulo,  preço, id_livro_pk)
  values('Harry Potter e a predra filosofal','R$36,50', 524686 )
  
  insert INTO unidade_livros(id_livro_fk, nome_unidade_fk)
  values(524686, 'Livraria Catarinense continente')
  
  insert INTO generos(genero,  id_livros_fk)
  values('Ficção', 524686)
  
  insert INTO autor(nome_autores, id_livros_fk)
  values('JK Rowling', 524686)
  
  insert into clientes(nome_cliente, id_cliente_pk, data_nacimento, CEP, sexo, CPF)
  values('Pedro', 547893, '23/01/2007', '88113-600', 'masculino', '761.026.190-48')
  
  insert into sobrenomes(sobrenomes, id_cliente_fk)
  values('Muller', 547893)
  
  insert into histórico(histórico, id_cliente_fk)
  values('Livro da ciência,Harry Potter e a predra filosofal', 547893)
  
  select*from unidade_livraria
  select*from livros
  select*FROM unidade_livros
  select*from unidade_livros
  select*from generos
  select*from autor
  select*from clientes
  select*FROM sobrenomes
  select*from histórico
