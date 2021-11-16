package team.cats.mapper;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import team.cats.pojo.User;

/**
 * 继承BaseMapper即可使用，BaseMapper里面实现了很多增删改查的方法
 */

public interface UserMapper extends BaseMapper<User> {

}
