create database chattom charset utf8;
use chattom;

create table t_user (
    id int primary key auto_increment,
    username varchar(50) not null unique,
    gender varchar(5),
    age tinyint
)engine=InnoDB charset utf8;

insert into t_user(username, gender, age) values ('admin','男',18);
insert into t_user(username, gender, age) values ('vivan','女',20);