create TABLE Empregado(
  id_empregado_pk int not null,
  nome_empregado varchar(90) not NULL,
  horas_semanais varchar(25),
 PRIMARY KEY(id_empregado_pk)
)
CREATE TABLE Empresa(
  id_empresa_pk int not NULL,
  cep_empresa varchar(200),
  complemento_empresa VARCHAR(100),
  PRIMARY KEY(id_empresa_pk)
)
create TABLE Empregado_Empresa(
id_empregado_fk INT not NULL,
id_empresa_fk INT not NULL,
FOREIGN KEY (id_empregado_fk) references empregado(id_empregado_pk),
FOREIGN KEY (id_empresa_fk) REFERENCES empresa(id_empresa_pk)
)

insert into empregado(id_empregado_pk, nome_empregado, horas_semanais)
values(790426, 'Jonathan','40 horas')

insert into empresa(id_empresa_pk, cep_empresa, complemento_empresa)
values(389497, '88113-600', 45)

insert into empregado_empresa(id_empregado_fk, id_empresa_fk)
values(790426, 389497)

select*FROM empregado
select*FROM empresa
select*FROM empregado_empresa
