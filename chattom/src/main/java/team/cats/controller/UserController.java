package team.cats.controller;


import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import team.cats.pojo.User;
import team.cats.service.UserService;


@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/register")
    @ResponseBody
    public String register(@RequestBody JSONObject userMsg) {
        User user = new User();
        user.setUsername(userMsg.getString("name"));
        user.setAge(Integer.valueOf(userMsg.getString("age")));
        user.setGender(userMsg.getString("sex"));
        System.out.println(user);
        Boolean isSuccess = userService.register(user);
        System.out.println(isSuccess);
        return "";
    }
}
