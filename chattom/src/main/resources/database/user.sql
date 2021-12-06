create database chattom charset utf8;
use chattom;

create table t_user (
    id varchar(50) primary key,
    username varchar(50) not null unique,
    gender varchar(5),
    age tinyint
)engine=InnoDB charset utf8;

insert into t_user(id, username, gender, age) values ('1','admin','男',18);
insert into t_user(id, username, gender, age) values ('2','vivan','女',20);