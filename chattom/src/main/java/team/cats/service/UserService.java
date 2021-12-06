package team.cats.service;

import team.cats.pojo.User;

import java.util.List;

public interface UserService {

    public List<User> findAll();

    public boolean register(User user);

    public boolean isRegistered(String id);

}
