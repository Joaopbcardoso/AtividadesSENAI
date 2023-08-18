create table cliente(
    nome_cliente_pk VARCHAR(60) NOT NULL,   
    primary key(nome_cliente_pk)
)
create table pedido(
    id_pedido_pk INT NOT NULL,
    nome_cliente_fk VARCHAR(60) NOT NULL,
    primary key(id_pedido_pk),
    foreign key(nome_cliente_fk) references cliente (nome_cliente_pk)
)
create table produto(
    id_produto_pk INT NOT NULL,
    nome_produto VARCHAR(50),
    categoria_produto VARCHAR (50),
    primary key (id_produto_pk)
)
create table pedido_cliente(
  id_pedido_fk int not NULL,
  nome_cliente_fk VARCHAR(60) NOT NULL,
  foreign key(id_pedido_fk) references pedido (id_pedido_pk),
  foreign key(nome_cliente_fk) references cliente (nome_cliente_pk)
)

insert into cliente(nome_cliente_pk)
values('Arthur')

insert into pedido(id_pedido_pk, nome_cliente_fk)
values('1', 'Arthur')

insert into produto(id_produto_pk, nome_produto, categoria_produto)
values ('1', 'Arroz', 'Comida')

insert into pedido_cliente(id_pedido_fk, nome_cliente_fk)
values(1, 'Arthur')

Select * from pedido
Select * from cliente
Select * from produto
Select * from pedido_cliente
