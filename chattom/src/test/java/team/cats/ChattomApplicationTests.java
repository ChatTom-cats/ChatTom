package team.cats;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team.cats.mapper.UserMapper;
import team.cats.pojo.User;

import java.util.List;

@SpringBootTest
class ChattomApplicationTests {

    @Autowired
    private UserMapper userMapper;

    @Test
    void contextLoads() {
    }

    @Test
    public void add() {
        User user = new User();
        user.setUsername("tomy");
        user.setGender("男");
        user.setAge(20);
        userMapper.insert(user);
        System.out.println(user);
    }

    @Test
    public void findByCondition() {
        EntityWrapper<User> ew = new EntityWrapper<>();
        ew.eq("username","tomy");
        List<User> users = userMapper.selectList(ew);
        System.out.println(users);
    }

    @Test
    public void findByPage() {
        List<User> users = userMapper.selectPage(
                new Page(1,2),
                new EntityWrapper<User>().gt("id", 1)
        );
        System.out.println(users);
    }


}
